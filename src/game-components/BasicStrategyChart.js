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
          {this.renderSquare('Y', 'greenSquare')}
        </div>
        <div className="board-row">
          {this.renderSquare('T,T')}
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
          {this.renderSquare('9,9')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('N')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
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
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
        </div>
        <div className="board-row">
          {this.renderSquare('7,7')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
        </div>
        <div className="board-row">
          {this.renderSquare('6,6')}
          {this.renderSquare('Y/N', 'turquoiseSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
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
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('Y/N', 'turquoiseSquare')}
          {this.renderSquare('Y/N', 'turquoiseSquare')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
        </div>
        <div className="board-row">
          {this.renderSquare('3,3')}
          {this.renderSquare('Y/N', 'turquoiseSquare')}
          {this.renderSquare('Y/N', 'turquoiseSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
          {this.renderSquare('N')}
        </div>
        <div className="board-row">
          {this.renderSquare('2,2')}
          {this.renderSquare('Y/N', 'turquoiseSquare')}
          {this.renderSquare('Y/N', 'turquoiseSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('Y', 'greenSquare')}
          {this.renderSquare('N')}
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
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
        </div>
        <div className="board-row">
          {this.renderSquare('A,9')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
        </div>
        <div className="board-row">
          {this.renderSquare('A,8')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('Ds', 'turquoiseSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
        </div>
        <div className="board-row">
          {this.renderSquare('A,7')}
          {this.renderSquare('Ds', 'turquoiseSquare')}
          {this.renderSquare('Ds', 'turquoiseSquare')}
          {this.renderSquare('Ds', 'turquoiseSquare')}
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
          {this.renderSquare('H')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
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
          {this.renderSquare('H')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
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
          {this.renderSquare('H')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
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
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
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
          {this.renderSquare('S', 'yellowSquare')}
        </div>
        <div className="board-row">
          {this.renderSquare('16')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquare('15')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquare('14')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquare('13')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquare('12')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
          {this.renderSquare('S', 'yellowSquare')}
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
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
        </div>
        <div className="board-row">
          {this.renderSquare('10')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquare('9')}
          {this.renderSquare('H')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquare('8')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
          {this.renderSquare('H')}
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
          {this.renderSquare('H')}
          {this.renderSquare('H')}
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
          {this.renderSquare('16')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('SUR', 'greenSquare')}
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
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('SUR', 'greenSquare')}
          {this.renderSquare('', '')}
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
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
          {this.renderSquare('', '')}
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

const BasicStrategyChart: any = ({ toggleBasicStrategyChart, openBasicStrategyChart }) => {

  return (

    <div>
      <div></div>
      <div>
        <>

          <Modal show={openBasicStrategyChart} onHide={toggleBasicStrategyChart}>
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
                <Button variant="outline-light" onClick={toggleBasicStrategyChart}>
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

export default BasicStrategyChart;