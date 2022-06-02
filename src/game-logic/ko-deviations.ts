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
export const Ko: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [0, new Map([
    [11, { correctMove: Move.AskInsurance, index: ['>=', 3] }],
  ]),
  ],
  [8, new Map([
    [5, { correctMove: Move.Double, index: ['>=', 4] }],
    [6, { correctMove: Move.Double, index: ['>=', 4] }],
  ]),
  ],
  [9, new Map([
    [2, { correctMove: Move.Double, index: ['>=', 4] }],
    [7, { correctMove: Move.Double, index: ['>=', 4] }],
  ]),
  ],
  [10, new Map([
    [10, { correctMove: Move.Double, index: ['>=', 4] }],
  ]),
  ],
  [11, new Map([
    [11, { correctMove: Move.Double, index: ['>=', 4] }],
  ])
  ],
  [12, new Map([
    [4, { correctMove: Move.Hit, index: ['<=', -4] }],
    [5, { correctMove: Move.Hit, index: ['<=', -4] }],
    [6, { correctMove: Move.Hit, index: ['<=', -4] }],
  ]),
  ],
  [13, new Map([
    [2, { correctMove: Move.Hit, index: ['<=', -4] }],
    [3, { correctMove: Move.Hit, index: ['<=', -4] }],
  ]),
  ],
  [15, new Map([
    [9, { correctMove: Move.Stand, index: ['>=', 4] }],
  ])
  ],
  [16, new Map([
    [10, { correctMove: Move.Stand, index: ['>=', 1] }]
  ])
  ],
]);

export const KoSplitDeviations: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [0, new Map([
    [11, { correctMove: Move.AskInsurance, index: ['>=', 3] }],
  ]),
  ]
]);

export const KoSoftDeviations: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [0, new Map([
    [11, { correctMove: Move.AskInsurance, index: ['>=', 3] }],
  ]),
  ]
]);

// prettier-ignore
export const expandedSurrender: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [0, new Map([
    [11, { correctMove: Move.AskInsurance, index: ['>=', 3] }],
  ]),
  ],
  [14, new Map([
    [9, { correctMove: Move.Surrender, index: ['>=', 6] }],
    [11, { correctMove: Move.Surrender, index: ['>=', 4] }],
  ]),
  ],
  [15, new Map([
    [8, { correctMove: Move.Surrender, index: ['>=', 7] }],
  ])],
  [16, new Map([
    [8, { correctMove: Move.Surrender, index: ['>=', 4] }],
    [9, { correctMove: Move.Hit, index: ['<=', -1] }],
  ])],
]);

function getDeviation(game, hand, trueCount, checker, deviations) {
  const playerTotal =
    game.state.step === GameStep.WaitingForInsuranceInput
      ? 0
      : hand.cardTotal;
  const dealersCard = game.dealer.upcard.value;

  const deviation = checker._getDeviation(deviations, playerTotal, dealersCard);

  if (
    !deviation ||
    (deviation.correctMove === Move.Double && !hand.firstMove) ||
    (deviation.correctMove === Move.Split && !hand.allowSplit) ||
    !Utils.compareRange(trueCount, deviation.index)
  ) {
    return;
  }

  return deviation;
}

export default class KoFullDeviationChecker {
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
    { suggestedSurrenderDeviation = true }: { suggestedSurrenderDeviation: boolean }
  ): Deviation | undefined {
    const trueCount = game.shoe.getTrueCountConversion();

    if (!game.dealer.upcard) {
      return;
    }

    //1. Check if you can split
    if (hand.allowSplit) {
      return getDeviation(game, hand, trueCount, KoFullDeviationChecker, KoSplitDeviations)
    }

    //2. Check if the hand is soft first then end
    if (hand.isSoft) {
      return getDeviation(game, hand, trueCount, KoFullDeviationChecker, KoSoftDeviations)
    }

    //3. Check if you double, hit, stand, surrender
    const playerTotal =
      game.state.step === GameStep.WaitingForInsuranceInput
        ? 0
        : hand.cardTotal;
    const dealersCard = game.dealer.upcard.value;

    // const deviation =
    //   hand.allowSurrender && suggestedSurrenderDeviation
    //     ? this._getDeviation(expandedSurrender, playerTotal, dealersCard) ??
    //     this._getDeviation(Ko, playerTotal, dealersCard)
    //     : this._getDeviation(Ko, playerTotal, dealersCard);


    //surrender deviation not included to KO yet
    const deviation =
      this._getDeviation(Ko, playerTotal, dealersCard)
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
    { suggestedSurrenderDeviation = true }: { suggestedSurrenderDeviation: boolean }
  ): Move | undefined {
    return this._suggest(game, hand, { suggestedSurrenderDeviation })?.correctMove;
  }

  // Returns true if an Illustrious 18 deviation was followed correctly.
  // Returns false if a deviation was not present.
  // Returns an object with a `correctMove` code and a `hint` otherwise.
  static check(game: Game, hand: Hand, input: Move): CheckResult | boolean {
    if (!gameSettings.koDeviations) {
      return false;
    }
    const deviation = this._suggest(game, hand, { suggestedSurrenderDeviation: true });

    if (!deviation) {
      return false;
    }

    game.state.totalExpandedDeviations = ++game.state.totalExpandedDeviations

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
    }

    if (!hint) {
      return true;
    }

    const hintMessage = `Ko deviation: The correct play should have been to ${hint} at a true count ${index[0]} ${index[1]}`;

    return {
      code: correctMove,
      hint: hintMessage,
    };
  }
}
