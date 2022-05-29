import { settings } from './game';
import GameObject from './game-object';
import { Event } from './event-emitter';
import Utils from './utils';
import Player from './player';
import Card, { CardAttributes } from './card';
import { Rank, rankToString } from './types';
import EventEmitter from './event-emitter';

export type HandAttributes = {
  id: string;
  cards: CardAttributes[];
  hasPairs: boolean;
  cardTotal: number;
  blackjack: boolean;
  firstMove: boolean;
};

export default class Hand extends GameObject {
  static entity = 'hand';

  acesCount!: number;
  betAmount!: number;
  cardHighTotal!: number;
  cardLowTotal!: number;
  cards!: Card[];
  splitCount: number;
  id: string;
  player: Player;

  constructor(player: Player, cards: Card[] = []) {
    super();

    this.reset();

    this.id = Utils.randomId();
    this.player = player;
    this.splitCount = 0;

    for (const card of cards) {
      this.takeCard(card);
    }
  }

  reset(): void {
    this.acesCount = 0;
    this.betAmount = 0;
    this.cardHighTotal = 0;
    this.cardLowTotal = 0;
    this.cards = [];
    this.splitCount = 0;
  }

  takeCards(cards: Card[]): void {
    this.cards = cards;

    for (const card of cards) {
      if (card.showingFace) {
        this.incrementTotalsForCard(card);
      }
    }

    this.emitChange();
  }

  takeCard(card: Card, { prepend = false } = {}): void {
    card.on(Event.Change, this.emitChange);

    if (prepend) {
      this.cards.unshift(card);
    } else {
      this.cards.push(card);
    }

    if (card.showingFace) {
      this.incrementTotalsForCard(card);
    }

    this.emitChange();
  }

  removeCard(): Card {
    const card = this.cards.pop();

    if (!card) {
      throw new Error('No cards left!');
    }

    this.decrementTotalsForCard(card);

    return card;
  }

  removeFirstCard(): Card {
    const card = this.cards.shift();

    if (!card) {
      throw new Error('No cards left!');
    }

    this.decrementTotalsForCard(card);

    return card;
  }

  incrementTotalsForCard(card: Card): void {
    if (card.rank === Rank.Ace) {
      this.acesCount += 1;
      this.cardLowTotal += 1;

      if (this.cardHighTotal + 11 <= 21) {
        this.cardHighTotal += 11;
      } else {
        this.cardHighTotal += 1;
      }
    } else {
      this.cardHighTotal += card.value;
      this.cardLowTotal += card.value;
    }
  }

  decrementTotalsForCard(card: Card): void {
    if (card.rank === Rank.Ace) {
      this.acesCount -= 1;
      this.cardLowTotal -= 1;

      if (this.acesCount > 0 && this.cardHighTotal + 11 > 21) {
        this.cardHighTotal -= 1;
      } else {
        this.cardHighTotal -= 11;
      }
    } else {
      this.cardHighTotal -= card.value;
      this.cardLowTotal -= card.value;
    }
  }

  removeCards(): Card[] {
    const cards = this.cards;

    if (!EventEmitter.disableEvents) {
      for (const card of cards) {
        card.removeListener(Event.Change, this.emitChange);
      }
    }

    this.reset();
    this.emitChange();

    return cards;
  }

  serialize({ showHidden = false } = {}): string {
    // removed question mark from serialize
    return this.cards
      .map((card) =>
        card.showingFace || showHidden ? rankToString(card.rank) : ''
      )
      .join(' ');
  }

  attributes(): HandAttributes {
    return {
      id: this.id,
      cards: this.cards.map((card) => card.attributes()),
      hasPairs: this.hasPairs,
      cardTotal: this.cardTotal,
      blackjack: this.blackjack,
      firstMove: this.firstMove,
    };
  }

  get allowSplit(): boolean {
    if (!this.hasPairs || this.splitCount >= settings.maxHandsAllowed - 1) {
      return false;
    }

    if (this.hasAces && this.fromSplit && !settings.allowResplitAces) {
      return false;
    }

    return true;
  }

  get fromSplit(): boolean {
    return this.splitCount > 0;
  }

  get fromAceSplit(): boolean {
    return this.fromSplit && this.cards[0].rank === Rank.Ace;
  }

  get allowSurrender(): boolean {
    return this.firstMove && settings.allowLateSurrender;
  }

  get allowDouble(): boolean {
    return this.firstMove;
  }

  get doubleOnly911(): boolean {
    if (settings.onlyDouble911) {
      if (this.isSoft || (this.cardTotal > 11 || this.cardTotal < 9)) {
        return false;
      }
    }

    return true
  }

  get allowDAS(): boolean {
    return this.firstMove && settings.allowDoubleAfterSplit;
  }

  get cardTotal(): number {
    return this.cardHighTotal > 21 ? this.cardLowTotal : this.cardHighTotal;
  }

  get firstMove(): boolean {
    return this.cards.length <= 2;
  }

  get busted(): boolean {
    return this.cardTotal > 21;
  }

  get blackjack(): boolean {
    return (
      this.cards.length === 2 && this.cardHighTotal === 21 && !this.fromSplit
    );
  }

  get finished(): boolean {
    return (
      // this.busted || this.blackjack || this.fromAceSplit
      // this.busted || this.blackjack || (this.fromAceSplit && !this.hasAces)
      // this.busted || this.blackjack || (this.fromAceSplit && !settings.allowResplitAces)
      // this.busted || this.blackjack || (settings.allowResplitAces && (this.hasAces === false))
      this.busted || this.blackjack || (!settings.allowResplitAces && this.fromAceSplit)

    );
  }

  get hasPairs(): boolean {
    return (
      this.cards.length === 2 && this.cards[0].value === this.cards[1].value
    );
  }

  // A hand is "soft" if there is an ace and the next card will not bust:
  // 1. there's at least one ace
  // 2. counting the aces as value 1, the total is <= 11
  get isSoft(): boolean {
    return this.acesCount > 0 && this.cardLowTotal <= 11;
  }

  get isHard(): boolean {
    return !this.isSoft;
  }

  get hasAces(): boolean {
    return (
      this.cards.length === 2 &&
      this.cards[0].rank === Rank.Ace &&
      this.cards[1].rank === Rank.Ace
    );
  }
}
