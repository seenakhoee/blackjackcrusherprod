import Game, { settings as gameSettings } from './game';
import Utils from './utils';
import {
  TableRules,
  HandWinner,
  PlayerStrategy,
  BlackjackPayout,
  blackjackPayoutToString,
  playerStrategyToString,
  CountingSystem,
} from './types';

export type SimulatorSettings = {
  debug: boolean;
  raw: boolean;
  playerStrategy: PlayerStrategy;
  playerBetSpread: number[];
  playerSpots: number[];
  playerTablePosition: number;
  playerBankroll: number;
  playerWongOutTrueCount: number;
  hands: number;
  riskOfRuin: number;
  roundsPerHour: number;
  checkDeviations: boolean;
  checkWongsDeviations: boolean;
  countingSystem: CountingSystem;
} & TableRules;

export type SimulatorResult = {
  amountEarned: number;
  amountWagered: number;
  bankrollMean: number;
  bankrollVariance: number;
  handsLost: number;
  handsPlayed: number;
  handsPushed: number;
  handsWon: number;
  hoursPlayed: number;
  riskOfRuin: number;
  timeElapsed: number;
};

export type AugmentedSimulatorResult = SimulatorResult & {
  bankrollRqd: number;
  expectedValue: number;
  houseEdge: number;
  stdDeviation: number;
};

export type FormattedResult = {
  [key: string]: string;
};

export interface FormattedSimulatorIntro extends FormattedResult {
  betSpread: string;
  penetration: string;
  spotsPlayed: string;
  tableRules: string;
  strategy: string;
  wongOut: string;
}

export interface FormattedSimulatorResult extends FormattedResult {
  amountEarned: string;
  amountWagered: string;
  bankrollRqd: string;
  riskOfRuin: string;
  expectedValue: string;
  handsLost: string;
  handsPlayed: string;
  handsPushed: string;
  handsWon: string;
  houseEdge: string;
  stdDeviation: string;
  timeElapsed: string;
}

function getChipUnit(minimumBet: number): number {
  const chipSizes = [5000, 1000, 500, 100, 25, 5, 1].map(
    (chipSize) => chipSize * 100
  );

  for (const chipSize of chipSizes) {
    if (minimumBet % chipSize === 0) {
      return chipSize;
    }
  }

  return chipSizes.find((chipSize) => chipSize < minimumBet) ?? 100;
}

function roundToIncrement(increment: number, value: number) {
  return value;
  // return Math.round(value / increment) * increment;
}

// Use a lower bet size per spot to keep RoR consistent. Values are taken from
// Blackjack Attack (table 2.4).
function spotCountBetMultiplier(spotCount: number): number {
  switch (spotCount) {
    case 1:
      return 1;
    case 2:
      return 0.73;
    default:
    case 3:
      return 0.57;
  }
}

function defaultSettings({
  minimumBet = 10 * 100,
  playerSpots,
}: Partial<
  Pick<SimulatorSettings, 'minimumBet' | 'playerSpots'>
> = {}): SimulatorSettings {
  const maxTrueCount = 4;
  const maxBetMultiplier = 30;
  const unit = minimumBet;
  const spreadStep = (unit * (maxBetMultiplier - 1)) / (maxTrueCount - 1);
  const chipUnit = getChipUnit(minimumBet);
  const playerSpotsSetting =
    playerSpots ?? Array.from({ length: maxTrueCount + 1 }, () => 1);
  return {
    // Simulator-only settings.
    // hands: 10 ** 7,
    countingSystem: CountingSystem.HiLo,
    checkDeviations: false,
    checkWongsDeviations: false,
    hands: 1000,

    playerStrategy: PlayerStrategy.BasicStrategyI18Fab4,

    // TODO: Allow computing optimal bet spreads (use kelly if a bankroll is
    // specified: edge * bankroll / 1.15^2).
    //
    // TODO: Look into computing the edge and 1.15 sd value precisely instead of
    // hard-coding constants. How can we compute player edge and variance
    // irrespective of bet spread?
    //
    // Simple linear bet spread example: for a $10 minimum where 1 unit is the
    // table minimum, spread 1-12 or $10-$120:
    //
    // TC 0: $10 * 2^0 = $10
    // TC 1: $10 * 2^1 = $10
    // TC 2: $10 * 2^2 = $40
    // TC 3: $10 * 2^3 = $65
    // TC 4: $10 * 2^3 = $95
    // TC 5: $10 * 2^3 = $120
    playerBetSpread: Array.from(
      { length: maxTrueCount + 1 },
      (item, hiLoTrueCount) =>
        roundToIncrement(
          chipUnit,
          unit +
          spreadStep *
          Math.max(0, hiLoTrueCount - 1) *
          spotCountBetMultiplier(playerSpotsSetting[hiLoTrueCount])
        )
    ),

    // playerBetSpread: [25, 50, 100, 300, 300],
    playerSpots: playerSpotsSetting,

    debug: false,
    playerTablePosition: 1,
    // We make the bankroll sufficiently large here to prevent ever going
    // bankrupt for the purpose of simulation.
    // TODO: Add support for infinite bankroll in the game module.
    playerBankroll: minimumBet * 10 ** 7,
    playerWongOutTrueCount: -Infinity,

    // Table rules
    allowDoubleAfterSplit: true,
    allowLateSurrender: false,
    allowResplitAces: false,
    blackjackPayout: BlackjackPayout.ThreeToTwo,
    deckCount: 2,
    hitSoft17: true,
    maxHandsAllowed: 4,
    maximumBet: minimumBet * 100,
    minimumBet,
    playerCount: 1,
    penetration: 0.75,
    raw: false,
    riskOfRuin: 0.05,
    roundsPerHour: 100,
  };
}

export const SETTINGS_DEFAULTS = defaultSettings();

// Calculates bankroll required given a risk of ruin. Based on equation 9 in
// Sileo's paper: http://www12.plala.or.jp/doubledown/poker/sileo.pdf
export function bankrollRequired(
  riskOfRuin: number,
  variancePerHand: number,
  expectationPerHand: number
): number {
  return variancePerHand === 0
    ? 0
    : -(variancePerHand / (2 * expectationPerHand)) * Math.log(riskOfRuin);

}

function formatTableRules(tableRules: TableRules) {
  return [
    `${Utils.formatCents(tableRules.minimumBet, {
      stripZeroCents: true,
    })}–${Utils.formatCents(tableRules.maximumBet, { stripZeroCents: true })}`,
    `${tableRules.deckCount}D`,
    blackjackPayoutToString(tableRules.blackjackPayout),
    tableRules.hitSoft17 ? 'H17' : 'S17',
    tableRules.allowDoubleAfterSplit ? 'DAS' : 'NDAS',
    tableRules.allowLateSurrender ? 'LS' : 'NLS',
    tableRules.allowResplitAces ? 'RSA' : 'NRSA',
  ]
    .filter(Boolean)
    .join(' ');
}

function formatPlayerStrategy(playerStrategy: PlayerStrategy) {
  switch (playerStrategy) {
    case PlayerStrategy.BasicStrategyI18Fab4:
      return 'Basic Strategy + Illustrious 18 + Fab 4';
    case PlayerStrategy.BasicStrategyI18:
      return 'Basic Strategy + Illustrious 18';
    case PlayerStrategy.BasicStrategy:
      return 'Basic Strategy';
    default:
      throw new Error(`Unexpected player strategy ${playerStrategy}`);
  }
}

function formatWongOutTrueCount(wongOutTrueCount: number) {
  return wongOutTrueCount === -Infinity ? '' : `TC ${wongOutTrueCount}`;
}

// Hands per hour estimation based on:
// https://wizardofodds.com/ask-the-wizard/136/
// TODO: Add consideration for pitch games.
// TODO: Add consideration for `spotCount`.
function estimateHandsPerHour(playerCount: number): number {
  switch (playerCount) {
    case 1:
      return 100;
    case 2:
      return 139;
    case 3:
      return 105;
    case 4:
      return 84;
    case 5:
      return 70;
    case 6:
      return 60;
    case 7:
      return 52;
    default:
      throw new Error(`Unexpected player count ${playerCount}`);
  }
}

export function mergeResults(results: SimulatorResult[]): SimulatorResult {
  // Calculates the variance of several datasets (population variance).
  // See https://stats.stackexchange.com/a/389925
  const totalHandsPlayed = Utils.arraySum(results.map((r) => r.handsPlayed));
  const average =
    Utils.arraySum(results.map((r) => r.handsPlayed * r.bankrollMean)) /
    totalHandsPlayed;
  const betweenGroupVariance = Utils.arraySum(
    results.map((r) => r.handsPlayed * (r.bankrollMean - average) ** 2)
  );
  const withinGroupVariance = Utils.arraySum(
    results.map((r) => r.handsPlayed * r.bankrollVariance)
  );
  const bankrollVariance =
    (betweenGroupVariance + withinGroupVariance) / totalHandsPlayed;

  return results.reduce(
    (previousValue, currentValue) => ({
      ...previousValue,

      amountEarned: previousValue.amountEarned + currentValue.amountEarned,
      amountWagered: previousValue.amountWagered + currentValue.amountWagered,
      hoursPlayed: previousValue.hoursPlayed + currentValue.hoursPlayed,
      handsLost: previousValue.handsLost + currentValue.handsLost,
      handsPlayed: previousValue.handsPlayed + currentValue.handsPlayed,
      handsPushed: previousValue.handsPushed + currentValue.handsPushed,
      handsWon: previousValue.handsWon + currentValue.handsWon,
      timeElapsed: Math.max(
        previousValue.timeElapsed,
        currentValue.timeElapsed
      ),
    }),
    {
      bankrollMean: average,
      bankrollVariance,

      // Pass along relevant settings.
      riskOfRuin: results[0].riskOfRuin,

      amountEarned: 0,
      amountWagered: 0,
      hoursPlayed: 0,
      handsLost: 0,
      handsPlayed: 0,
      handsPushed: 0,
      handsWon: 0,
      timeElapsed: 0,
    }
  );
}

export default class Simulator {
  settings: SimulatorSettings;
  game: Game;
  intro: FormattedSimulatorIntro;

  constructor(settings: Partial<SimulatorSettings>) {

    // will need to change this

    switch (settings.playerStrategy) {
      case 1:
        settings.checkDeviations = false;
        settings.checkWongsDeviations = false;
        break;
      case 2:
        settings.checkDeviations = true;
        settings.checkWongsDeviations = false;
        break;
      case 3:
        settings.checkDeviations = true;
        settings.checkWongsDeviations = true;
        break;
    }

    this.settings = Utils.merge(
      defaultSettings({
        minimumBet: settings.minimumBet,
        playerSpots: settings.playerSpots,
      }),
      settings
    );

    this.game = new Game({
      ...this.settings,

      debug: this.settings.debug,
      disableEvents: true,
      playerStrategyOverride: {
        [this.settings.playerTablePosition]: this.settings.playerStrategy,
      },
    });

    // this.intro = {
    //   tableRules: formatTableRules({
    //     allowDoubleAfterSplit: gameSettings.allowDoubleAfterSplit,
    //     allowLateSurrender: gameSettings.allowLateSurrender,
    //     allowResplitAces: gameSettings.allowResplitAces,
    //     blackjackPayout: gameSettings.blackjackPayout,
    //     deckCount: gameSettings.deckCount,
    //     hitSoft17: gameSettings.hitSoft17,
    //     maxHandsAllowed: gameSettings.maxHandsAllowed,
    //     maximumBet: gameSettings.maximumBet,
    //     minimumBet: gameSettings.minimumBet,
    //     penetration: gameSettings.penetration,
    //     playerCount: gameSettings.playerCount,
    //   }),
    //   penetration: settings.raw
    //     ? gameSettings.penetration.toString()
    //     : Utils.formatPercent(gameSettings.penetration),
    //   betSpread: settings.raw
    //     ? this.settings.playerBetSpread.join()
    //     : Utils.arrayToRangeString(this.settings.playerBetSpread, (amount) =>
    //       Utils.formatCents(amount, { stripZeroCents: true })
    //     ),
    //   spotsPlayed: settings.raw
    //     ? this.settings.playerSpots.join()
    //     : Utils.arrayToRangeString(this.settings.playerSpots),
    //   strategy: settings.raw
    //     ? playerStrategyToString(this.settings.playerStrategy)
    //     : formatPlayerStrategy(this.settings.playerStrategy),
    //   wongOut: settings.raw
    //     ? this.settings.playerWongOutTrueCount.toString()
    //     : formatWongOutTrueCount(this.settings.playerWongOutTrueCount),
    // };
  }

  // [
  //   tc -3,
  //   tc -2,
  //   tc -1,
  //   tc 0,
  //   tc 1,
  //   tc 2,
  //   tc 3,
  //   tc 4,
  //   tc 5
  // ]

  clampToArray(index: number, array: number[]): number {
    // reason for the -3 because I'm starting bet spread configuration at -3

    return array[Utils.clamp(Math.floor(index), -3, (array.length - 1 - 3)) + 3];
  }

  betAmount(hiLoTrueCount: number): number {
    return hiLoTrueCount <= this.settings.playerWongOutTrueCount
      ? 0
      : this.clampToArray(hiLoTrueCount, this.settings.playerBetSpread);
  }

  spotCount(hiLoTrueCount: number): number {
    return hiLoTrueCount <= this.settings.playerWongOutTrueCount
      ? 0
      : this.clampToArray(hiLoTrueCount, this.settings.playerSpots);
  }

  run(): SimulatorResult {
    const startTime = Date.now();

    const bankrollStart = this.game.player.balance;

    let bankrollMean = 0;
    let bankrollVariance = 0;
    let bankrollValues = 1;

    let handsWon = 0;
    let handsLost = 0;
    let handsPushed = 0;
    let handsPlayed = 0;
    let amountWagered = 0;
    const betHistory = []

    // TODO: Fix `handsPlayed` going slightly over the limit if the next
    // iteration involves playing more than one hand.
    while (handsPlayed < this.settings.hands) {
      const betAmount = this.betAmount(this.game.shoe.getTrueCountConversion());
      const spotCount = this.spotCount(this.game.shoe.getTrueCountConversion());
      const prevBalance = this.game.player.balance;

      betHistory.push([betAmount, this.game.shoe.getTrueCountConversion()])

      this.game.run(betAmount, spotCount);

      // We calculate mean and variance from a stream of values since a large
      // dataset (100M+ hands) will not fit in memory.
      // See https://math.stackexchange.com/a/116344
      // TODO: Update this value per `handWinner`. Currently one change can
      // correspond to multiple hands due to splits.
      const bankrollChangeValue = this.game.player.balance - prevBalance;
      const prevBankrollMean = bankrollMean;
      bankrollValues += 1;
      bankrollMean =
        bankrollMean + (bankrollChangeValue - bankrollMean) / bankrollValues;

      bankrollVariance =
        bankrollVariance +
        (bankrollChangeValue - prevBankrollMean) *
        (bankrollChangeValue - bankrollMean);

      for (const result of this.game.player.handWinner.values()) {
        handsPlayed += 1;
        // TODO: Fix this. betAmount is wrong since splits and doubles can
        // happen. This should come from `hand.betAmount`. Consider refactoring
        // `handWinner` to hold more data like `hand.betAmount`.
        amountWagered += betAmount;

        switch (result) {
          case HandWinner.Player:
            handsWon += 1;
            break;
          case HandWinner.Dealer:
            handsLost += 1;
            break;
          case HandWinner.Push:
            handsPushed += 1;
            break;
        }
      }
    }

    bankrollVariance /= bankrollValues - 1;

    const totalBlackjacksReceived = this.game.state.totalBlackjacksReceived;

    const blackjackCounter = this.game.state.blackjackCounter;

    const amountEarned = this.game.player.balance - bankrollStart;
    // const handsPerHour = estimateHandsPerHour(this.settings.playerCount);
    const handsPerHour = this.settings.roundsPerHour;
    const hoursPlayed = handsPlayed / handsPerHour;

    const totalExpandedDeviations = this.game.state.totalExpandedDeviations;
    const totalIll18Deviations = this.game.state.totalIll18Deviations;

    // TODO: Make RoR configurable.
    const riskOfRuin = this.settings.riskOfRuin / 100;

    let results = {
      totalExpandedDeviations,
      totalIll18Deviations,
      totalBlackjacksReceived,
      blackjackCounter,
      amountEarned,
      amountWagered,
      bankrollMean,
      bankrollVariance,
      stdDeviation: Math.sqrt(bankrollVariance),
      houseEdge: amountEarned / amountWagered,
      bankrollRqd: bankrollRequired(
        riskOfRuin,
        bankrollVariance,
        amountEarned / handsPlayed
      ),
      handsLost,
      handsPlayed,
      handsPushed,
      handsWon,
      hoursPlayed,
      riskOfRuin,
      timeElapsed: Date.now() - startTime,
    };

    return results;
  }
}
