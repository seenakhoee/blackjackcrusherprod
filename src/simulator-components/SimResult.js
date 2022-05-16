import React, { useState, useEffect, useRef, useCallback } from "react";
import NavBar from '../pages/NavBar'
import { Link, useParams } from 'react-router-dom'
import Navigation from "../pages/page-components/homepage-components/Navigation";


import styles from './SimResult.module.scss'

export default function SimResult({ test }) {
  let { id } = useParams()
  let [result, setResults] = useState(JSON.parse(localStorage.getItem('results'))[id - 1])

  function formatBetSpread() {
    return result.playerBetSpread.map((bet, tc) => {
      return `TC ${tc - 3}: $${bet} `;
    })
  }

  function checkBrReq(br) {
    return br > 0 ? br : br * -1
  }

  function getPlayerStrategy() {
    switch (result.playerStrategy) {
      case 1:
        return "Hilo Basic Strategy"
        break;
      case 2:
        return "Hilo Illustration 18"
        break;
      case 3:
        return "Hilo Illustration 18 + Fav 4"
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Navigation />
      <NavBar />

      <div className={styles.simResultContainer}>
        <h1>Simulation #{id} Results</h1>
        <h3>Created on {new Date().toDateString()}</h3>
        <p className={styles.firstChild}><span>Player Straetgy  : </span>{getPlayerStrategy()}</p>
        <p><span>Table Rules : </span>{result.tableRules}</p>
        <p><span>Deck Penetration  : </span>{result.penetration * 100}%</p>
        <p><span>Bet Spread  : </span>{formatBetSpread()}</p>

        <span className={styles.backButton}><Link to='/simulations'>Back To Simulations Overview</Link></span>

        <div className={styles.newSimResultContainer}>
          <div className={styles.statContainer}>
            <h1>Actual Hourly Value</h1>
            <p>${result.actualHourlyAV}</p>
            <p>Hourly earnings over the number of hands ran in current sim.</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Hands Played</h1>
            <p>{result.handsPlayed}</p>
            <p>Total number of hands played</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Rounds per Hour</h1>
            <p>{result.roundsPerHour}</p>
            <p>Total hands player per hour</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Amount Earned</h1>
            <p>${result.amountEarned}</p>
            <p>Description</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Amount Wagered</h1>
            <p>${result.amountWagered}</p>
            <p>Description</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Hands Won</h1>
            <p>{result.handsWon}</p>
            <p>Description</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Hands Lost</h1>
            <p>{result.handsLost}</p>
            <p>Description</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Hands Pushed</h1>
            <p>{result.handsPushed}</p>
            <p>Description</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Risk of Ruin</h1>
            <p>{result.riskOfRuin}%</p>
            <p>Chance of going bankrupt over an endless session</p>
          </div>

          <div className={styles.statContainer}>
            <h1>Bankroll Requirement</h1>
            <p>${checkBrReq(result.bankrollRqd.toFixed(2))}</p>
            <p>Given the result of the amount earned combined with risk of ruin</p>
          </div>

        </div>
      </div>

    </>
  )
}
