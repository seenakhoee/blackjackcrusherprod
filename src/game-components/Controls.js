import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom"
import styles from './Controls.module.scss'
const firebase = require("firebase");

export default function Controls(
  { step,
    showSplit,
    WaitingForPlayInput,
    WaitingForInsuranceInput,
    WaitingForNewGameInput,
    toggleStats,
    toggleSettings,
    toggleH17Chart,
    toggleS17Chart,
    toggleH17FlashcardChart,
    toggleBasicStrategyChart,
    allowLateSurrender,
    firstMove,
    toggleInstructions,
    allowDAS,
    fromSplit,
    showDealButton
  }) {

  const history = useHistory()

  function signOut() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      history.push("/")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  function viewAccountSettings() {
    history.push("/update-profile")
  }

  function viewInstructionsAndGuides() {
    history.push("/instructions")
  }

  function checkMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? WaitingForNewGameInput : step;
  }

  return (
    <div className="controls">

      {(step === checkMobile()) && (
        <div className="button-container">
          <Dropdown drop='up'>
            <Dropdown.Toggle variant={'outline-secondary'}>Settings</Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={toggleSettings}>Game Setup</Dropdown.Item>
              <Dropdown.Item onClick={() => history.push("/simulations")}>Card Crusher Simulator</Dropdown.Item>
              <Dropdown.Item href="https://discord.gg/XXNUqhHmAp" target="_blank">Discord Chat</Dropdown.Item>
              <Dropdown.Item onClick={() => viewInstructionsAndGuides()}>Instructions & Guides</Dropdown.Item>
              <Dropdown.Item onClick={() => viewAccountSettings()}>Account Settings</Dropdown.Item>
              <Dropdown.Item onClick={() => signOut()}>Sign Out</Dropdown.Item>
              {/* <Dropdown.Item className="mobileItem" onClick={toggleChart}>Charts</Dropdown.Item> */}
              {/* <Dropdown.Submenu variant="dark"> */}
              {/* TODO - Look Into Submenus */}
              {/* <Dropdown.Item onClick={toggleH17Chart}>H17 + Deviations Chart</Dropdown.Item>
                <Dropdown.Item onClick={toggleS17Chart}>S17 + Deviations Chart </Dropdown.Item>
                <Dropdown.Item onClick={toggleH17FlashcardChart}>Flashcard Chart H17 + Deviation</Dropdown.Item> */}

              {/* </Dropdown.Submenu> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
      {/* {step === WaitingForNewGameInput && (
          <div className="button-container button-container-options">
            <Button variant="outline-secondary" className='marginRight' onClick={toggleSettings} >Settings</Button>
          <Button variant="outline-secondary" onClick={toggleInstructions} >Instructions</Button>
        </div>
      )} */}
      <div className="button-container">
        {((step === WaitingForPlayInput) && fromSplit) && (
          <>
            <button className="customButton hit" data-action="h"><i className="icon-down" data-action="h"></i><span data-action="h">Hit</span></button>
            <button className="customButton stand" data-action="s"><i className="icon-down" data-action="s"></i><span data-action="s">Stand</span></button>
            {allowDAS && (
              <button className="customButton hit" data-action="d"><i className="icon-down" data-action="d"></i><span data-action="d">Double</span></button>
            )}
            {showSplit && (
              <button className="customButton hit" data-action="p"><i className="icon-down" data-action="v"></i><span data-action="v">Split</span></button>
            )}
            {allowLateSurrender && (
              <button className="customButton stand" data-action="r"><i className="icon-down" data-action="r"></i><span data-action="r">Surrender</span></button>
            )}

          </>
        )}
        {((step === WaitingForPlayInput) && !fromSplit) && (
          <>
            <button className="customButton hit" data-action="h"><i className="icon-down" data-action="h"></i><span data-action="h">Hit</span></button>
            <button className="customButton stand" data-action="s"><i className="icon-down" data-action="s"></i><span data-action="s">Stand</span></button>
            {firstMove && (
              <button className="customButton hit" data-action="d"><i className="icon-down" data-action="d"></i><span data-action="d">Double</span></button>
            )}
            {showSplit && (
              <button className="customButton hit" data-action="p"><i className="icon-down" data-action="v"></i><span data-action="v">Split</span></button>
            )}
            {allowLateSurrender && (
              <button className="customButton stand" data-action="r"><i className="icon-down" data-action="r"></i><span data-action="r">Surrender</span></button>
            )}

          </>
        )}
        {step === WaitingForInsuranceInput && (
          <>
            <div>
              <p className={styles.question}>Would you like insurance?</p>
              <div className={styles.questionsContainer}>
                <button className="customButton stand" data-action="n"><i className="icon-down" data-action="n"></i><span data-action="n">No</span></button>
                <button className="customButton hit" data-action="y"><i className="icon-down" data-action="y"></i><span data-action="y">Yes</span></button>
              </div>
            </div>
          </>
        )}
        {showDealButton && (step === WaitingForNewGameInput) && (
          <>
            <button className="customButton deal" data-action="d"><i className="icon-right" data-action="d"></i><span data-action="d">Deal</span></button>
          </>
        )}

      </div>
      {(step === checkMobile()) && (
        <div className="button-container right-side-controls">
          <Button variant="outline-secondary" className="marginRight" onClick={toggleStats}>Stats</Button>
          {/* <Button variant="outline-secondary" className='marginRightMobile' onClick={toggleChart}>Charts</Button> */}
          {/* <Button variant="outline-secondary" className='desktopItem' onClick={toggleChart}>Charts</Button> */}

          <Dropdown drop='up'>
            <Dropdown.Toggle variant={'outline-secondary'}>Charts</Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={toggleBasicStrategyChart}>Basic Strategy</Dropdown.Item>
              <Dropdown.Item onClick={toggleH17Chart}>H17 + Deviations</Dropdown.Item>
              <Dropdown.Item onClick={toggleS17Chart}>S17 + Deviations</Dropdown.Item>
              <Dropdown.Item onClick={toggleH17FlashcardChart}>Flashcard H17 + Deviation</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
    </div>
  );
}

