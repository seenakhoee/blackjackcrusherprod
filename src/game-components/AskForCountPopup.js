import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from './AskForCountPopup.module.scss'
import { game } from '../game-components/GameSetup';
import { Event } from "../game-logic";

export default function AskForCountPopup({ askForCountValue, round, step, hiLoTrueCount, correctTCInput, showCountPopup }) {

  const [showAskForCountPopup, setShowAskForCountPopup] = useState(showCountPopup);
  const [userTCInput, setUserTCInput] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const matched = useRef(false)
  const userInputRef = useRef('')

  useEffect(() => {
    if (showCountPopup) {
      setShowAskForCountPopup(true)
    } else {
      setShowAskForCountPopup(false)
    }
  }, [showCountPopup])

  useEffect(() => {
    document.body.addEventListener('keypress', toggleModalKeyPress);

    if (showAskForCountPopup) {
      userInputRef.current.focus()
    }

    return () => {
      document.body.removeEventListener('keypress', toggleModalKeyPress);
    }
  }, [showAskForCountPopup]);

  function showModal(show) {
    return !show ? styles.hideModal : ''
  }

  function toggleModalKeyPress(e) {
    //key code for enter - closing the error module
    if (e.keyCode === 13) {
      if (showErrorModal) {
        closeErrorModal()
        return;
      }
      if (showAskForCountPopup) {
        onSubmitCount()
      }
    }
  }

  function closeErrorModal() {
    setShowErrorModal(false)
    setUserTCInput('')
  }

  function checkUserTrueCount() {
    if (hiLoTrueCount === parseInt(userInputRef.current.value)) {
      correctTCInput(true, hiLoTrueCount, parseInt(userInputRef.current.value))
      setUserTCInput('')
      return;
    }
    correctTCInput(false, hiLoTrueCount, parseInt(userInputRef.current.value))
    setShowErrorModal(true)
  }

  function onSubmitCount() {
    checkUserTrueCount()
    setShowAskForCountPopup(false)

    game.state.userInputTC = true;
    showCountPopup = false;
    game.emit(Event.UserInput, 'showCountPopup', showCountPopup)
  };

  return (
    <>
      <div className={`${styles.backDrop} ${showModal(showErrorModal)}`}></div>
      <div className={`${styles.backDrop} ${showModal(showAskForCountPopup)}`}></div>
      <div className={`${styles.gameModal} ${showModal(showAskForCountPopup)}`}>
        {/* <h2>Enter True Count</h2> */}
        <input type="number"
          className={`form__input ${styles.inputTC}`}
          ref={userInputRef}
          value={userTCInput}
          onChange={e => setUserTCInput(e.target.value)}
          placeholder="Enter True Count"
          required
        />
        <button
          onClick={onSubmitCount}
          className={`${styles.btn} ${styles.btnGreen}`}>Submit</button>
      </div>

      <div className={`${styles.gameModal} ${showModal(showErrorModal)}`}>
        <h2 className={styles.modalHeader}>Wrong</h2>
        <p>Your Answer: {userInputRef.current.value}</p>
        <p>Current True Count: {hiLoTrueCount} </p>
        <button
          onClick={() => closeErrorModal()}
          className={`${styles.btn} ${styles.btnGreen} ${styles.btnDismiss}`}>Dismiss</button>
      </div>
    </>
  )
}
