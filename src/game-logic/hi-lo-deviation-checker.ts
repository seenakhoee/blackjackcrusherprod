import Utils from './utils';
import Game, { settings as gameSettings } from './game';
import Hand from './hand';
import { Move, CheckResult, GameStep, GameMode } from './types';

type playerTotal = number;
type dealerCard = number;
type comparator = string;
type index = number;

type Deviation = {
  correctMove: Move;
  index: [comparator, index];
};

type Deviations = Map<playerTotal, Map<dealerCard, Deviation>>;

// TODO: Consider different deviations for deck counts and s17?
// prettier-ignore
export const illustrious18Deviations: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [0, new Map([
    [11, { correctMove: Move.AskInsurance, index: ['>=', 3] }],
  ]),
  ],
  [9, new Map([
    [2, { correctMove: Move.Double, index: ['>=', 1] }],
    [7, { correctMove: Move.Double, index: ['>=', 3] }],
  ]),
  ],
  [10, new Map([
    [10, { correctMove: Move.Double, index: ['>=', 4] }],
    [11, { correctMove: Move.Double, index: ['>=', 3] }],
  ]),
  ],
  [11, new Map([
    [11, { correctMove: Move.Hit, index: ['<=', -1] }],
  ])
  ],
  [12, new Map([
    [2, { correctMove: Move.Stand, index: ['>=', 3] }],
    [3, { correctMove: Move.Stand, index: ['>=', 2] }],
    [4, { correctMove: Move.Hit, index: ['<', 0] }],
    [5, { correctMove: Move.Hit, index: ['<=', -2] }],
    [6, { correctMove: Move.Hit, index: ['<=', -3] }],
  ]),
  ],
  [13, new Map([
    [2, { correctMove: Move.Hit, index: ['<=', -1] }],
    [3, { correctMove: Move.Hit, index: ['<=', -2] }],
  ]),
  ],
  [15, new Map([
    [10, { correctMove: Move.Stand, index: ['>=', 4] }]
  ])
  ],
  [16, new Map([
    [9, { correctMove: Move.Stand, index: ['>=', 4] }],
    [10, { correctMove: Move.Stand, index: ['>', 0] }],
  ]),
  ],
  [20, new Map([
    [5, { correctMove: Move.Split, index: ['>=', 5] }],
    [6, { correctMove: Move.Split, index: ['>=', 4] }],
  ]),
  ],
]);

// prettier-ignore
export const fab4Deviations: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [14, new Map([
    [10, { correctMove: Move.Surrender, index: ['>=', 4] }],
  ]),
  ],
  [15, new Map([
    [9, { correctMove: Move.Surrender, index: ['>=', 2] }],
    [10, { correctMove: Move.Hit, index: ['<=', 0] }],
    [11, { correctMove: Move.Hit, index: ['<=', 0] }],
  ])],
]);

export default class HiLoDeviationChecker {
  static _getDeviation(
    deviations: Deviations,
    playerTotal: playerTotal,
    dealersCard: dealerCard
  ): Deviation | undefined {
    return deviations.get(playerTotal)?.get(dealersCard);
  }

  static _suggest(
    game: Game,
    hand: Hand,
    { suggestFab4 = true }: { suggestFab4: boolean }
  ): Deviation | undefined {
    const trueCount = game.shoe.getTrueCountConversion();
    if (!game.dealer.upcard || hand.isSoft) {
      return;
    }

    const playerTotal =
      game.state.step === GameStep.WaitingForInsuranceInput
        ? 0
        : hand.cardTotal;
    const dealersCard = game.dealer.upcard.value;

    const deviation =
      hand.allowSurrender && suggestFab4
        ? this._getDeviation(fab4Deviations, playerTotal, dealersCard) ??
        this._getDeviation(illustrious18Deviations, playerTotal, dealersCard)
        : this._getDeviation(illustrious18Deviations, playerTotal, dealersCard);

    if (
      !deviation ||
      (deviation.correctMove === Move.Double && !hand.firstMove) ||
      (deviation.correctMove === Move.Split && !hand.allowSplit) ||
      (deviation.correctMove === Move.Surrender && !hand.allowSurrender) ||
      !Utils.compareRange(trueCount, deviation.index)
    ) {
      return;
    }

    return deviation;
  }

  static suggest(
    game: Game,
    hand: Hand,
    { suggestFab4 = true }: { suggestFab4: boolean }
  ): Move | undefined {
    return this._suggest(game, hand, { suggestFab4 })?.correctMove;
  }

  // Returns true if an Illustrious 18 deviation was followed correctly.
  // Returns false if a deviation was not present.
  // Returns an object with a `correctMove` code and a `hint` otherwise.
  static check(game: Game, hand: Hand, input: Move): CheckResult | boolean {
    if (
      !gameSettings.checkDeviations &&
      gameSettings.mode !== GameMode.Illustrious18
    ) {
      return false;
    }

    const deviation = this._suggest(game, hand, { suggestFab4: true });

    if (!deviation) {
      return false;
    }

    game.state.totalIll18Deviations = ++game.state.totalIll18Deviations

    let hint;
    const { correctMove, index } = deviation;

    if (
      correctMove === (Move.AskInsurance as Move) &&
      input !== Move.AskInsurance
    ) {
      hint = 'buy insurance';
    }

    if (correctMove === Move.Hit && input !== Move.Hit) {
      hint = 'hit';
    }

    if (correctMove === Move.Stand && input !== Move.Stand) {
      hint = 'stand';
    }

    if (correctMove === Move.Double && input !== Move.Double) {
      hint = 'double';
    }

    if (correctMove === Move.Split && input !== Move.Split) {
      hint = 'split';
    }

    if (correctMove === Move.Surrender && input !== Move.Surrender) {
      hint = 'surrender';

      const hintMessage = `Fab 4 deviation: The correct play should have been to ${hint} at a true count ${index[0]} ${index[1]}`;

      return {
        code: correctMove,
        hint: hintMessage,
      };
    }

    if (!hint) {
      return true;
    }

    const hintMessage = `Illustrious 18 deviation: The correct play should have been to ${hint} at a true count ${index[0]} ${index[1]}`;

    return {
      code: correctMove,
      hint: hintMessage,
    };
  }
}
