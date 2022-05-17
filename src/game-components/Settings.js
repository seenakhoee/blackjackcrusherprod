import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { render } from '@testing-library/react';
import { createNewGame } from './GameSetup'
import { GameMode, CountingSystem } from '../game-logic';

// pass in state as props
// set the select as the props

// onChangeUpdate the default values


class Settings extends React.Component<any, any>
{
  constructor(props) {
    super(props);

    this.state = {
      // Illustrious 18 + Fab 4
      checkDeviations: true,

      // Check All Deviations
      checkWongsDeviations: true,

      // Table rules
      mode: GameMode.Default,
      runningCount: 0,

      deviations: 'allDeviations',
      viewKeyboardShortcuts: false,
      spotCount: 1,
      penetration: 0.75,
      countingSystem: CountingSystem.HiLo,
      allowResplitAces: false,

    }
  }

  hanleSubmit = (e) => {
    e.preventDefault();
    let newSettings = {
      checkDeviations: this.state.checkDeviations,
      checkWongsDeviations: this.state.checkWongsDeviations,

      // Table rules
      allowDoubleAfterSplit: this.props.allowDoubleAfterSplit,
      allowLateSurrender: this.props.allowLateSurrender,
      deckCount: this.props.deckCount,
      hitSoft17: this.props.hitSoft17,
      allowResplitAces: this.state.allowResplitAces,

      mode: this.state.mode,
      runningCount: this.state.runningCount,

      // TODO implement multiple spots
      spotCount: this.state.spotCount,

      penetration: this.state.penetration,
      countingSystem: this.state.countingSystem,
      askForCount: this.props.askForCountValue,
    }

    this.props.resetGame(newSettings)
    this.props.toggleSettings();
    // createNewGame(newSettings)
  }

  toggleKeyboardShortcuts = (e) => {
    this.setState({ viewKeyboardShortcuts: !this.state.viewKeyboardShortcuts })
  }

  updatePen = (e) => {
    this.setState({ penetration: JSON.parse(e.target.value) })
  }

  updateRSA = (e) => {
    this.setState({ allowResplitAces: JSON.parse(e.target.value) })
  }

  updateMode = (e) => {
    this.setState({ mode: JSON.parse(e.target.value) })
  }

  updateCountingSystem = (e) => {
    this.setState({ countingSystem: JSON.parse(e.target.value) })
  }

  updateRunningCount = (e) => {
    this.setState({ runningCount: JSON.parse(e.target.value) })
  }

  updateSpotCount = (e) => {
    this.setState({ spotCount: JSON.parse(e.target.value) })
  }

  updateDeviation = (e) => {

    if (e.target.value === 'noDeviations') {
      this.setState({
        checkDeviations: false,
        checkWongsDeviations: false,
        deviations: 'noDeviations',
      })
    }

    if (e.target.value === 'ill18+fab4') {
      this.setState({
        checkDeviations: true,
        checkWongsDeviations: false,
        deviations: 'ill18+fab4',
      })
    }

    if (e.target.value === 'allDeviations') {
      this.setState({
        checkDeviations: true,
        checkWongsDeviations: true,
        deviations: 'allDeviations',
      })
    }
  }

  render() {
    const {
      allowDoubleAfterSplit,
      allowLateSurrender,
      allowResplitAces,
      deckCount,
      hitSoft17,
      mode,
      deviations,
      runningCount,
      viewKeyboardShortcuts,
      spotCount,
      penetration,
      countingSystem,
    } = this.state;

    return (

      <div>
        <div></div>
        <div>
          <>
            <Modal show={this.props.showSettings} onHide={this.props.toggleSettings} backdrop="static">
              <Modal.Header closeButton closeVariant='white'>
                <Modal.Title>Game Setup</Modal.Title>
              </Modal.Header>
              <Form onSubmit={this.hanleSubmit}>
                <Modal.Body>
                  <Row>
                    <Col>
                      <p>Ask For Count Every</p>
                      <Form.Select value={this.props.askForCountValue} onChange={this.props.selectAskForCountPopup} aria-label="Default select example">
                        <option value={0}>End of Shoe</option>
                        <option value={1}>1</option>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>

                      </Form.Select>
                    </Col>
                    <Col>
                      <p>Counting System</p>
                      <Form.Select value={countingSystem} onChange={this.updateCountingSystem} aria-label="Default select example">
                        <option value={0}>HiLo</option>
                        <option disabled value={1}>Zen</option>
                        <option disabled value={2}>Ko</option>
                        <option disabled value={3}>Advanced Omega II</option>
                        <option disabled value={4}>Hi-Opt II</option>

                      </Form.Select>
                    </Col>
                  </Row>
                  <p>Game Rules</p>
                  <Row>
                    <Col>
                      <Form.Select value={this.props.hitSoft17} onChange={this.props.updateHitSoft17} aria-label="Default select example">
                        <option value={true}>H17</option>
                        <option value={false}>S17</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Select value={this.props.deckCount} onChange={this.props.updateDeckCount} aria-label="Default select example">
                        <option value={2}>2 Decks</option>
                        <option value={4}>4 Decks</option>
                        <option value={6}>6 Decks</option>
                        <option value={8}>8 Decks</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select value={this.props.allowDoubleAfterSplit} onChange={this.props.updateAllowDoubleAfterSplit} aria-label="Default select example">
                        <option value={true}>DAS</option>
                        <option value={false}>NDAS</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Select value={this.props.allowLateSurrender} onChange={this.props.updateAllowLateSurrender} aria-label="Default select example">
                        <option value={false}>No Surrender</option>
                        <option value={true}>Surrender</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select value={this.state.allowResplitAces} onChange={this.updateRSA} aria-label="Default select example">
                        <option value={false}>NRSA</option>
                        <option value={true}>RSA</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="statsTitle">Focus Area</p>
                      <Form.Select value={mode} onChange={this.updateMode} aria-label="Default select example">
                        <option value={0}>Default</option>
                        <option value={3}>Illustrious 18</option>
                        <option value={1}>Pairs</option>
                        <option value={4}>Soft Totals</option>
                        <option value={5}>Hard Totals</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <p className="statsTitle">Deviations</p>
                      <Form.Select value={deviations} onChange={this.updateDeviation} aria-label="Default select example">
                        <option value={'noDeviations'}>Basic Strategy</option>
                        <option value={'ill18+fab4'}>Illustrious 18 + Fab 4</option>
                        <option value={'allDeviations'}>All Of Stanford Wongs Deviations</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  {/*
                  TODO will need to touch this up to work corectly
                  Currently the next hand is not correct after split if playing 2 spots

                  <p>Player Spot Count</p>
                  <Form.Select value={spotCount} onChange={this.updateSpotCount} aria-label="Default select example">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </Form.Select> */}
                  <Row>
                    <Col>
                      <p className="statsTitle">How Many Decks Are Delt From The Shoe?</p>
                      <Form.Select value={penetration} onChange={this.updatePen} aria-label="Default select example">
                        <option value={0.87}>87%</option>
                        <option value={0.75}>75%</option>
                        <option value={0.62}>62%</option>
                        <option value={0.50}>50%</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </ Modal.Body>
                <Modal.Body className="keyboardShortcuts">
                  <Button variant="link" onClick={this.toggleKeyboardShortcuts}>
                    View Keyboard Shortcuts
                  </Button>

                  {viewKeyboardShortcuts &&
                    <div>
                      <p>1. Deal (D)</p>
                      <p>2. Hit (H)</p>
                      <p>3. Stand (S)</p>
                      <p>4. Double (D)</p>
                      <p>5. Split (V)</p>
                      <p>6. Surrender (R)</p>
                      <p>7. Insurance Yes (Y)</p>
                      <p>8. Insurance N (N)</p>
                      <p>9. Stats (J)</p>
                      <p>10. Settings (F)</p>
                      <p>11. Instructions (I)</p>
                    </div>
                  }
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" data-action="rg" type="submit">
                    Restart
                  </Button>
                  <Button variant="secondary" onClick={this.props.toggleSettings}>
                    Close
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Settings;
