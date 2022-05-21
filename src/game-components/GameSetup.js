import {
  Event,
  Game,
  GameStep,
  PlayerInputReader,
  GameMode,
  CountingSystem,
} from '../game-logic/index';
import { useLocation } from 'react-router-dom'
import { actionDataKeyToCorrectMove, Move } from '../game-logic/types';

// DEFAULT SETTINGS
export const settings: {} = {
  autoDeclineInsurance: false,
  disableEvents: false,
  checkDeviations: true,

  // Can be one of 'default', 'pairs', 'uncommon', 'illustrious18'. If the mode
  // is set to 'illustrious18', `checkDeviations` will be forced to true.

  // TODO: Fix mode config settingamez.
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
  askForCountPopup: 3
};


export let game = new Game(settings);
// if game === true

function stepGame(game: any, playerInputReader: any, input: any) {
  const step = game.step(input);

  // if step === newGameInput === return out of while loop
  // create event handlerHandler to call runGame
  // start

  if (step === GameStep.WaitingForNewGameInput) {
    return
  }

  if (
    ![
      GameStep.WaitingForPlayInput,
      GameStep.WaitingForInsuranceInput,
    ].includes(step)
  ) {
    return Promise.resolve();
  }

  return new Promise((resolve) => playerInputReader.readInput(resolve));
}

export async function runGame(game: any, addDealInputListner, addKeyP) {
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

    if (game.state.step === GameStep.WaitingForNewGameInput) {
      if (addDealInputListner) {
        addDealInputListner(game, addKeyP)
      }
      return game;
    }
  }
}


function askForPopup(gamez, addKeyP) {
  return new Promise((resolve) => {
    game.on(Event.UserInput, (name, value) => {
      // if value of showCountPopup not true
      // then resolve and continue
      if (!value) {
        document.body.addEventListener('keypress', addKeyP);
        document.body.addEventListener('click', clickHandler);
        resolve()
      }
    })
  })
}

async function showCountPopup(gamez, addKeyP) {
  gamez.removeCards();

  // check whether to show
  if ((gamez.state.round !== 0) && gamez.askForCountPopup() && !gamez.state.userInputTC) {
    gamez.emit(Event.UserInput, 'showCountPopup', true)

    // wait for user input
    return await askForPopup(gamez, addKeyP)
  }

  // reset userInput property continue running Game
  gamez.state.userInputTC = false;
  gamez.state.step = GameStep.Start

  runGame(gamez, addDealInputListner, addKeyP);

  gamez.showDealButton = false;
  gamez.emit(Event.Change, 'showDealButton', gamez.showDealButton)
}

async function keypressHandler(event: KeyboardEvent, gamez, addKeyP) {
  const action = actionDataKeyToCorrectMove(event.key);

  if (!gamez.dealInput(action)) {
    return
  }

  if (gamez.state.step === GameStep.WaitingForNewGameInput) {
    showCountPopup(gamez, addKeyP)
    document.body.removeEventListener('keypress', addKeyP);
  }
}

const clickHandler = (event: Event, gamez) => {
  if (!(event.target instanceof HTMLElement)) {
    return;
  }
  const action = actionDataKeyToCorrectMove(
    event.target?.dataset.action ?? ''
  );

  if (action) {
    if (gamez.state.step === GameStep.WaitingForNewGameInput) {
      showCountPopup(gamez)
      document.body.removeEventListener('click', clickHandler);
    }
  }
};

// re-initiate event handler
function addDealInputListner(gamez, addKeyP) {
  // adding event handler for Deal with setTimeout
  window.setTimeout((gamez, addKeyP) => {
    document.body.addEventListener('keypress', addKeyP);
    document.body.addEventListener('click', (e) => {
      clickHandler(e, gamez)
    });
    gamez.showDealButton = true;
    gamez.emit(Event.Change, 'showDealButton', gamez.showDealButton)
  }, 1300, gamez, addKeyP)
}

async function startGame() {
  let gamez = await runGame(game);

  function addKeyP(e) {
    keypressHandler(e, gamez, addKeyP)
  }

  if (gamez.state.round === 0) {
    // first round, show the deal button
    document.body.addEventListener('keypress', addKeyP);
    document.body.addEventListener('click', (e) => {
      clickHandler(e, gamez)
    });

    // gamez.showDealButton = true;
    gamez.emit(Event.Change, 'userInputSubmitted', true)
  } else {
    // after - add setTimeout / evenlistener to finish dealing
    addDealInputListner(gamez, addKeyP)
  }
};

startGame()