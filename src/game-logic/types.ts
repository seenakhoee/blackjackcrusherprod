// starting Move with 1 because promise was treating resolving 0 as false.
export enum Move {
  AskInsurance = 1,
  Double,
  Hit,
  NoInsurance,
  Split,
  Stand,
  Surrender,
}

export enum ChartMove {
  // TODO: DRY with `Move`?
  AskInsurance,
  Double,
  Hit,
  NoInsurance,
  Split,
  Stand,
  Surrender,

  DoubleOrHit,
  DoubleOrStand,
  SplitOrDouble,
  SplitOrHit,
  SplitOrStand,
  SurrenderOrHit,
  SurrenderOrSplit,
  SurrenderOrStand,
}

export enum HandWinner {
  Player,
  Dealer,
  Push,
}

export enum ChartType {
  Hard,
  Soft,
  Splits,
}

export enum GameStep {
  PlayHandsLeft,
  PlayHandsRight,
  Start,
  WaitingForInsuranceInput,
  WaitingForNewGameInput,
  WaitingForPlayInput,
  AskForCount,
}

export enum Suit {
  Hearts,
  Diamonds,
  Clubs,
  Spades,
}

export enum Rank {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

export enum PlayerStrategy {
  UserInput,
  BasicStrategy,
  BasicStrategyI18,
  BasicStrategyI18Fab4,
  Dealer,
}

export enum BlackjackPayout {
  ThreeToTwo,
  SixToFive,
}

export enum GameMode {
  Default,
  Pairs,
  Uncommon,
  Illustrious18,
  SoftTotals,
  HardTotals
}

export enum CountingSystem {
  HiLo,
  Zen,
  Ko,
  Ao2,
  Ho2
}

export enum DeckEstimation {
  Full,
  Half,
  Quarter,
  Exact
}

export type CheckResult = {
  code: Move;
  hint: string;
};

export type BasicStrategyChart = Map<ChartType, ChartMove[][]>;
export type UncommonChart = Map<ChartType, Map<number, number[]>>;

// TODO: Avoid any here.
export type SimpleObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

// See https://github.com/microsoft/TypeScript/pull/12253#issuecomment-353494273
export const keys = Object.keys as <T>(o: T) => (keyof T)[];

// See https://github.com/microsoft/TypeScript/pull/12253#issuecomment-479851685
export const entries = Object.entries as <T>(o: T) => [keyof T, T[keyof T]][];

export function enumValues<T>(object: T): T[keyof T][] {
  return Object.values(object).filter((value) => typeof value === 'number');
}

// export const values = <_, T>(enum: T) => { Object.values(enum).filter(value => typeof value === 'number') }

// export const values = Object.values as <T>(o: T) => T[keyof T][];

// TODO: Consolidate types so we can remove this converter function?
export function cardValueToRank(value: number): Rank {
  switch (value) {
    case 2:
      return Rank.Two;
    case 3:
      return Rank.Three;
    case 4:
      return Rank.Four;
    case 5:
      return Rank.Five;
    case 6:
      return Rank.Six;
    case 7:
      return Rank.Seven;
    case 8:
      return Rank.Eight;
    case 9:
      return Rank.Nine;
    case 10:
      // We could return `Rank.Jack`, `Rank.Queen` or `Rank.King` as well. We
      // arbitrarily choose `Rank.Ten`.
      return Rank.Ten;
    case 1:
    case 11:
      return Rank.Ace;
    default:
      throw new Error(`Unexpected value ${value}`);
  }
}

// TODO: Consolidate types so we can remove this converter function?
export function cardRankToValue(cardRank: Rank): number {
  switch (cardRank) {
    case Rank.Two:
      return 2;
    case Rank.Three:
      return 3;
    case Rank.Four:
      return 4;
    case Rank.Five:
      return 5;
    case Rank.Six:
      return 6;
    case Rank.Seven:
      return 7;
    case Rank.Eight:
      return 8;
    case Rank.Nine:
      return 9;
    case Rank.Ten:
    case Rank.King:
    case Rank.Queen:
    case Rank.Jack:
      return 10;
    case Rank.Ace:
      return 11;
  }
}

// TODO: Consolidate types so we can remove this converter function?
export function chartMoveToCorrectMove(chartMove: ChartMove): Move {
  switch (chartMove) {
    case ChartMove.AskInsurance:
      return Move.AskInsurance;
    case ChartMove.Double:
      return Move.Double;
    case ChartMove.Hit:
      return Move.Hit;
    case ChartMove.NoInsurance:
      return Move.NoInsurance;
    case ChartMove.Split:
      return Move.Split;
    case ChartMove.Stand:
      return Move.Stand;
    case ChartMove.Surrender:
      return Move.Surrender;
    default:
      throw new Error(`Unexpected chart move ${chartMove}`);
  }
}

// TODO: Consolidate types so we can remove this converter functions?
export function actionDataKeyToCorrectMove(
  actionDataKey: string
): Move | undefined {
  if (!actionDataKey) {
    return;
  }

  switch (actionDataKey) {
    case 'y':
      return Move.AskInsurance;
    case 'd':
      return Move.Double;
    case 'n':
      return Move.NoInsurance;
    case 'v':
      return Move.Split;
    case 's':
      return Move.Stand;
    case 'r':
      return Move.Surrender;
    case 'h':
      return Move.Hit;
  }
}

function convertCodeToChartMove(code: string): ChartMove {
  switch (code) {
    case 'Y':
      return ChartMove.AskInsurance;
    case 'D':
      return ChartMove.Double;
    case 'H':
      return ChartMove.Hit;
    case 'N':
      return ChartMove.NoInsurance;
    case 'P':
      return ChartMove.Split;
    case 'S':
      return ChartMove.Stand;
    case 'R':
      return ChartMove.Surrender;
    case 'Dh':
      return ChartMove.DoubleOrHit;
    case 'Ds':
      return ChartMove.DoubleOrStand;
    case 'Pd':
      return ChartMove.SplitOrDouble;
    case 'Ph':
      return ChartMove.SplitOrHit;
    case 'Ps':
      return ChartMove.SplitOrStand;
    case 'Rh':
      return ChartMove.SurrenderOrHit;
    case 'Rp':
      return ChartMove.SurrenderOrSplit;
    case 'Rs':
      return ChartMove.SurrenderOrStand;
    default:
      throw new Error(`Invalid code ${code}`);
  }
}

// TODO: Check if AssemblyScript supports string enums. If so, can remove this.
export function handWinnerToString(handWinner: HandWinner): string {
  switch (handWinner) {
    case HandWinner.Dealer:
      return 'dealer';
    case HandWinner.Player:
      return 'player';
    case HandWinner.Push:
      return 'push';
    default:
      throw new Error(`Unexpected hand winner ${handWinner}`);
  }
}

// TODO: Check if AssemblyScript supports string enums. If so, can remove this.
export function suitToString(suit: Suit): string {
  switch (suit) {
    case Suit.Hearts:
      return 'h';
    case Suit.Diamonds:
      return 'd';
    case Suit.Clubs:
      return 'c';
    case Suit.Spades:
      return 's';
    default:
      throw new Error(`Unexpected suit ${suit}`);
  }
}

// TODO: Check if AssemblyScript supports string enums. If so, can remove this.
export function rankToString(rank: Rank): string {
  switch (rank) {
    case Rank.Ace:
      return 'A';
    case Rank.Two:
      return '2';
    case Rank.Three:
      return '3';
    case Rank.Four:
      return '4';
    case Rank.Five:
      return '5';
    case Rank.Six:
      return '6';
    case Rank.Seven:
      return '7';
    case Rank.Eight:
      return '8';
    case Rank.Nine:
      return '9';
    case Rank.Ten:
      return 'T';
    case Rank.Jack:
      return 'J';
    case Rank.Queen:
      return 'Q';
    case Rank.King:
      return 'K';
    default:
      throw new Error(`Unexpected rank ${rank}`);
  }
}

// TODO: Check if AssemblyScript supports string enums. If so, can remove this.
export function playerStrategyToString(playerStrategy: PlayerStrategy): string {
  switch (playerStrategy) {
    case PlayerStrategy.BasicStrategy:
      return 'basic-strategy';
    case PlayerStrategy.BasicStrategyI18:
      return 'basic-strategy-i18';
    case PlayerStrategy.BasicStrategyI18Fab4:
      return 'basic-strategy-i18-fab4';
    case PlayerStrategy.Dealer:
      return 'dealer';
    case PlayerStrategy.UserInput:
      return 'user-input';
    default:
      throw new Error(`Unexpected player strategy ${playerStrategy}`);
  }
}

export function parsePlayerStrategy(
  playerStrategy: string | undefined
): PlayerStrategy | undefined {
  if (!playerStrategy) {
    return;
  }

  switch (playerStrategy) {
    case 'basic-strategy-i18-fab4':
      return PlayerStrategy.BasicStrategyI18Fab4;
    case 'basic-strategy-i18':
      return PlayerStrategy.BasicStrategyI18;
    case 'basic-strategy':
      return PlayerStrategy.BasicStrategy;
    case 'dealer':
      return PlayerStrategy.Dealer;
    case 'user-input':
      return PlayerStrategy.UserInput;
    default:
      throw new Error(`Unexpected player strategy ${playerStrategy}`);
  }
}

// TODO: Check if AssemblyScript supports string enums. If so, can remove this.
export function moveToString(move: Move): string {
  switch (move) {
    case Move.AskInsurance:
      return 'AskInsurance';
    case Move.Double:
      return 'Double';
    case Move.Hit:
      return 'Hit';
    case Move.NoInsurance:
      return 'NoInsurance';
    case Move.Split:
      return 'Split';
    case Move.Stand:
      return 'Stand';
    case Move.Surrender:
      return 'Surrender';
    default:
      throw new Error(`Unexpected move ${move}`);
  }
}

// TODO: Check if AssemblyScript supports string enums. If so, can remove this.
export function blackjackPayoutToString(
  blackjackPayout: BlackjackPayout
): string {
  switch (blackjackPayout) {
    case BlackjackPayout.ThreeToTwo:
      return '3:2';
    case BlackjackPayout.SixToFive:
      return '6:5';
    default:
      throw new Error(`Unexpected blackjack payout ${blackjackPayout}`);
  }
}

export function parseBlackjackPayout(
  blackjackPayout: string | undefined
): BlackjackPayout | undefined {
  if (!blackjackPayout) {
    return;
  }

  switch (blackjackPayout) {
    case '3:2':
      return BlackjackPayout.ThreeToTwo;
    case '6:5':
      return BlackjackPayout.SixToFive;
    default:
      throw new Error(`Unexpected blackjack payout ${blackjackPayout}`);
  }
}

// TODO: Check if AssemblyScript supports string enums. If so, can remove this.
export function gameModeToString(mode: GameMode): string {
  switch (mode) {
    case GameMode.Default:
      return 'default';
    case GameMode.Pairs:
      return 'pairs';
    case GameMode.Uncommon:
      return 'uncommon';
    case GameMode.Illustrious18:
      return 'illustrious18';
    default:
      throw new Error(`Unexpected game mode ${mode}`);
  }
}

export function parseGameMode(mode: string | undefined): GameMode | undefined {
  if (!mode) {
    return;
  }

  switch (mode) {
    case 'defalt':
      return GameMode.Default;
    case 'pairs':
      return GameMode.Pairs;
    case 'uncommon':
      return GameMode.Uncommon;
    case 'illustrious18':
      return GameMode.Illustrious18;
    default:
      throw new Error(`Unexpected game mode ${mode}`);
  }
}

function convertSubChartToChartMove(
  subchart: string[][] | undefined
): ChartMove[][] {
  if (!subchart) {
    throw new Error('Subchart not found');
  }

  return subchart.map((row) => row.map(convertCodeToChartMove));
}

export function convertToChartMove(
  chart: Map<ChartType, string[][]>
): BasicStrategyChart {
  return new Map([
    [ChartType.Hard, convertSubChartToChartMove(chart.get(ChartType.Hard))],
    [ChartType.Soft, convertSubChartToChartMove(chart.get(ChartType.Soft))],
    [ChartType.Splits, convertSubChartToChartMove(chart.get(ChartType.Splits))],
  ]);
}

export type TableRules = {
  allowDoubleAfterSplit: boolean;
  allowLateSurrender: boolean;
  allowResplitAces: boolean;
  blackjackPayout: BlackjackPayout;
  deckCount: number;
  hitSoft17: boolean;
  maxHandsAllowed: number;
  maximumBet: number;
  minimumBet: number;
  playerCount: number;
  penetration: number;
};
