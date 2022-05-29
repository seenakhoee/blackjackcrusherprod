

import {
  Event,
  Game,
  GameStep,
  PlayerInputReader,
  GameMode,
  CountingSystem,
} from '../game-logic/index';

// DEFAULT SETTINGS
export const settings: {} = {
  autoDeclineInsurance: false,
  disableEvents: false,
  checkDeviations: true,

  // Can be one of 'default', 'pairs', 'uncommon', 'illustrious18'. If the mode
  // is set to 'illustrious18', `checkDeviations` will be forced to true.

  // TODO: Fix mode config setting.
  mode: GameMode.Default,
  countingSystem: CountingSystem.HiLo,
  debug: false,

  playerBankroll: 1000 * 10 ** 7,
  playerTablePosition: 1,
  playerStrategyOverride: {},

  // Table rules
  allowDoubleAfterSplit: true,
  allowLateSurrender: false,
  allowResplitAces: false,
  // TODO: Fix blackjackPayoutSelection
  // 0 === 3:2, 1 === 6:5
  blackjackPayout: 0,
  deckCount: 2,
  hitSoft17: true,
  maxHandsAllowed: 4,
  maximumBet: 1000 * 100,
  minimumBet: 1000,
  playerCount: 1,
  penetration: 0.75,
};

export let game = new Game(settings);

function stepGame(game: any, playerInputReader: any, input: any) {
  const step = game.step(input);

  if (
    ![
      GameStep.WaitingForPlayInput,
      GameStep.WaitingForInsuranceInput,
      GameStep.WaitingForNewGameInput,
      GameStep.AskForCount,

    ].includes(step)
  ) {
    return Promise.resolve();
  }

  // returning pending promise
  return new Promise((resolve) => playerInputReader.readInput(resolve));
}

async function runGame(game: any) {
  game.betAmount = 10 * 100;

  const playerInputReader = new PlayerInputReader();
  let input;

  while (true) {
    // async enables promise behavior inside the function - returns promise
    // await returns the resolved value
    // when promise is pending, await will wait until resolved.
    // while loop will not continue to execute when step() returning a pending promise

    // MDN - The await operator is used to wait for a Promise
    input = await stepGame(game, playerInputReader, input);
  }
}


runGame(game);