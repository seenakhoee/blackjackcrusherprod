import Utils from './utils';
import Deck from './deck';
import Card, { CardAttributes } from './card';
import GameObject from './game-object';
import BasicStrategyChecker from './basic-strategy-checker';
import ExtendableError from './extendable-error';
import { illustrious18Deviations } from './hi-lo-deviation-checker';
import { wongsFullSoftDeviations, wongsFull } from './wong-deviation-check';

import { settings } from './game';
import {
  Rank,
  ChartType,
  cardValueToRank,
  rankToString,
  GameMode,
  Move,
} from './types';

type ShoeAttributes = {
  cards: CardAttributes[];
  runningCount: number;
  hiLoTrueCount: number;
  penetration: number;
  hiLoTrueCountFullDeck: number;
};

export class OutOfCardsError extends ExtendableError { }

export default class Shoe extends GameObject {
  static entityName = 'shoe';

  cards!: Card[];
  currentCardIndex!: number;
  runningCount!: number;

  constructor(runningCount) {
    super();
    this.setCards(runningCount, this._setupCards());
    this.shuffle();
  }

  setCards(runningCount, cards: Card[]): void {
    this.runningCount = runningCount;
    this.currentCardIndex = cards.length - 1;
    for (const card of cards) {
      this.runningCount -= card.countValue;
      card.showingFace = false;
    }

    this.cards = cards;
    this.emitChange();
  }

  resetCards(runningCount): void {
    this.runningCount = runningCount;
    this.currentCardIndex = this.cards.length - 1;
    this.shuffle();
  }

  shuffle(): void {
    Utils.arrayShuffle(this.cards);

    if (settings.mode === GameMode.Pairs) {
      this._setupPairsMode();
    }

    if (settings.mode === GameMode.Uncommon) {
      this._setupUncommonMode();
    }

    if (settings.mode === GameMode.SoftTotals) {
      this._setupGameMode();
    }


    if (settings.mode === GameMode.HardTotals) {
      this._setupGameMode();
    }

    if (settings.mode === GameMode.Illustrious18) {
      this._setupGameMode();
    }

    if (settings.debug) {
      console.log('Shoe shuffled');
    }
  }

  drawCard({ showingFace = true } = {}): Card {
    // This is an edge case that will rarely be reached during game mode. It can
    // happen if the pen is sufficiently deep and player count is large enough.
    // It does occur frequently in simulation mode where large amounts of hands
    // are played. Casinos seem to deal with it in varying ways. We handle it by
    // pushing all player hands and reshuffling.
    if (this.currentCardIndex < 0) {
      throw new OutOfCardsError();
    }

    const card = this.cards[this.currentCardIndex];

    this.currentCardIndex -= 1;

    card.showingFace = showingFace;

    if (showingFace) {
      this.runningCount += card.countValue;
    }

    this.emitChange();

    return card;
  }

  remainingCards(): Card[] {
    return this.cards.slice(0, this.currentCardIndex + 1);
  }

  attributes(): ShoeAttributes {
    return Utils.copy({
      penetration: Utils.round(this.penetration, 2),
      runningCount: this.runningCount,
      hiLoTrueCountFullDeck: this.hiLoTrueCountFullDeck,
      hiLoTrueCount: this.hiLoTrueCountFullDeck,
      cards: this.remainingCards().map((card) => card.attributes()),
    });
  }

  serialize(): string {
    return (
      `(${this.cardCount} card${this.cardCount > 1 ? 's' : ''}): ` +
      this.remainingCards()
        .map((card) => rankToString(card.rank))
        .reverse()
        .join(' ')
    );
  }

  get cardCount(): number {
    return this.currentCardIndex + 1;
  }

  get maxCards(): number {
    return settings.deckCount * 52;
  }

  get needsReset(): boolean {
    if (settings.mode !== GameMode.Default) {
      return true;
    }

    return this.cardCount / this.maxCards < 1 - settings.penetration;
  }

  get cardsRemainingRatio(): number {
    return this.cardCount / this.maxCards;
  }

  get penetration(): number {
    return Math.floor((1 - this.cardsRemainingRatio) * 100);
  }

  get decksRemaining(): number {
    return this.cardsRemainingRatio * settings.deckCount;
  }

  get numberOfDecksDelt(): number {
    return this.maxCards / 52
  }

  get fullDeckEstimation(): number {
    return this.cardsRemainingRatio * settings.deckCount;
  }

  get hiLoTrueCount(): number {
    return Math.floor((this.runningCount / this.decksRemaining) * 100) / 100;
  }

  get hiLoTrueCountFullDeck(): number {
    // running count / number of decks remaining floored
    // number of cards - number of decks delt
    //
    return this.runningCount / Math.ceil((this.maxCards - this.cardCount) / 52);
  }

  _setupCards(): Card[] {
    const decks = [];

    for (let i = 0; i < settings.deckCount; i += 1) {
      decks.push(new Deck(this));
    }

    let cards: Card[] = [];
    while (decks.length > 0) {
      const deck = decks.pop();
      if (deck) {
        cards = cards.concat(...deck.cards);
      }
    }
    return cards;
  }

  _moveCardsToFront(
    playerRank1: Rank,
    playerRank2: Rank,
    dealerUpcard?: number
  ): void {
    // Move the first two cards to the 0th and 2nd spot so they are dealt to the
    // player at the start of the game.
    Utils.arrayMove(
      this.cards,
      this.cards.findIndex((card) => card.rank === playerRank1),
      this.cards.length - 1
    );

    if (dealerUpcard) {
      Utils.arrayMove(
        this.cards,
        this.cards.findIndex((card) => card.value === dealerUpcard),
        this.cards.length - 1 - 1
      );
    }

    Utils.arrayMove(
      this.cards,
      this.cards.findIndex((card) => card.rank === playerRank2),
      this.cards.length - 1 - 2
    );
  }

  _playerTotalToTwoCardRank(total: number, chartType: ChartType): [Rank, Rank] {
    const [rank1, rank2] = this._playerTotalToTwoCardValues(total, chartType);
    return [cardValueToRank(rank1), cardValueToRank(rank2)];
  }

  _playerTotalToTwoCardValues(
    total: number,
    chartType: ChartType
  ): [number, number] {
    switch (chartType) {
      case ChartType.Hard: {
        const value = total > 11 ? 10 : 2;
        return [value, total - value];
      }

      case ChartType.Soft:
        return [11, total - 11];

      default:
      case ChartType.Splits:
        return [total, total];
    }
  }

  _setupPairsMode(): void {
    const rank = Utils.randomRank();
    this._moveCardsToFront(rank, rank);
  }

  _setupUncommonMode(): void {
    const [chartType, chart] = Utils.arraySample(
      Array.from(BasicStrategyChecker.uncommonHands(settings).entries())
    );

    const [playerTotal, dealerUpcards] = Utils.arraySample(
      Array.from(chart.entries())
    );

    // TODO: Remove this once we have uncommon values defined for all charts.
    if (dealerUpcards.length === 0) {
      return;
    }

    const dealerUpcard = Utils.arraySample(dealerUpcards);
    const [rank1, rank2] = this._playerTotalToTwoCardRank(
      playerTotal,
      chartType
    );

    this._moveCardsToFront(rank1, rank2, dealerUpcard);
  }

  _setupGameMode(): void {
    // First
    // looks like over here, we returning the illustrious chart map and changing it to an array.
    // then picking a random one index from the array, and testing against that.

    let mode;
    let chartTypeGameMode;
    switch (settings.mode) {
      case GameMode.Illustrious18:
        mode = illustrious18Deviations
        chartTypeGameMode = ChartType.Hard
        break;
      case GameMode.SoftTotals:
        mode = wongsFullSoftDeviations
        chartTypeGameMode = ChartType.Soft
        break;
      case GameMode.HardTotals:
        mode = wongsFull
        chartTypeGameMode = ChartType.Hard
    }
    // the playerTotal from the entries, not the actual playerTotal from the hand delt
    const [playerTotal, entries] = Utils.arraySample(
      Array.from(mode.entries())
    );

    const [dealerTotal, deviation] = Utils.arraySample(Array.from(entries));

    let total =
      deviation.correctMove === Move.AskInsurance
        ? Utils.random(2, 20)
        : playerTotal;

    const pair = deviation.correctMove === Move.Split;

    // TODO: Make the splits format just equal the player total.
    if (pair) {
      total = total / 2;
    }

    const [rank1, rank2] = this._playerTotalToTwoCardRank(
      total,
      // need to work on this part
      pair ? ChartType.Splits : chartTypeGameMode
    );

    this._moveCardsToFront(rank1, rank2, dealerTotal);

    // Include all face up cards in the count from the opening hand.
    const i1 = this.cards[this.cards.length - 1].countValue;
    const i2 = this.cards[this.cards.length - 2].countValue;
    const i3 = this.cards[this.cards.length - 3].countValue;

    // We artificially set the running count so that the true count works out
    // to what is required to act on the current illustrious 18 deviation. We
    // use the formula `true_count = running_count / decks_remaining`. We are
    // careful to subtract the next 3 cards from the running count since they
    // are about to be drawn by the dealer.
    let runningCount =
      deviation.index[1] *
      (((this.maxCards - 3) * settings.deckCount) / this.maxCards) -
      i1 -
      i2 -
      i3;

    const lt = deviation.index[0][0] === '<';

    // Since we forced the true count to a nice number, the running count will
    // be an ugly decimal. We round it up or down depending on whether the
    // illustrious 18 deviation acts on indices going further negative or
    // positive.
    runningCount = Math[lt ? 'floor' : 'ceil'](runningCount);

    // Force the true count one point less for the '<' comparison since it
    // is an exclusive equality check.
    if (deviation.index[0].includes('<')) {
      runningCount -= this.decksRemaining;
    }

    // Half time time we randomly alter the running count to something
    // incorrect to be able to test the users knowledge.
    if (Utils.random(0, 1) === 0) {
      runningCount += this.decksRemaining * (lt ? 2 : -2);
    }

    this.runningCount = runningCount;
  }
}
