import React, { useState, useEffect } from 'react';
import styles from './DiscardTray.module.scss'

export default function DiscardTray({ cards, currentPen, step, deckCount }) {
  // Declare a new state variable, which we'll call "count"

  const [pen, setPen] = useState(0);


  function getPen() {
    if (step === 2) {
      setPen(currentPen)
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    getPen()
  }, [step]);

  function showDeckLine() {
    // if deckCount = 2
    //  twoDeck
    switch (deckCount) {
      case 2:
        return [<div className={styles.twoDeck}></div>]
        break;

      case 4:
        return [
          <div className={styles.twoDeck}></div>,
          <div className={styles.fourDeck1}></div>,
          <div className={styles.fourDeck2}></div>]
        break;

      case 6:
        return [
          <div className={styles.twoDeck}></div>,
          <div className={styles.sixDeck1}></div>,
          <div className={styles.sixDeck2}></div>,
          <div className={styles.sixDeck3}></div>,
          <div className={styles.sixDeck4}></div>]
        break;

      case 8:
        return [
          <div className={styles.twoDeck}></div>,
          <div className={styles.fourDeck1}></div>,
          <div className={styles.fourDeck2}></div>,
          <div className={styles.eightDeck1}></div>,
          <div className={styles.eightDeck2}></div>,
          <div className={styles.eightDeck3}></div>,
          <div className={styles.eightDeck4}></div>]
        break;
      default:
        break;
    }
    // if deckcount = 4
    // show 2 & fourDeck

    // if deckcount = 6
    // show 2d & 6d

    // if deckount = 8
    // show 2d & 6d
  }

  return (

    // First on my feature after released - discart tray

    // <div className={styles.trayContainer}>
    //   <img src={require(`./images/crusher-discard-trey/2d.png`)} alt="discard-tray" className={styles.tray}/>
    // </div>

    <div className={styles.digitalDiscardBorder}>
      <div className={styles.dealtCards} style={{ height: `${pen}%` }}></div>
      {showDeckLine()}
    </div>
  );
}