import GameObject from './game-object';
import Utils from './utils';
import Shoe from './shoe';
import {
  Suit,
  Rank,
  cardRankToValue,
  suitToString,
  rankToString,
  CountingSystem,
} from './types';

import { settings } from './game';

export type CardAttributes = {
  id: string;
  suit: string;
  rank: string;
  showingFace: boolean;
};

function hiLoValue(rank: Rank): number {
  switch (rank) {
    case Rank.Ace:
    case Rank.King:
    case Rank.Queen:
    case Rank.Jack:
    case Rank.Ten:
      return -1;
    case Rank.Nine:
    case Rank.Eight:
    case Rank.Seven:
      return 0;
    case Rank.Six:
    case Rank.Five:
    case Rank.Four:
    case Rank.Three:
    case Rank.Two:
      return 1;
  }
}

function zenValue(rank: Rank): number {
  switch (rank) {
    case Rank.King:
    case Rank.Queen:
    case Rank.Jack:
    case Rank.Ten:
      return -2;
    case Rank.Ace:
      return -1;
    case Rank.Nine:
    case Rank.Eight:
      return 0;
    case Rank.Seven:
    case Rank.Three:
    case Rank.Two:
      return 1;
    case Rank.Six:
    case Rank.Five:
    case Rank.Four:
      return 2;
  }
}

function koValue(rank: Rank): number {
  switch (rank) {
    case Rank.Ace:
    case Rank.King:
    case Rank.Queen:
    case Rank.Jack:
    case Rank.Ten:
      return -1;
    case Rank.Nine:
    case Rank.Eight:
      return 0;
    case Rank.Seven:
    case Rank.Six:
    case Rank.Five:
    case Rank.Four:
    case Rank.Three:
    case Rank.Two:
      return 1;
  }
}

function ao2Value(rank: Rank): number {
  switch (rank) {
    case Rank.King:
    case Rank.Queen:
    case Rank.Jack:
    case Rank.Ten:
      return -2;
    case Rank.Nine:
      return -1;
    case Rank.Ace:
    case Rank.Eight:
      return 0;
    case Rank.Seven:
    case Rank.Three:
    case Rank.Two:
      return 1;
    case Rank.Six:
    case Rank.Five:
    case Rank.Four:
      return 2;
  }
}

function Ho2Value(rank: Rank): number {
  switch (rank) {
    case Rank.King:
    case Rank.Queen:
    case Rank.Jack:
    case Rank.Ten:
      return -2;
    case Rank.Nine:
    case Rank.Ace:
    case Rank.Eight:
      return 0;
    case Rank.Two:
    case Rank.Three:
    case Rank.Six:
    case Rank.Seven:
      return 1;
    case Rank.Four:
    case Rank.Five:
      return 2;
  }
}

function getCountSystem(countSystem, rank) {
  switch (countSystem) {
    case CountingSystem.HiLo:
      return hiLoValue(rank);
    case CountingSystem.Zen:
      return zenValue(rank);
    case CountingSystem.Ko:
      return koValue(rank);
    case CountingSystem.Ao2:
      return ao2Value(rank);
    case CountingSystem.Ho2:
      return Ho2Value(rank);
  }
}

function getFaceCardValue(countSystem) {
  switch (countSystem) {
    case CountingSystem.HiLo:
      return -1;
    case CountingSystem.Zen:
      return -2;
    case CountingSystem.Ao2:
      return -2;
    case CountingSystem.Ho2:
      return -2;
    case CountingSystem.Ko:
      return -1;
  }
}

export default class Card extends GameObject {
  static entityName = 'card';

  id: string;
  suit: Suit;
  rank: Rank;
  shoe: Shoe;
  showingFace: boolean;
  value: number;
  countValue: number;
  showAfterSplit: boolean;

  constructor(suit: Suit, rank: Rank, shoe: Shoe) {
    super();
    this.id = Utils.randomId();
    this.suit = suit;
    this.rank = rank;
    this.shoe = shoe;
    this.showingFace = true;
    this.value = cardRankToValue(rank);
    this.countValue = getCountSystem(settings.countingSystem, rank);
    this.showAfterSplit = true;
  }

  flip(): void {
    this.showingFace = !this.showingFace;

    this.shoe.runningCount += (this.showingFace ? Math.abs(getFaceCardValue(settings.countingSystem)) : getFaceCardValue(settings.countingSystem)) * this.countValue;

    this.emitChange();
  }

  attributes(): CardAttributes {
    return {
      id: this.id,
      suit: suitToString(this.suit),
      rank: rankToString(this.rank),
      showingFace: this.showingFace,
    };
  }
}
