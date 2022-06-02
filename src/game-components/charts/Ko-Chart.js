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

class HardTotals extends React.Component {

  /* category B
  16 vs 10

  category C
  13 vs 2
  13 vs 3
  12 vs 4
  12 vs 5
  12 vs 6

  */

  constructor(props) {
    super(props)
    this.state = {
      deckCount: this.props.deckCount,
      categoryB: '',
      categoryC: ''
    }
  }

  componentDidMount() {
    this.categoryB()
    this.categoryC()
  }

  categoryB() {
    switch (this.state.deckCount) {
      case 1:
        this.setState({ categoryB: '+2' })
        break;

      case 2:
        this.setState({ categoryB: '+1' })
        break;

      case 4:
        this.setState({ categoryB: '-4' })
        break;

      case 6:
        this.setState({ categoryB: '-4' })
        break;

      case 8:
        this.setState({ categoryB: '-6' })
        break;
    }
  }

  categoryC() {
    switch (this.state.deckCount) {
      case 1:
        this.setState({ categoryC: '0' })
        break;

      case 2:
        this.setState({ categoryC: '-4' })
        break;
      default:
        this.setState({ categoryC: 'S' })
        break;
    }
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
          {this.renderSquare('+4')}
          {this.renderSquare(this.state.categoryB)}
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
          {this.renderSquare('+4')}
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
          {this.renderSquare(this.state.categoryC, 'yellowSquare')}
          {this.renderSquare(this.state.categoryC, 'yellowSquare')}
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
          {this.renderSquare('+4')}
          {this.renderSquare('+4')}
          {this.renderSquare(this.state.categoryC, 'yellowSquare')}
          {this.renderSquare(this.state.categoryC, 'yellowSquare')}
          {this.renderSquare(this.state.categoryC, 'yellowSquare')}
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
          {this.renderSquare('+4')}
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
          {this.renderSquare('+4')}
          {this.renderSquare('H')}
        </div>
        <div className="board-row">
          {this.renderSquare('9')}
          {this.renderSquare('+4')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('D', 'greenSquare')}
          {this.renderSquare('+4')}
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
          {this.renderSquare('+4')}
          {this.renderSquare('+4')}
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
        Hard Totals
        <HardTotals deckCount={this.props.deckCount} />
        Soft Totals
        <SoftTotals />
        Pair Splitting
        <PairSplitting />
        {/* Pair Splitting Key
        <PairSplittingKey /> */}
        Late Surrender
        <LateSurrender />
      </div>
    );
  }
}

const KOChart: any = ({ toggleKoChart, openKoChart, deckCount }) => {

  return (

    <div>
      <div></div>
      <div>
        <>

          <Modal show={openKoChart} onHide={toggleKoChart}>
            <div>
              <Modal.Header closeButton closeVariant='white'>
                <Modal.Title>KO Deviation Chart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="game">
                  <div className="game-board">
                    <Board deckCount={deckCount} />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-light" onClick={toggleKoChart}>
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

export default KOChart;