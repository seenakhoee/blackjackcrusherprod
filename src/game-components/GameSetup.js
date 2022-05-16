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
  checkDeviations: false,

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

export async function runGame(game: any, addListner) {
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
      if (addListner) {
        addListner()
      }
      return game;
    }
  }
}

async function hello() {
  let g = await runGame(game);

  function askForPopup() {
    return new Promise((resolve) => {
      game.on(Event.UserInput, (name, value) => {
        // if value of showCountPopup not true
        // then resolve and continue
        if (!value) {
          document.body.addEventListener('keypress', keypressHandler);
          document.body.addEventListener('click', clickHandler);
          resolve()
        }
      })
    })

  }

  async function handlerLogic() {
    g.removeCards();

    if ((g.state.round !== 0) && g.askForCountPopup() && !g.state.userInputTC) {
      g.emit(Event.UserInput, 'showCountPopup', true)

      return await askForPopup()
    }
    g.state.userInputTC = false;

    g.state.step = GameStep.Start
    runGame(g, addListner);

    g.showDealButton = false;
    g.emit(Event.Change, 'showDealButton', g.showDealButton)
  }

  async function keypressHandler(event: KeyboardEvent) {
    const action = actionDataKeyToCorrectMove(event.key);

    if (!g.dealInput(action)) {
      return
    }

    if (g.state.step === GameStep.WaitingForNewGameInput) {
      handlerLogic()
      document.body.removeEventListener('keypress', keypressHandler);
    }
  }

  const clickHandler = (event: Event) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    const action = actionDataKeyToCorrectMove(
      event.target?.dataset.action ?? ''
    );

    if (action) {
      if (g.state.step === GameStep.WaitingForNewGameInput) {
        handlerLogic()
        document.body.removeEventListener('click', clickHandler);
      }
    }
  };

  // re-initiate event handler
  const addListner = () => {
    // adding event handler for Deal with setTimeout

    window.setTimeout(() => {
      document.body.addEventListener('keypress', keypressHandler);
      document.body.addEventListener('click', clickHandler);

      g.showDealButton = true;
      g.emit(Event.Change, 'showDealButton', g.showDealButton)
    }, 1300)
  }

  if (g.state.round === 0) {
    // first round, show the deal button

    document.body.addEventListener('keypress', keypressHandler);
    document.body.addEventListener('click', clickHandler);

    // g.showDealButton = true;
    g.emit(Event.Change, 'userInputSubmitted', true)
  } else {
    // after - add setTimeout / evenlistener to finish dealing
    addListner()
  }
};

hello()
