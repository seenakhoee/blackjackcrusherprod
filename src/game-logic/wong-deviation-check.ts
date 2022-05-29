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
export const wongsFull: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [0, new Map([
    [11, { correctMove: Move.AskInsurance, index: ['>=', 3] }],
  ]),
  ],
  [7, new Map([
    [5, { correctMove: Move.Double, index: ['>=', 10] }],
    [6, { correctMove: Move.Double, index: ['>=', 9] }],
  ]),
  ],
  [8, new Map([
    [2, { correctMove: Move.Double, index: ['>=', 15] }],
    [3, { correctMove: Move.Double, index: ['>=', 9] }],
    [4, { correctMove: Move.Double, index: ['>=', 6] }],
    [5, { correctMove: Move.Double, index: ['>=', 4] }],
    [6, { correctMove: Move.Double, index: ['>=', 2] }],
  ]),
  ],
  [9, new Map([
    [3, { correctMove: Move.Hit, index: ['<', 0] }],
    [4, { correctMove: Move.Hit, index: ['<=', -2] }],
    [5, { correctMove: Move.Hit, index: ['<=', -4] }],
    [6, { correctMove: Move.Hit, index: ['<=', -6] }],
    [8, { correctMove: Move.Double, index: ['>=', 7] }],
  ]),
  ],
  [10, new Map([
    [7, { correctMove: Move.Hit, index: ['<=', -6] }],
    [8, { correctMove: Move.Hit, index: ['<=', -4] }],
    [9, { correctMove: Move.Hit, index: ['<=', -1] }],
  ]),
  ],
  [11, new Map([
    [8, { correctMove: Move.Hit, index: ['<=', -6] }],
    [9, { correctMove: Move.Hit, index: ['<=', -4] }],
    [10, { correctMove: Move.Hit, index: ['<=', -4] }],
  ])
  ],
  [13, new Map([
    [4, { correctMove: Move.Hit, index: ['<=', -3] }],
    [5, { correctMove: Move.Hit, index: ['<=', -4] }],
    [6, { correctMove: Move.Hit, index: ['<=', -7] }],
  ]),
  ],
  [14, new Map([
    [2, { correctMove: Move.Hit, index: ['<=', -3] }],
    [3, { correctMove: Move.Hit, index: ['<=', -5] }],
    [4, { correctMove: Move.Hit, index: ['<=', -6] }],
    [5, { correctMove: Move.Hit, index: ['<=', -7] }],
    [11, { correctMove: Move.Stand, index: ['>=', 10] }],
  ]),
  ],
  [15, new Map([
    [2, { correctMove: Move.Hit, index: ['<=', -5] }],
    [3, { correctMove: Move.Hit, index: ['<=', -7] }],
    [7, { correctMove: Move.Stand, index: ['>=', 11] }],
    [8, { correctMove: Move.Stand, index: ['>=', 10] }],
    [9, { correctMove: Move.Stand, index: ['>=', 8] }],
    [11, { correctMove: Move.Stand, index: ['>=', 5] }]
  ])
  ],
  [16, new Map([
    [7, { correctMove: Move.Stand, index: ['>=', 8] }],
    [8, { correctMove: Move.Stand, index: ['>=', 7] }],
    [11, { correctMove: Move.Stand, index: ['>=', 3] }]
  ])
  ],
  [17, new Map([
    [11, { correctMove: Move.Hit, index: ['<=', -6] }],
  ]),
  ],
]);

export const wongsFullSplitDeviations: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [0, new Map([
    [11, { correctMove: Move.AskInsurance, index: ['>=', 3] }],
  ]),
  ],
  [4, new Map([
    [2, { correctMove: Move.Hit, index: ['<=', -2] }],
    [8, { correctMove: Move.Split, index: ['>=', 5] }],
  ]),
  ],
  [6, new Map([
    [2, { correctMove: Move.Hit, index: ['<=', 0] }],
    [3, { correctMove: Move.Hit, index: ['<=', -3] }],
    [8, { correctMove: Move.Split, index: ['>=', 5] }],

  ]),
  ],
  [8, new Map([
    [3, { correctMove: Move.Split, index: ['>=', 7] }],
    [4, { correctMove: Move.Split, index: ['>=', 3] }],
    [5, { correctMove: Move.Hit, index: ['<=', -1] }],
    [6, { correctMove: Move.Hit, index: ['<=', -5] }],
  ]),
  ],
  [12, new Map([
    [2, { correctMove: Move.Hit, index: ['<=', -2] }],
    [3, { correctMove: Move.Hit, index: ['<=', -4] }],
    [4, { correctMove: Move.Hit, index: ['<=', -6] }],
  ]),
  ],
  [14, new Map([
    [8, { correctMove: Move.Split, index: ['>=', 4] }],
  ]),
  ],
  [16, new Map([
    [10, { correctMove: Move.Stand, index: ['>=', 8] }],
    [11, { correctMove: Move.Hit, index: ['<=', -1] }],
  ]),
  ],
  [18, new Map([
    [2, { correctMove: Move.Stand, index: ['<=', -2] }],
    [3, { correctMove: Move.Stand, index: ['<=', -4] }],
    [4, { correctMove: Move.Stand, index: ['<=', -5] }],
    [5, { correctMove: Move.Stand, index: ['<=', -6] }],
    [7, { correctMove: Move.Split, index: ['>=', 3] }],
    [11, { correctMove: Move.Split, index: ['>=', 2] }],
  ]),
  ],
  [20, new Map([
    [4, { correctMove: Move.Split, index: ['>=', 6] }],
    [3, { correctMove: Move.Split, index: ['>=', 8] }],
    [2, { correctMove: Move.Split, index: ['>=', 10] }],
  ]),
  ],
]);

export const wongsFullSoftDeviations: Deviations = new Map<playerTotal, Map<dealerCard, Deviation>>([
  [0, new Map([
    [11, { correctMove: Move.AskInsurance, index: ['>=', 3] }],
  ]),
  ],
  [12, new Map([
    [11, { correctMove: Move.Hit, index: ['<=', -4] }],
  ]),
  ],
  [13, new Map([
    [2, { correctMove: Move.Double, index: ['>=', 12] }],
    [3, { correctMove: Move.Double, index: ['>=', 7] }],
    [4, { correctMove: Move.Double, index: ['>=', 3] }],
    [5, { correctMove: Move.Hit, index: ['<', 0] }],
    [6, { correctMove: Move.Hit, index: ['<=', -2] }],
  ]),
  ],
  [14, new Map([
    [3, { correctMove: Move.Double, index: ['>=', 7] }],
    [4, { correctMove: Move.Double, index: ['>=', 2] }],
    [5, { correctMove: Move.Hit, index: ['<=', -1] }],
    [6, { correctMove: Move.Hit, index: ['<=', -5] }],
  ]),
  ],
  [15, new Map([
    [3, { correctMove: Move.Double, index: ['>=', 7] }],
    [4, { correctMove: Move.Hit, index: ['<', 0] }],
    [5, { correctMove: Move.Hit, index: ['<=', -4] }],
  ]),
  ],
  [16, new Map([
    [3, { correctMove: Move.Double, index: ['>=', 4] }],
    [4, { correctMove: Move.Hit, index: ['<=', -3] }],
    [5, { correctMove: Move.Hit, index: ['<=', -6] }],
  ]),
  ],
  [17, new Map([
    [2, { correctMove: Move.Double, index: ['>=', 1] }],
    [3, { correctMove: Move.Hit, index: ['<=', -3] }],
    [4, { correctMove: Move.Hit, index: ['<=', -7] }],
  ])
  ],
  [18, new Map([
    [2, { correctMove: Move.Stand, index: ['<', 0] }],
    [3, { correctMove: Move.Stand, index: ['<=', -2] }],
    [4, { correctMove: Move.Stand, index: ['<=', -6] }],
  ]),
  ],
  [19, new Map([
    [2, { correctMove: Move.Double, index: ['>=', 8] }],
    [3, { correctMove: Move.Double, index: ['>=', 5] }],
    [4, { correctMove: Move.Double, index: ['>=', 3] }],
    [5, { correctMove: Move.Double, index: ['>=', 1] }],
    [6, { correctMove: Move.Stand, index: ['<', 0] }],
  ]),
  ],
  [20, new Map([
    [2, { correctMove: Move.Double, index: ['>=', 10] }],
    [3, { correctMove: Move.Double, index: ['>=', 8] }],
    [4, { correctMove: Move.Double, index: ['>=', 6] }],
    [5, { correctMove: Move.Double, index: ['>=', 5] }],
    [6, { correctMove: Move.Double, index: ['>=', 4] }],
  ])
  ],
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

export default class WongsFullDeviationChecker {
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
    const trueCount = game.shoe.hiLoTrueCount;

    if (!game.dealer.upcard) {
      return;
    }

    //1. Check if you can split
    if (hand.allowSplit) {
      return getDeviation(game, hand, trueCount, WongsFullDeviationChecker, wongsFullSplitDeviations)
    }

    //2. Check if the hand is soft first then end
    if (hand.isSoft) {
      return getDeviation(game, hand, trueCount, WongsFullDeviationChecker, wongsFullSoftDeviations)
    }

    //3. Check if you double, hit, stand, surrender
    const playerTotal =
      game.state.step === GameStep.WaitingForInsuranceInput
        ? 0
        : hand.cardTotal;
    const dealersCard = game.dealer.upcard.value;

    const deviation =
      hand.allowSurrender && suggestedSurrenderDeviation
        ? this._getDeviation(expandedSurrender, playerTotal, dealersCard) ??
        this._getDeviation(wongsFull, playerTotal, dealersCard)
        : this._getDeviation(wongsFull, playerTotal, dealersCard);
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
    if (!gameSettings.checkWongsDeviations) {
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

    const hintMessage = `Wong's full deviation: The correct play should have been to ${hint} at a true count ${index[0]} ${index[1]}`;

    return {
      code: correctMove,
      hint: hintMessage,
    };
  }
}
