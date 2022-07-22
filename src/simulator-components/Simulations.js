import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChangeCircle } from "styled-icons/material";
import Simulator from '../game-logic/simulator.ts';
import NavBar from '../pages/NavBar'
import { Link, useHistory } from 'react-router-dom'
import Navigation from "../pages/page-components/homepage-components/Navigation";

import fadeStyle from '../pages/FadeIn.module.scss'
import styles from './Simulations.module.scss'

export default function Simulations() {
  const history = useHistory()
  let [hands, setHands] = useState(1000)
  let [riskOfRuin, setRiskOfRuin] = useState(5)
  let [roundsPerHour, setRoundsPerHour] = useState(100)
  let [minimumBet, setMinimumBet] = useState(25)
  let [allowDoubleAfterSplit, setAllowDoubleAfterSplit] = useState(true)
  let [allowLateSurrender, setAllowLateSurrender] = useState(false)
  let [allowResplitAces, setAllowResplitAces] = useState(false)
  let [deckCount, setDeckCount] = useState(2)
  let [hitSoft17, setHitSoft17] = useState(true)
  let [penetration, setPenetration] = useState(75)
  let [maxHandsAllowed, setMaxHandsAllowed] = useState(4)
  let [blackjackPayout, setBlackjackPayout] = useState(0)
  let [playerStrategy, setPlayerStrategy] = useState(1)
  let [playerCount, setPlayerCount] = useState(1)
  let [simResults, setSimResults] = useState([])
  const [loading, setLoading] = useState(false)
  let [showModal, setShowModal] = useState(false)
  let [countingSystem, setCountingSystem] = useState(0)
  let [deckEstimation, setDeckEstimation] = useState(0)

  let [playerBetSpread, setPlayerBetSpread] = useState([
    25,
    25,
    25,
    25,
    25,
    50,
    100,
    200,
    200
  ])

  let newSimRef = useRef()


  function newSim() {
    setShowModal(true)
  }

  function clearSimulations() {
    setSimResults([])
    localStorage.clear()
  }

  function closeNewSim() {
    setShowModal(false)
  }

  useEffect(() => {
    setSimResults(JSON.parse(localStorage.getItem('results')) || simResults)
  }, [])


  // useEffect(() => {
  //   localStorage.setItem('results', JSON.stringify(simResults))
  //   history.push(`/simresult/${simResults.length}`)
  //   }
  // }, [simResults])

  // function getResults(results) {
  //   let resultsFromLS = localStorage.setItem('results', JSON.stringify(results))

  //   if (resultsFromLS) {
  //     setSimResults(resultsFromLS)
  //   } else {
  //     setSimResults(simResults)
  //   }
  // }


  useEffect(() => {
    if (loading) {
      runSim()
    }
  }, [loading])

  function startPreloader() {
    setLoading(true)
    setShowModal(false)
  }

  function runSim() {

    let options = {
      hands,
      countingSystem,
      deckEstimation,
      playerStrategy,

      playerBetSpread,

      minimumBet,
      playerSpots: 1,

      // playerTablePosition: 1,
      // We make the bankroll sufficiently large here to prevent ever going
      // bankrupt for the purpose of simulation.
      // TODO: Add support for infinite bankroll in the game module.

      // Table rules
      allowDoubleAfterSplit,
      allowLateSurrender,
      allowResplitAces,
      blackjackPayout,
      deckCount,
      hitSoft17,
      maxHandsAllowed,
      playerCount,
      penetration: penetration / 100,
      riskOfRuin,
      roundsPerHour,
    }

    let sim = new Simulator(options)
    let result = sim.run()

    result.tableRules = formatTableRules()
    result.actualHourlyAV = (result.amountEarned / result.hoursPlayed).toFixed(2)

    let addUserOptions = Object.assign(result, options)
    let allResults = [...simResults, addUserOptions]

    localStorage.setItem('results', JSON.stringify(allResults))

    setSimResults(allResults)
    closeNewSim()
    setLoading('')

    history.push(`/simresult/${simResults.length + 1}`)
  }

  function formatTableRules() {
    let bjPayout = blackjackPayout === 0 ? '3:2' : '6:5';
    let h17 = hitSoft17 ? 'H17' : 'S17';
    let das = allowDoubleAfterSplit ? 'DAS' : 'NDAS';
    let ls = allowLateSurrender ? 'LS' : 'NLS';
    let rsa = allowResplitAces ? 'RSA' : 'NRSA';

    return `${deckCount}D ${bjPayout} ${h17} ${das} ${ls} ${rsa}`
  }
  function parseBetSpread(val, i) {
    let spread = [...playerBetSpread]

    if (val === '') {
      spread[i] = val
      setPlayerBetSpread(spread)
      return;
    }

    spread[i] = parseInt(val)
    setPlayerBetSpread(spread)

    setMinimumBet(Math.min(...spread))
    return;
  }

  function parseValue(val, setState) {
    if (val === '.') {
      setState('0.')
      return;
    }

    if (val === '' ||
      val.slice(-1) === '.' ||
      val.slice(-1) === '0') {

      setState('0.')
      return;
    }

    setState(JSON.parse(val))
    return;
  }

  function formatActualValue(av) {
    return av > 0 ? styles.green : styles.red
  }

  function getResults() {
    return simResults.map((result, i) => {

      return <>
        <Link to={`/simresult/${i + 1}`} className={styles.links}>
          <div className={styles.tableRow} key={i}>

            <div><p>{`#${i + 1}`}</p></div>
            <div><p>{result.tableRules}</p></div>
            <div><p>{result.handsPlayed} Hands</p></div>
            {/* <div><p>
              {result.playerBetSpread.map((bet, tc) => {
                return `TC ${tc - 3}: $${bet}, `;
              })}
            </p></div> */}
            <div><p className={formatActualValue(result.actualHourlyAV)}>${result.actualHourlyAV}</p></div>
            <div><p>{result.roundsPerHour}</p></div>
            <div><p>{result.riskOfRuin}%</p></div>
            <div><p>{new Date().toDateString()}</p></div>
          </div>
        </Link>
      </>
    });
  }

  function validateInput(value, limit, setStateFunc) {

    if (value >= limit) {
      setStateFunc(limit)
    }

    if (value < limit) {
      setStateFunc(value)
    }
    if (isNaN(value)) {
      setStateFunc('')
    }

    if (value === 0) {
      setStateFunc('')
    }
  }

  return (
    <>
      <Navigation />
      <NavBar />
      {showModal && <div className={styles.newSimModalBackdrop}></div>}
      {loading && <div className={styles.preloader}></div>}
      {showModal && <div className={styles.newSimModal}>
        <h1>New Simulation</h1>
        <div className={styles.simulationsContainer}>
          <div className={styles.tableRulesContainer}>

            <div className={styles.rulesSection}>
              <h3>Counting system</h3>
              <select value={countingSystem} onChange={e => setCountingSystem(JSON.parse(e.target.value))}>
                <option value={0}>HiLo</option>
                <option value={2}>KO</option>
              </select>
            </div>

            <div className={styles.rulesSection}>
              <h3>Hands Played</h3>
              <input type="number"
                value={hands}
                onChange={e => validateInput(parseInt(e.target.value), 1000000, setHands)}
              />
              <p>More hands produces more accurate simulation results (Supports Max 1M)</p>
            </div>

            <div className={styles.rulesSection}>
              <h3>Player Strategy</h3>
              <select value={playerStrategy} onChange={e => setPlayerStrategy(JSON.parse(e.target.value))}>
                <option value={1}>Basic Strategy</option>
                <option value={2}>HiLo Illustrious 18 + Fab 4</option>
                <option value={3}>HiLo All Deviations</option>
              </select>
            </div>
            <div className={styles.rulesSection}>

              <h3>Game Rules</h3>
              <div className={styles.rulesSectionMain} >
                <select value={hitSoft17} onChange={e => setHitSoft17(JSON.parse(e.target.value))}>
                  <option value={true}>H17</option>
                  <option value={false}>S17</option>
                </select>
                <select value={allowDoubleAfterSplit} onChange={e => setAllowDoubleAfterSplit(JSON.parse(e.target.value))}>
                  <option value={true}>DAS</option>
                  <option value={false}>NDAS</option>
                </select>
                <select value={allowLateSurrender} onChange={e => setAllowLateSurrender(JSON.parse(e.target.value))}>
                  <option value={true}>LS</option>
                  <option value={false}>NLS</option>
                </select>

                <select value={allowResplitAces} onChange={e => setAllowResplitAces(JSON.parse(e.target.value))}>
                  <option value={true}>RSA</option>
                  <option value={false}>NRSA</option>
                </select>
              </div>
            </div>
            <div className={styles.rulesSection}>
              <h3>Rounds an Hour</h3>
              <input type="number"
                value={roundsPerHour}
                onChange={e => setRoundsPerHour(JSON.parse(e.target.value))}
                required
              />
            </div>
            <div className={styles.rulesSection}>

              <h3>Risk of Ruin (%)</h3>
              <input type="number"
                onChange={e => validateInput(parseInt(e.target.value), 100, setRiskOfRuin)}
                value={riskOfRuin}
                required
              />
            </div>
            <div className={styles.rulesSection}>

              <h3>Deck Count</h3>
              <select value={deckCount} onChange={e => setDeckCount(JSON.parse(e.target.value))}>
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
              </select>
            </div>

            <div className={styles.rulesSection}>
              <h3>Deck Estimation</h3>
              <select value={deckEstimation} onChange={e => setDeckEstimation(JSON.parse(e.target.value))}>
                <option value={0}>Full Deck</option>
                <option value={1}>Half Deck</option>
                <option value={2}>Quarter Deck</option>
                <option value={3}>Exact</option>
              </select>
            </div>

            <div className={styles.rulesSection}>

              <h3>Shoe Penetration (%)</h3>
              <input type="number"
                onChange={e => validateInput(parseInt(e.target.value), 100, setPenetration)}
                value={penetration}
                required
              />
              <p>Number of Decks Dealt From The Shoe</p>
            </div>
            <div className={styles.rulesSection}>

              <h3>Max hands allowed</h3>
              <select value={maxHandsAllowed} onChange={e => setMaxHandsAllowed(JSON.parse(e.target.value))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className={styles.rulesSection}>

              <h3>Blackjack Payout</h3>
              <select value={blackjackPayout} onChange={e => setBlackjackPayout(JSON.parse(e.target.value))}>
                <option value={0}>3:2</option>
                <option value={1}>6:5</option>
              </select>
            </div>
          </div>
          <div className={styles.betSpreadContainer}>
            <h2>Bet Spread</h2>

            <div className={`${styles.tcContainer} ${styles.firstChildTcContainer}`}>
              <h3>TC -3</h3>
              <input type="number"
                value={playerBetSpread[0]}
                onChange={e => parseBetSpread(e.target.value, 0)}
                required
              />
            </div>

            <div className={styles.tcContainer}>

              <h3>TC -2</h3>
              <input type="number"
                value={playerBetSpread[1]}
                onChange={e => parseBetSpread(e.target.value, 1)}
                required
              />
            </div>
            <div className={styles.tcContainer}>

              <h3>TC -1</h3>
              <input type="number"
                value={playerBetSpread[2]}
                onChange={e => parseBetSpread(e.target.value, 2)}
                required
              />
            </div>
            <div className={styles.tcContainer}>
              <h3>TC 0</h3>
              <input type="number"
                value={playerBetSpread[3]}
                onChange={e => parseBetSpread(e.target.value, 3)}
                required
              />
            </div>
            <div className={styles.tcContainer}>

              <h3>TC 1</h3>
              <input type="number"
                value={playerBetSpread[4]}
                onChange={e => parseBetSpread(e.target.value, 4)}
                required
              />
            </div>
            <div className={styles.tcContainer}>
              <h3>TC 2</h3>
              <input type="number"
                value={playerBetSpread[5]}
                onChange={e => parseBetSpread(e.target.value, 5)}
                required
              />
            </div>
            <div className={styles.tcContainer}>
              <h3>TC 3</h3>
              <input type="number"
                value={playerBetSpread[6]}
                onChange={e => parseBetSpread(e.target.value, 6)}
                required
              />
            </div>
            <div className={styles.tcContainer}>

              <h3>TC 4</h3>
              <input type="number"
                value={playerBetSpread[7]}
                onChange={e => parseBetSpread(e.target.value, 7)}
                required
              />
            </div>

            <div className={styles.tcContainer}>
              <h3>TC 5</h3>
              <input type="number"
                value={playerBetSpread[8]}
                onChange={e => parseBetSpread(e.target.value, 8)}
                required
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.btn} ${styles.btnWhite}`} onClick={closeNewSim}>Cancel</button>
          <button className={`${styles.btn} ${styles.btnOrange}`} onClick={startPreloader}>Run Simulation</button>
        </div>
      </div>}
      <div className={`${styles.simContainer} ${fadeStyle.fadeIn}`}>
        <h1>Simulations</h1>
        <p>Create a Blackjack Simulation</p>

        <a onClick={newSim} className={`${styles.btn} ${styles.btnOrange}`}>New Simulation</a>
        <div>
          <a onClick={clearSimulations} className={`${styles.btn} ${styles.btnWhite} ${styles.deleteAllBtn}`}>Delete All Simulation</a>
        </div>

        {simResults.length > 0 && <div className={styles.mainContainer}>
          <div className={styles.tableConatiner}>
            <div>
              <h1></h1>
            </div>
            <div>
              <h1>Table Rules</h1>
            </div>
            <div>
              <h1>Number of Hands Played</h1>
            </div>
            <div>
              <h1>Hourly Actual Value</h1>
            </div>
            <div>
              <h1>Rounds per Hour</h1>
            </div>
            <div>
              <h1>Risk of Ruin</h1>
            </div>
            <div>
              <h1>Created</h1>
            </div>
          </div>

          {getResults()}
        </div >}
      </div>
    </>
  )
}
