import React, { useState, useEffect, useRef, useCallback } from "react";
import NavBar from '../pages/NavBar'
import { Link, useParams } from 'react-router-dom'
import Navigation from "../pages/page-components/homepage-components/Navigation";
// import 'semantic-ui-css/semantic.min.css'

import styles from './SimResult.module.scss'

export default function SimResult({ test }) {
  let [openBlackjackCounter, setOpenBlackjackCounter] = useState(false)
  let [openBlackjackSpread, setOpenBlackjackSpread] = useState(false)
  let [arrowDirectionForCounter, setArrowDirectionForCounter] = useState('icon-right')
  let [arrowDirectionForSpread, setArrowDirectionForSpread] = useState('icon-right')


  let { id } = useParams()
  let [result, setResults] = useState(JSON.parse(localStorage.getItem('results'))[id - 1])

  function formatBetSpread() {
    if (!openBlackjackSpread) {
      return
    }
    return result.playerBetSpread.map((bet, tc) => {
      return <p>TC {tc - 3}: ${bet} </p>;
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
        return "Hilo Illustrious 18"
        break;
      case 3:
        return "Hilo Illustrious 18 + Fav 4"
        break;
      default:
        break;
    }
  }

  function getBlackjackCount(blackjackCounter) {
    if (!openBlackjackCounter) {
      return
    }

    let tcValues = [];

    let titleSet = false;
    Object.keys(blackjackCounter)
      .map((val) => {
        return Number(val)
      })
      .sort((a, b) => { return a - b })
      .forEach((key, i) => {

        // console.log(blackjackCounter, 'blackjackCounter')

        let blackjackCount = blackjackCounter[key].blackjacksCount
        let totalTc = blackjackCounter[key].tcTotalCount

        let title =
          [<div><p>True Count</p></div>,
          <div><p>Total Hands Delt</p></div>,
          <div><p>Total Blackjacks</p></div>,
          <div><p>% Blackjack Received vs True Count</p></div>,
          <div><p>% Blackjack Received vs Total Hands</p></div>]



        tcValues.push(
          <div className={styles.tcStats} >
            {!titleSet && title}
            {titleSet && <div><p><span>TC {key} </span></p></div>}
            {titleSet && <div> {totalTc}</div>}
            {titleSet && <div> {blackjackCount}</div>}
            {titleSet && <div> {(blackjackCount / totalTc * 100).toFixed(2)}%</div>}
            {titleSet && <div> {(blackjackCount / result.handsPlayed * 100).toFixed(2)}%</div>}

          </div >
        );
        titleSet = true;
      });

    return tcValues

  }

  function toggleBetSpread() {
    setOpenBlackjackSpread(!openBlackjackSpread)

    openBlackjackSpread
      ? setArrowDirectionForSpread('icon-right')
      : setArrowDirectionForSpread('icon-down');
  }

  function toggleBlackjackCounter() {
    setOpenBlackjackCounter(!openBlackjackCounter)

    openBlackjackCounter
      ? setArrowDirectionForCounter('icon-right')
      : setArrowDirectionForCounter('icon-down');
  }


  return (
    <>
      <Navigation />
      <NavBar />

      <div className={styles.simResultContainer}>
        <h1>Simulation #{id} Results</h1>
        <h3>Created on {new Date().toDateString()}</h3>
        <p className={styles.firstChild}><span>Player Strategy  : </span>{getPlayerStrategy()}</p>
        <p><span>Table Rules : </span>{result.tableRules}</p>
        <p><span>How Many Decks Are In The Shoe : </span>{result.penetration * 100}%</p>
        <p
          onClick={() => { toggleBetSpread() }} >
          <span>Bet Spread  :  <i className={arrowDirectionForSpread}></i></span>
          {formatBetSpread()}
        </p>
        <p>
          <span>Total Number of Blackjacks Received : </span>
          {result.totalBlackjacksReceived}
        </p>
        <p>
          <span>% of Blackjacks Received out of {result.handsPlayed} hands : </span>
          {(result.totalBlackjacksReceived / result.handsPlayed * 100).toFixed(2)}%
        </p>
        <p>
          <span onClick={() => { toggleBlackjackCounter() }} >Number of Blackjacks  at each True Count: <i className={arrowDirectionForCounter}></i></span>
          <div className={styles.tcContainer}>
            {getBlackjackCount(result.blackjackCounter)}
          </div>
        </p>
        <p><span>Total Illustrious18 + Fab4 Deviations Taken : </span>{result.totalIll18Deviations}</p>
        <p><span>Total Expanded Deviations Taken : </span>{result.totalExpandedDeviations}</p>
        <p><span>Total Deviations Taken : </span>{result.totalExpandedDeviations + result.totalIll18Deviations}</p>

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
