import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSquare : false
    }
  }

  showSquare(){
    this.setState({
      showSquare: !this.state.showSquare
    })
  }

  rSquare() {
    if (this.state.showSquare) {
        return <button className={`square ${this.props.color}`} onClick={() => this.showSquare()}>{this.props.value}</button>
      } else {
        return <button className={`square`} onClick={() => this.showSquare()}></button>
      }
  }

  render() {
    return (
      this.rSquare()
    )
  }
}

class PairSplitting extends React.Component {
  renderSquareShow(props) {
    return (
      <SquareRequired value={props} />
    );
  }
  renderSquare(props, color) {
    return (
      <Square value={props} color={color}/>
    );
  }
  render() {
    return (
    <div className="all-board-rows">
      <div className="board-row">
        {this.renderSquare()}
        {this.renderSquareShow('2')}
        {this.renderSquareShow('3')}
        {this.renderSquareShow('4')}
        {this.renderSquareShow('5')}
        {this.renderSquareShow('6')}
        {this.renderSquareShow('7')}
        {this.renderSquareShow('8')}
        {this.renderSquareShow('9')}
        {this.renderSquareShow('T')}
        {this.renderSquareShow('A')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('A,A')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('-4-', 'greenSquare')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('T,T')}
        {this.renderSquare('10+')}
        {this.renderSquare('8+')}
        {this.renderSquare('6+')}
        {this.renderSquare('5+')}
        {this.renderSquare('4+')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('9,9')}
        {this.renderSquare('-2-','greenSquare')}
        {this.renderSquare('-4-', 'greenSquare')}
        {this.renderSquare('-5-', 'greenSquare')}
        {this.renderSquare('-6-', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('3+/7+')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('N')}
        {this.renderSquare('2+/3+')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('8,8')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('8+/5+', 'greenSquare')}
        {this.renderSquare('-1-', 'greenSquare')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('7,7')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('4+/N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('6,6')}
        {this.renderSquare('-2-/1+', 'turquoiseSquare')}
        {this.renderSquare('-4-', 'greenSquare')}
        {this.renderSquare('-6-', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('5,5')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('4,4')}
        {this.renderSquare('N')}
        {this.renderSquare('7+/N')}
        {this.renderSquare('3+/N')}
        {this.renderSquare('-1-/N', 'turquoiseSquare')}
        {this.renderSquare('-5-/N', 'turquoiseSquare')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('3,3')}
        {this.renderSquare('0/8+', 'turquoiseSquare')}
        {this.renderSquare('-3-/3+', 'turquoiseSquare')}
        {this.renderSquare('-2-', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('5+/N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
      </div>
      <div className="board-row">
        {this.renderSquareShow('2,2')}
        {this.renderSquare('Y/7+', 'turquoiseSquare')}
        {this.renderSquare('Y/3+', 'turquoiseSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('Y', 'greenSquare')}
        {this.renderSquare('5+/N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
        {this.renderSquare('N')}
      </div>
    </div>
    );
  }
}

function SquareRequired(props) {
  return (
    <button className={`square`}>
      {props.value}
    </button>
  );
}


class SoftTotals extends React.Component {
  renderSquareShow(props) {
    return (
      <SquareRequired value={props} />
    );
  }

  renderSquare(props, color) {
    return (
      <Square value={props} color={color} />
    );
  }
  render() {
    return (
      <div className="all-board-rows">
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquareShow('2')}
          {this.renderSquareShow('3')}
          {this.renderSquareShow('4')}
          {this.renderSquareShow('5')}
          {this.renderSquareShow('6')}
          {this.renderSquareShow('7')}
          {this.renderSquareShow('8')}
          {this.renderSquareShow('9')}
          {this.renderSquareShow('T')}
          {this.renderSquareShow('A')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,10')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('10+', 'yellowSquare')}
          {this.renderSquare('8+', 'yellowSquare')}
          {this.renderSquare('7+', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,9')}
          {this.renderSquare('10+', 'yellowSquare')}
          {this.renderSquare('8+', 'yellowSquare')}
          {this.renderSquare('6+', 'yellowSquare')}
          {this.renderSquare('5+', 'yellowSquare')}
          {this.renderSquare('4+', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,8')}
          {this.renderSquare('8+', 'yellowSquare')}
          {this.renderSquare('5+', 'yellowSquare')}
          {this.renderSquare('3+', 'yellowSquare')}
          {this.renderSquare('1+', 'yellowSquare')}
          {this.renderSquare('0-', 'turquoiseSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,7')}
          {this.renderSquare('0', 'turquoiseSquare')}
          {this.renderSquare('-2-', 'turquoiseSquare')}
          {this.renderSquare('-6-', 'turquoiseSquare')}
          {this.renderSquare('Ds', 'turquoiseSquare')}
          {this.renderSquare('Ds', 'turquoiseSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,6')}
          {this.renderSquare('1+')}
          {this.renderSquare('-3-', 'greenSquare')}
          {this.renderSquare('-7-', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,5')}
          {this.renderSquare('H')}
          {this.renderSquare('4+')}
          {this.renderSquare('-3-', 'greenSquare')}
          {this.renderSquare('-6-', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,4')}
          {this.renderSquare('H')}
          {this.renderSquare('7+')}
          {this.renderSquare('0', 'greenSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,3')}
          {this.renderSquare('H')}
          {this.renderSquare('7+')}
          {this.renderSquare('2+')}
          {this.renderSquare('-1-', 'greenSquare')}
          {this.renderSquare('-5-', 'greenSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('A,2')}
          {this.renderSquare('12+')}
          {this.renderSquare('7+')}
          {this.renderSquare('3+')}
          {this.renderSquare('0', 'greenSquare')}
          {this.renderSquare('-2-', 'greenSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
      </div>
    );
  }
}

class HardTotals extends React.Component {


  renderSquare(props, color) {
    return (
      <Square value={props} color={color} />
    );
  }

  renderSquareShow(props) {
    return (
      <SquareRequired value={props} />
    );
  }

  render() {
    return (
      <div className="all-board-rows">
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquareShow('2')}
          {this.renderSquareShow('3')}
          {this.renderSquareShow('4')}
          {this.renderSquareShow('5')}
          {this.renderSquareShow('6')}
          {this.renderSquareShow('7')}
          {this.renderSquareShow('8')}
          {this.renderSquareShow('9')}
          {this.renderSquareShow('T')}
          {this.renderSquareShow('A')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('17')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('-6-', 'yellowSquare')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('16')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('8+')}
          {this.renderSquare('7+')}
          {this.renderSquare('4+')}
          {this.renderSquare('0+')}
          {this.renderSquare('3+')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('15')}
          {this.renderSquare('-5-', 'yellowSquare')}
          {this.renderSquare('-7-', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('11+')}
          {this.renderSquare('10+')}
          {this.renderSquare('8+')}
          {this.renderSquare('4+')}
          {this.renderSquare('5+')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('14')}
          {this.renderSquare('-3-', 'yellowSquare')}
          {this.renderSquare('-5-', 'yellowSquare')}
          {this.renderSquare('-6-', 'yellowSquare')}
          {this.renderSquare('-7-', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('10+')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('13')}
          {this.renderSquare('-1-', 'yellowSquare')}
          {this.renderSquare('-2-', 'yellowSquare')}
          {this.renderSquare('-3-', 'yellowSquare')}
          {this.renderSquare('-4-', 'yellowSquare')}
          {this.renderSquare('-7-', 'yellowSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('12')}
          {this.renderSquare('+3')}
          {this.renderSquare('+2')}
          {this.renderSquare('0-', 'yellowSquare')}
          {this.renderSquare('-2-', 'yellowSquare')}
          {this.renderSquare('-3-', 'yellowSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('11')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('-1-', 'greenSquare')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('10')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('-1-', 'greenSquare')}
          {this.renderSquare('4+')}
          {this.renderSquare('3+')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('9')}
          {this.renderSquare('1+')}
          {this.renderSquare('0', 'greenSquare')}
          {this.renderSquare('-2-', 'greenSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('-6-', 'greenSquare')}
          {this.renderSquare('3+')}
          {this.renderSquare('7+')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('8')}
          {this.renderSquare('15+')}
          {this.renderSquare('9+')}
          {this.renderSquare('6+')}
          {this.renderSquare('4+')}
          {this.renderSquare('2+')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('7')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('10+')}
          {this.renderSquare('9+')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
      </div>
    );
  }
}

class LateSurrender extends React.Component {
  renderSquare(props, color) {
    return (
      <Square value={props} color={color} />
    );
  }

  renderSquareShow(props) {
    return (
      <SquareRequired value={props} />
    );
  }

  render() {
    return (
      <div className="all-board-rows">
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquareShow('2')}
          {this.renderSquareShow('3')}
          {this.renderSquareShow('4')}
          {this.renderSquareShow('5')}
          {this.renderSquareShow('6')}
          {this.renderSquareShow('7')}
          {this.renderSquareShow('8')}
          {this.renderSquareShow('9')}
          {this.renderSquareShow('T')}
          {this.renderSquareShow('A')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('17')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('SUR', 'greenSquare')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('16')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('4+', '')}
          {this.renderSquare('-1-', 'greenSquare')}
          {this.renderSquare('SUR', 'greenSquare')}
          {this.renderSquare('SUR', 'greenSquare')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('15')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('7+', '')}
          {this.renderSquare('2+', '')}
          {this.renderSquare('0-', 'greenSquare')}
          {this.renderSquare('-1+', '')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('14')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('6+', '')}
          {this.renderSquare('4+', '')}
          {this.renderSquare('4+', '')}
        </div>
        <div className="board-row">
          {this.renderSquareShow('8,8')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('1+', '')}
          {this.renderSquare('SUR', 'greenSquare')}
        </div>
      </div>
    );
  }
}
class Board extends React.Component {
  render() {
    return (
      <div>
        Pair Splitting
        <PairSplitting />
        {/* Pair Splitting Key
        <PairSplittingKey /> */}
        Soft Totals
        <SoftTotals />
        Hard Totals
        <HardTotals />
        Late Surrender
        <LateSurrender />
      </div>
    );
  }
}

const H17FlashcardChart: any = ({ showChart, toggleH17FlashcardChart, openH17, showS17}) => {

  return (

    <div>
      <div></div>
      <div>
        <>

          <Modal show={showChart} onHide={toggleH17FlashcardChart}>
            <div>
              <Modal.Header closeButton closeVariant='white'>
                <Modal.Title>Flashcard Chart H17 DD & 6D</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="game">
                  <div className="game-board">
                    <Board />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-light" onClick={toggleH17FlashcardChart}>
                  Close
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </>
      </div>
      <div></div>
    </div>
  );
}

export default H17FlashcardChart;
