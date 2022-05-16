import React, { useState, useEffect } from 'react';
import styles from './DiscardTray.module.scss'

export default function DiscardTray({ cards, currentPen, step }) {
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

  return (

    // First on my feature after released - discart tray

    // <div className={styles.trayContainer}>
    //   <img src={require(`./images/crusher-discard-trey/2d.png`)} alt="discard-tray" className={styles.tray}/>
    // </div>

    <div className={styles.digitalDiscardBorder}>
      <div className={styles.deltCards} style={{ height: `${pen}%` }}></div>
      <div className={styles.halfMarker}></div>
    </div>
  );
}