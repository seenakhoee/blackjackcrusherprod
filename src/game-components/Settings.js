import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { render } from '@testing-library/react';
import { createNewGame } from './GameSetup'
import { Game, GameMode, CountingSystem, DeckEstimation } from '../game-logic';
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
      deckEstimation: DeckEstimation.Full,
      onlyDouble911: false,
      koDeviations: false,
    }
  }

  hanleSubmit = (e) => {
    e.preventDefault();
    let newSettings = {
      checkDeviations: this.state.checkDeviations,
      checkWongsDeviations: this.state.checkWongsDeviations,
      koDeviations: this.state.koDeviations,

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
      deckEstimation: this.state.deckEstimation,
      onlyDouble911: this.state.onlyDouble911,
      // passing this property in only for history. For canceling settings
      deviations: this.state.deviations
    }

    this.props.resetGame(newSettings)
    this.props.toggleSettings();
    // createNewGame(newSettings)
  }

  onCancel(props) {
    props.updateDeckCount(props.getSettings().deckCount)
    props.updateHitSoft17(props.getSettings().hitSoft17)
    props.updateAllowDoubleAfterSplit(props.getSettings().allowDoubleAfterSplit)
    props.updateAllowLateSurrender(props.getSettings().allowLateSurrender)

    this.setState({
      ...props.getSettings()
    })

    props.toggleSettings()
  }

  toggleKeyboardShortcuts = (e) => {
    this.setState({ viewKeyboardShortcuts: !this.state.viewKeyboardShortcuts })
  }

  updatePen = (e) => {
    this.setState({ penetration: JSON.parse(e.target.value) })
  }

  updateDeckEstimation = (e) => {
    this.setState({ deckEstimation: JSON.parse(e.target.value) })
  }

  updateOnlyDouble911 = (e) => {
    this.setState({ onlyDouble911: JSON.parse(e.target.value) })
  }

  updateRSA = (e) => {
    this.setState({ allowResplitAces: JSON.parse(e.target.value) })
  }

  updateMode = (e) => {
    this.setState({ mode: JSON.parse(e.target.value) })
  }

  updateCountingSystem = (e) => {
    this.setState({ countingSystem: JSON.parse(e.target.value) })

    if (JSON.parse(e.target.value) === CountingSystem.Ko) {
      this.setState({
        checkDeviations: false,
        checkWongsDeviations: false,
        deviations: 'koDeviations',
        koDeviations: true
      })
    }

    if (JSON.parse(e.target.value) === CountingSystem.Zen) {
      this.setState({
        checkDeviations: false,
        checkWongsDeviations: false,
        deviations: 'basicStrategy',
      })
    }
  }

  updateRunningCount = (e) => {
    this.setState({ runningCount: JSON.parse(e.target.value) })
  }

  updateSpotCount = (e) => {
    this.setState({ spotCount: JSON.parse(e.target.value) })
  }

  updateDeviation = (e) => {

    if (e.target.value === 'koDeviations') {
      this.setState({
        checkDeviations: false,
        checkWongsDeviations: false,
        deviations: 'koDeviations',
        koDeviations: true,

      })
    }

    if (e.target.value === 'basicStrategy') {
      this.setState({
        checkDeviations: false,
        checkWongsDeviations: false,
        deviations: 'basicStrategy',
        koDeviations: false,
      })
    }

    if (e.target.value === 'ill18+fab4') {
      this.setState({
        checkDeviations: true,
        checkWongsDeviations: false,
        deviations: 'ill18+fab4',
        koDeviations: false,
      })
    }

    if (e.target.value === 'allDeviations') {
      this.setState({
        checkDeviations: true,
        checkWongsDeviations: true,
        deviations: 'allDeviations',
        koDeviations: false,
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
              <Modal.Header>
                <Modal.Title>Game Setup</Modal.Title>
              </Modal.Header>
              <Form onSubmit={this.hanleSubmit}>
                <Modal.Body>
                  <Row>
                    <Col>
                      <p>Ask For Count Every</p>
                      <Form.Select value={this.props.askForCountValue} onChange={this.props.selectAskForCountPopup} aria-label="Default select example">
                        {/* <option value={0}>End of Shoe</option> */}
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
                        {/* <option value={1}>Zen</option> */}
                        <option value={2}>Ko</option>
                        {/* <option disabled value={3}>Advanced Omega II</option>
                        <option disabled value={4}>Hi-Opt II</option> */}

                      </Form.Select>
                    </Col>
                  </Row>
                  <p>Game Rules</p>
                  <Row>
                    <Col>
                      <Form.Select value={this.props.hitSoft17} onChange={(e) => this.props.updateHitSoft17(JSON.parse(e.target.value))} aria-label="Default select example">
                        <option value={true}>H17</option>
                        <option value={false}>S17</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        value={this.state.onlyDouble911}
                        onChange={this.updateOnlyDouble911}>
                        <option value={false}>Double All</option>
                        <option value={true}>Only 9-11</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Select value={this.props.deckCount} onChange={(e) => this.props.updateDeckCount(JSON.parse(e.target.value))} aria-label="Default select example">
                        <option value={1}>1 Deck</option>
                        <option value={2}>2 Decks</option>
                        <option value={4}>4 Decks</option>
                        <option value={6}>6 Decks</option>
                        <option value={8}>8 Decks</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        value={this.props.allowDoubleAfterSplit}
                        onChange={(e) => this.props.updateAllowDoubleAfterSplit(JSON.parse(e.target.value))}
                        aria-label="Default select example">
                        <option value={true}>DAS</option>
                        <option value={false}>NDAS</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Select
                        value={this.props.allowLateSurrender}
                        onChange={(e) => this.props.updateAllowLateSurrender(JSON.parse(e.target.value))}
                        aria-label="Default select example">
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
                        {(countingSystem === CountingSystem.HiLo) && <option value={3}>Illustrious 18</option>}
                        <option value={1}>Pairs</option>
                        {(countingSystem === CountingSystem.HiLo) && <option value={4}>Soft Totals</option>}
                        <option value={5}>Hard Totals</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <p className="statsTitle">Deviations</p>
                      <Form.Select
                        value={deviations}
                        onChange={(e) => { this.updateDeviation(e) }}>
                        <option value={'basicStrategy'}>Basic Strategy</option>
                        {(countingSystem === CountingSystem.HiLo) && <option value={'ill18+fab4'}>Illustrious 18 + Fab 4</option>}
                        {(countingSystem === CountingSystem.HiLo) && <option value={'allDeviations'}>Wongs Expanded</option>}
                        {(countingSystem === CountingSystem.Ko) && <option value={'koDeviations'}>Ko</option>}

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
                      <p className="statsTitle">Decks Dealt From The Shoe</p>
                      <Form.Select value={penetration} onChange={this.updatePen} aria-label="Default select example">
                        <option value={0.875}>87.5%</option>
                        <option value={0.75}>75%</option>
                        <option value={0.66}>66%</option>
                        <option value={0.50}>50%</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <p className="statsTitle">Deck Estimation</p>
                      <Form.Select
                        value={this.state.deckEstimation}
                        onChange={this.updateDeckEstimation}>
                        <option value={0}>Full Deck</option>
                        <option value={1}>Half Deck</option>
                        <option value={2}>Quarter Deck</option>
                        <option value={3}>Exact</option>
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
                  <Button variant="secondary" onClick={() => this.onCancel(this.props)}>
                    Cancel
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
