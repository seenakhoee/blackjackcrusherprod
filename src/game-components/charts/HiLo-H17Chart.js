import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Square(props) {
  return (
    <button className={`square ${props.color}`}>
      {props.value}
    </button>
  );
}

class PairSplitting extends React.Component {
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
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderSquare('T')}
          {this.renderSquare('A')}
        </div>
        <div className="board-row">
          {this.renderSquare('A,A')}
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
          {this.renderSquare('T,T')}
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
          {this.renderSquare('9,9')}
          {this.renderSquare('-2-', 'greenSquare')}
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
          {this.renderSquare('8,8')}
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
          {this.renderSquare('7,7')}
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
          {this.renderSquare('6,6')}
          {this.renderSquare('-2-/1+', 'turquoiseSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('-6-', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('N', '')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
        </div>
        <div className="board-row">
          {this.renderSquare('5,5')}
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
          {this.renderSquare('4,4')}
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
          {this.renderSquare('3,3')}
          {this.renderSquare('-0/8+', 'turquoiseSquare')}
          {this.renderSquare('-3-/3+', 'turquoiseSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('5+/N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
        </div>
        <div className="board-row">
          {this.renderSquare('2,2')}
          {this.renderSquare('-2-/7+', 'turquoiseSquare')}
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

// class PairSplittingKey extends React.Component {
//   renderSquare(props, color) {
//     return (
//       <Square value={props} color={color} />
//     );
//   }
//   render() {
//     return (
//       <div className="all-board-rows">
//         <div className="board-row">
//           {this.renderSquare('KEY')}
//           {this.renderSquare('')}
//           {this.renderSquare('')}
//         </div>
//         <div className="board-row">
//           {this.renderSquare('Y', 'greenSquare')}
//           {this.renderSquare('Y/N', 'turquoiseSquare')}
//           {this.renderSquare('N', '')}
//         </div>
//         <div className="board-row">
//           {this.renderSquare('Split the Pair')}
//           {this.renderSquare("Split if 'Double After Split (DAS)' is offered, otherwise do not split")}
//           {this.renderSquare("Don't Split the Pair")}
//         </div>
//       </div>
//     );
//   }
// }

class SoftTotals extends React.Component {
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
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderSquare('T')}
          {this.renderSquare('A')}
        </div>
        <div className="board-row">
          {this.renderSquare('A,10')}
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
          {this.renderSquare('A,9')}
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
          {this.renderSquare('A,8')}
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
          {this.renderSquare('A,7')}
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
          {this.renderSquare('A,6')}
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
          {this.renderSquare('A,5')}
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
          {this.renderSquare('A,4')}
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
          {this.renderSquare('A,3')}
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
          {this.renderSquare('A,2')}
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
  render() {
    return (
      <div className="all-board-rows">
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderSquare('T')}
          {this.renderSquare('A')}
        </div>
        <div className="board-row">
          {this.renderSquare('17')}
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
          {this.renderSquare('16')}
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
          {this.renderSquare('15')}
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
          {this.renderSquare('14')}
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
          {this.renderSquare('13')}
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
          {this.renderSquare('12')}
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
          {this.renderSquare('11')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('-6-', 'greenSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('-1-', 'greenSquare')}
        </div>
        <div className="board-row">
          {this.renderSquare('10')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('-6-', 'greenSquare')}
          {this.renderSquare('-4-', 'greenSquare')}
          {this.renderSquare('-1-', 'greenSquare')}
          {this.renderSquare('4+')}
          {this.renderSquare('3+')}
        </div>
        <div className="board-row">
          {this.renderSquare('9')}
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
          {this.renderSquare('8')}
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
          {this.renderSquare('7')}
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
  render() {
    return (
      <div className="all-board-rows">
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderSquare('T')}
          {this.renderSquare('A')}
        </div>
        <div className="board-row">
          {this.renderSquare('17')}
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
          {this.renderSquare('16')}
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
          {this.renderSquare('15')}
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
          {this.renderSquare('14')}
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
          {this.renderSquare('8,8')}
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
        Hard Totals
        <HardTotals />
        {/* Pair Splitting Key
        <PairSplittingKey /> */}
        Soft Totals
        <SoftTotals />
        Pair Splitting
        <PairSplitting />
        Late Surrender
        <LateSurrender />
      </div>
    );
  }
}

const H17Chart: any = ({ toggleH17Chart, openH17 }) => {

  return (

    <div>
      <div></div>
      <div>
        <>

          <Modal show={openH17} onHide={toggleH17Chart}>
            <div>
              <Modal.Header closeButton closeVariant='white'>
                <Modal.Title>Deviation Chart H17 DD & 6D</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="game">
                  <div className="game-board">
                    <Board />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-light" onClick={toggleH17Chart}>
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

export default H17Chart;