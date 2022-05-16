import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BasicStrategyChecker from '../game-logic/basic-strategy-checker';
import { render } from '@testing-library/react';

class Stats extends React.Component<any, any>
{
  constructor(props) {
    super(props);

    this.state = {
      updatePlayerMistake: this.props.updatePlayerMistake
    }
  }

  // const Stats: any = ({ stats, sessionMovesCorrect, sessionMovesTotal, toggleStats, showStats, playerMistakes, playerMistake}) => {

  //   function listOfMistakes(playerMistakes) {
  //     return playerMistakes.map((mistake, i) => {
  //       return <li>{`${i + 1}. ${mistake}`}</li>
  //     })
  //   }
  componentWillUnmount() {
    this.state.updatePlayerMistake()
  }

  listOfMistakes(playerMistakes) {
    return playerMistakes.map((mistake, i) => {
      return <li>{`${i + 1}. ${mistake}`}</li>
    })
  }

  render() {
    const {
      stats,
      sessionMovesCorrect,
      sessionMovesTotal,
      toggleStats,
      showStats,
      playerMistakes,
      playerMistake,
      totalCountingDecisions,
      correctCountingDecisions
    } = this.props

    let totalMoves = sessionMovesTotal + totalCountingDecisions
    let totalCorrect = correctCountingDecisions + sessionMovesCorrect
    let totalMistakes = totalMoves - totalCorrect
    let playingMistake = sessionMovesTotal - sessionMovesCorrect
    let countingMistake = totalCountingDecisions - correctCountingDecisions

    return (

      <div>
        <Modal className='stats' show={showStats} onHide={toggleStats}>
          <Modal.Header variant="outline-secondary" closeButton closeVariant='white'>
            <Modal.Title>Stats</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Running Count : {stats.runningCount}</p>
            <p>True Count : {stats.hiLoTrueCount}</p>
            <p>1. Total Moves : {totalMoves}</p>
            <p>2. Total Correct Moves : {totalCorrect}</p>
            <p>3. Total Mistakes : {totalMistakes}</p>
            <p>4. Playing Mistake : {playingMistake}</p>
            <p>5. Counting Mistake : {countingMistake}</p>


          </Modal.Body>

          {playerMistake &&
            <div className="currentMistake">
              <Modal.Body>
                <Modal.Title>Current Mistake</Modal.Title>
                <p>{playerMistake}</p>
              </Modal.Body>
            </div>
          }

          {(playerMistakes.length > 0 && !playerMistake) &&
            <div className="currentMistake">
              <Modal.Body>
                <Modal.Title>List of Mistakes</Modal.Title>
                <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
                  {/* <div className="currentMistake"> */}
                  {this.listOfMistakes(playerMistakes)}
                  {/* </div> */}
                </ul>
              </Modal.Body>
            </div>
          }
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={toggleStats}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Stats;
