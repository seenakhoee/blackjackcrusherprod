import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from './RCWithDeck.module.scss'

export default function RCWithDeck({ runningCount, deckCount, round, step }) {
  return (
    <>
      <div className={styles.RCwithDeckContainer}>
        <p>Running count is {runningCount}</p>
        <p>{deckCount} Decks remaining</p>
        <p>What is the correct play? </p>
      </div>
    </>
  )
}
