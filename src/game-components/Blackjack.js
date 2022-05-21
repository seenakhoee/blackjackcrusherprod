import React from 'react';
import Controls from './Controls.js';
import Hand from './Hand.js'
import Stats from './Stats.js'
import H17Chart from './H17Chart.js'
import S17Chart from './S17Chart.js'
import H17FlashcardChart from './Flashcard-H17Chart'
import HeaderDisplay from './HeaderDisplay'
import Instructions from './Instructions'
import BasicStrategyChart from './BasicStrategyChart';
import AskForCountPopup from './AskForCountPopup'
import RCWithDeck from './RCWithDeck'

import Settings from './Settings.js'

import {
  Event,
  GameStep,
  GameMode
} from '../game-logic/index';

import '../game-css/index.scss';
import styles from './Blackjack.module.scss'

class Blackjack extends React.Component<any, any>
{
  constructor(props) {
    super(props);
    let { game } = this.props;
    this.state = {
      game,
      step: this.props.game.state.step,

      playerHands: this.props.game.player.hands,
      dealersHand: this.props.game.dealer.hands,

      player: this.props.game.player,
      coverDealerCard: true,

      stats: this.getStats(game),
      sessionMovesCorrect: 0,
      sessionMovesTotal: 0,

      openStats: false,
      openSettings: false,
      openChart: false,
      openH17: false,
      openS17: false,
      openH17FlashcardChart: false,
      openBasicStrategyChart: false,
      openInstructions: false,
      handsCount: this.props.game.players[0].handsCount,
      focusedHandIndex: 0,
      allowLateSurrender: false,
      allowDoubleAfterSplit: true,
      deckCount: 2,
      hitSoft17: true,
      playerMistakes: [],
      playerMistake: '',
      players: game.players,
      askForCountValue: 3,
      round: this.props.game.state.round,
      totalCountingDecisions: 0,
      correctCountingDecisions: 0,
      showDealButton: true,
      askForCountPopup: false,
      showCountPopup: false
    }

  }

  checkGameMode() {
    // grabbing the game state from the event handler
    switch (this.state.game.gameMode) {
      case GameMode.HardTotals:
        return this.state.game.shoe.runningCount;
      case GameMode.SoftTotals:
        return this.state.game.shoe.runningCount;
      case GameMode.Illustrious18:
        return this.state.game.shoe.runningCount;
      default:
        return false
    }
  }

  isGameModeDefault() {
    return (this.state.game.gameMode === GameMode.Default) ? true : false
  }

  isValidGameMode() {
    return (this.state.game.gameMode === GameMode.Illustrious18 ||
      this.state.game.gameMode === GameMode.SoftTotals ||
      this.state.game.gameMode === GameMode.HardTotals) ? true : false
  }

  selectAskForCountPopup = (e) => {
    this.setState({ askForCountValue: JSON.parse(e.target.value) })
  }

  updateAllowLateSurrender = (e) => {
    this.setState({ allowLateSurrender: JSON.parse(e.target.value) })
  }

  updateHitSoft17 = (e) => {
    this.setState({ hitSoft17: JSON.parse(e.target.value) })
  }

  updateDeckCount = (e) => {
    this.setState({ deckCount: JSON.parse(e.target.value) })
  }

  updateAllowDoubleAfterSplit = (e) => {
    this.setState({ allowDoubleAfterSplit: JSON.parse(e.target.value) })
  }

  componentWillUnmount() {
    document.body.classList.remove('body-game');
    document.documentElement.className = '';
    this.setState({})
  }

  componentDidMount() {
    document.body.classList.add('body-game');
    document.documentElement.className = 'html-game';

    this.props.game.on(Event.ResetState, () => {
      this.setState({ round: 0 })
    })

    this.props.game.on(Event.UserInput, (name, value) => {
      this.setState({
        [name]: value,
      })
    })

    this.props.game.on(Event.Change, (name, value) => {
      // In a real app, this will likely be a React-redux store or a Vuex store.
      // const state = {};

      // Called when any game state changes. `name` will be one of the following:
      //
      // - focusedHand
      // - sessionMovesCorrect
      // - sessionMovesTotal
      // - playCorrection
      // - step
      // - shoe
      // - discardTray
      // - dealer
      // - player
      // - handWinner
      // - showDealButton
      // - askForCountPopup

      this.setState({
        [name]: value,
        playerHands: this.props.game.player.hands,
        dealersHand: this.props.game.dealer.hands,
        handsCount: this.props.game.players[0].handsCount,
        // dealersHand: [this.props.game.dealer.hands[0].cards[0], dummyRank],
        coverDealerCard: true,
        stats: this.getStats(this.state.game),
        handSize: 'sm1',
      })

      let handSize: any;
      switch (this.state.handsCount) {
        case 1:
          handSize = 'sm1';
          break;

        case 2:
          handSize = 'sm2';
          break;

        case 3:
          handSize = 'sm3';
          break;
        case 4:
          handSize = 'sm3'
          break;

        default:
          break;
      }

      this.setState({ handSize })

    });

    this.props.game.on(Event.Shuffle, () => {
      console.log('End of shoe, cards shuffled!');
    });

    this.props.game.on(Event.CreateRecord, (entityName, data) => {
      if (typeof data.checkerResult === 'object' ? data.checkerResult.code : null) {

        let playerMistake = `Player had ${data.playerHand}, dealers upcard was ${data.dealerHand}. ${data.checkerResult.hint}`

        this.setState({
          playerMistakes: [...this.state.playerMistakes, playerMistake],
          playerMistake,
          openStats: !this.state.openStats
        })
      }
      // fetch(`/api/v1/${entityName}`, {
      //   method: 'POST',
      //   body: JSON.serialize(data),
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      // });
    });

    document.body.addEventListener('keypress', this.toggleKeypress);
  }


  getStats(game) {

    let tc;

    switch (game.countingSystem) {

      case 0:
        tc = this.getTrueCount(game.shoe.hiLoTrueCountFullDeck)
        break;

      case 1:
        tc = this.getTrueCount(game.shoe.hiLoTrueCountFullDeck)
        break;

      case 2:
        tc = game.shoe.runningCount
        break;
    }

    return {
      runningCount: game.shoe.runningCount,
      hiLoTrueCount: tc,
      penetration: game.shoe.penetration,
    }
  }

  getTrueCount(tc) {
    // or

    let trueCount = Math.sign(tc) * Math.floor(Math.abs(tc));

    if (trueCount === -0) {
      return 0;
    } else {
      return trueCount;
    }

  }

  returnStat(stat) {
    if (stat) {
      return stat
    } else {
      return 0;
    }
  }

  showSplit() {
    if (this.state.playerHands.length > 0 && this.state.playerHands.length < 4) {
      return this.state.playerHands[this.state.focusedHandIndex].hasPairs ? true : false;
    }
  }

  isDealing() {
    if (
      this.state.step ===
      GameStep.WaitingForPlayInput ||
      GameStep.WaitingForInsuranceInput) {
      return true;
    }
    return false
  }

  toggleStats() {
    this.setState({
      openStats: !this.state.openStats,
    })
  }

  updatePlayerMistake() {
    this.setState({
      playerMistake: ''
    })
  }

  toggleSettings() {
    this.setState({
      openSettings: !this.state.openSettings
    })
  }

  toggleInstructions() {
    this.setState({
      openInstructions: !this.state.openInstructions
    })
  }

  toggleBasicStrategyChart() {
    this.setState({
      openBasicStrategyChart: !this.state.openBasicStrategyChart
    })
  }

  toggleH17Chart() {
    this.setState({
      openH17: !this.state.openH17
    })
  }

  toggleS17Chart() {
    this.setState({
      openS17: !this.state.openS17
    })
  }

  toggleH17FlashcardChart() {
    this.setState({
      openH17FlashcardChart: !this.state.openH17FlashcardChart
    })
  }

  toggleKeypress = (e: any) => {
    if (e.key === 'j') {
      this.toggleStats()
    }
    if (e.key === 'f') {
      this.toggleSettings()
    }
    if (e.key === ';') {
      this.toggleH17Chart()
    }
    if (e.key === 'i') {
      this.toggleInstructions()
    }
  }

  checkIfFirstMove(playerHands) {
    if (playerHands[this.state.focusedHandIndex]) {
      return playerHands[this.state.focusedHandIndex].firstMove;
    }
  }

  correctTCInput(correct, userInput, correctTc) {
    // pass this in
    // if user inputs correct
    if (correct) {
      this.setState({
        correctCountingDecisions: this.state.correctCountingDecisions + 1,
        totalCountingDecisions: this.state.totalCountingDecisions + 1
      })
    }

    if (!correct) {
      let playerMistake = `TC was ${userInput}, however your answer was ${correctTc}`

      this.setState({
        totalCountingDecisions: this.state.totalCountingDecisions + 1,
        playerMistakes: [...this.state.playerMistakes, playerMistake],
      })
    }
    // run this update correct moves & total moves
    // incorrect, run this total moves & update message
  }

  getFocusedStyles() {
    let handClassName = '';

    switch (this.state.focusedHandIndex) {
      case 0:
        handClassName = 'firstHand';
        break;
      case 1:
        handClassName = 'secondHand';
        break;
    }

    return handClassName

  }

  render() {
    const {
      dealersHand,
      playerHands,
      openStats,
      openSettings,
      openH17,
      openS17,
      openH17FlashcardChart,
      openInstructions,
      openBasicStrategyChart,
      handSize,
      allowLateSurrender,
      allowDoubleAfterSplit,
      deckCount,
      hitSoft17,
      askForCountValue,
      round
    } = this.state;

    return (
      <>
        <div className={styles.preloader}></div>
        <div className="app">
          {this.isGameModeDefault() && <AskForCountPopup
            correctTCInput={(correct, userInput, correctTc) => this.correctTCInput(correct, userInput, correctTc)}
            askForCountValue={askForCountValue}
            round={this.state.round}
            step={this.state.step}
            hiLoTrueCount={this.state.stats.hiLoTrueCount}
            showCountPopup={this.state.showCountPopup}
          />}
          {(this.isValidGameMode() && round > 0) && <RCWithDeck
            runningCount={this.state.stats.runningCount}
            deckCount={deckCount}
            round={this.state.round}
            step={this.state.step}

          />}
          <HeaderDisplay
            pen={this.state.stats.penetration}
            allowLateSurrender={allowLateSurrender}
            allowDoubleAfterSplit={allowDoubleAfterSplit}
            deckCount={deckCount}
            hitSoft17={hitSoft17}
            showRunningCount={this.checkGameMode()}
            cards={this.state.game.shoe.cards}
            step={this.state.step}
          />
          {openBasicStrategyChart && <BasicStrategyChart
            showChart={BasicStrategyChart}
            onKeyPress={this.toggleKeypress}
            toggleBasicStrategyChart={() => this.toggleBasicStrategyChart()}
            openBasicStrategyChart={openBasicStrategyChart}
          />
          }
          {openH17 && <H17Chart
            showChart={openH17}
            onKeyPress={this.toggleKeypress}
            toggleH17Chart={() => this.toggleH17Chart()}
            openH17={openH17}
          />
          }
          {openS17 && <S17Chart
            showChart={openS17}
            onKeyPress={this.toggleKeypress}
            toggleS17Chart={() => this.toggleS17Chart()}
            showS17={openS17}
          />
          }
          {openH17FlashcardChart && <H17FlashcardChart
            showChart={openH17FlashcardChart}
            onKeyPress={this.toggleKeypress}
            toggleH17FlashcardChart={() => this.toggleH17FlashcardChart()}
            openH17FlashcardChart={openH17FlashcardChart}
          />
          }
          <div className={this.state.openSettings ? "openSettings" : ''}>
            <Settings
              stats={this.state.stats}
              showSettings={openSettings}
              onKeyPress={this.toggleKeypress}
              toggleSettings={() => this.toggleSettings()}
              updateAllowLateSurrender={this.updateAllowLateSurrender}
              allowLateSurrender={allowLateSurrender}
              updateAllowDoubleAfterSplit={this.updateAllowDoubleAfterSplit}
              allowDoubleAfterSplit={allowDoubleAfterSplit}
              updateDeckCount={this.updateDeckCount}
              deckCount={deckCount}
              updateHitSoft17={this.updateHitSoft17}
              hitSoft17={hitSoft17}
              resetGame={this.state.game.resetGame}
              selectAskForCountPopup={this.selectAskForCountPopup}
              askForCountValue={askForCountValue}
            />
          </div>
          <div>
            <Instructions
              showInstructions={openInstructions}
              onKeyPress={this.toggleKeypress}
              toggleInstructions={() => this.toggleInstructions()}
            />
          </div>
          {/* <header className={this.state.openStats ? "openStats" : ''}> */}
          {this.state.openStats && <Stats
            stats={this.state.stats}
            showStats={openStats}
            onKeyPress={this.toggleKeypress}
            toggleStats={() => this.toggleStats()}
            sessionMovesCorrect={this.state.sessionMovesCorrect}
            totalCountingDecisions={this.state.totalCountingDecisions}
            sessionMovesTotal={this.state.sessionMovesTotal}
            playerMistakes={this.state.playerMistakes}
            playerMistake={this.state.playerMistake}
            updatePlayerMistake={() => this.updatePlayerMistake()}
            correctCountingDecisions={this.state.correctCountingDecisions}
          />}
          {/* </header> */}
          <section role="main">
            {/*
            1. Check if player is presented with hit stand insurance.
            If true then show the dealer dummy hand
            2. If false then show dealer real hand, contine.

            TODO
            1. Find out the state.proprety that flags of hit, stand, insurance is present
            2. Use that to render / pass the approperiate values

            */}
            {/* before rendiner hands, check the dealer & player has */}
            <div className={`dealerHands ${handSize}`}>
              {dealersHand[0] &&
                <Hand busted={dealersHand[0].busted} hand={dealersHand[0]} owner="dealer" inProgress={this.isDealing()} coverDealerCard={this.state.coverDealerCard} />}
            </div>
            {/* <div>
              <img src={require('./gorilla.png')} alt='gorilla' className="gorilla" width="600" height="400"></img>
            </div> */}
            <div className={`playersHands ${handSize}`}>

              {(playerHands[0]) &&
                playerHands.map((playerHand: any) => (
                  <Hand
                    handClassName={this.getFocusedStyles()}
                    busted={playerHand.busted}
                    hand={playerHand}
                    key={playerHand.id}
                    owner="player"
                    inProgress={this.isDealing()}
                    coverDealerCard={this.state.coverDealerCard} />
                ))}
            </div>
          </section>
          <footer>
            <nav>
              <Controls
                step={this.state.step}
                WaitingForPlayInput={GameStep.WaitingForPlayInput}
                WaitingForInsuranceInput={GameStep.WaitingForInsuranceInput}
                WaitingForNewGameInput={GameStep.WaitingForNewGameInput}
                showSplit={this.showSplit()}
                toggleStats={() => this.toggleStats()}
                toggleSettings={() => this.toggleSettings()}
                toggleBasicStrategyChart={() => this.toggleBasicStrategyChart()}
                toggleS17Chart={() => this.toggleS17Chart()}
                toggleH17Chart={() => this.toggleH17Chart()}
                toggleH17FlashcardChart={() => this.toggleH17FlashcardChart()}
                toggleInstructions={() => this.toggleInstructions()}
                allowLateSurrender={playerHands[this.state.focusedHandIndex] ? playerHands[this.state.focusedHandIndex].allowSurrender : false}
                allowDAS={playerHands[this.state.focusedHandIndex] ? playerHands[this.state.focusedHandIndex].allowDAS : false}
                firstMove={this.checkIfFirstMove(playerHands)}
                fromSplit={playerHands[this.state.focusedHandIndex] ? playerHands[this.state.focusedHandIndex].fromSplit : false}
                showDealButton={this.state.showDealButton}
              />
            </nav>
          </footer>
        </div>
      </>
    );
  }

}

export default Blackjack;
