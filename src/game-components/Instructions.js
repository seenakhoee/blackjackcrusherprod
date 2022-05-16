import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const Instructions: any = ({showInstructions, toggleInstructions}) => {

    return (
      <div>
        <Modal show={showInstructions} onHide={toggleInstructions}>
          <Modal.Header closeButton closeVariant='white'>
            <Modal.Title>Instructions</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <Row>
                <div style={{textAlign:'center'}}>
                  <p>Pages to links below coming soon!</p>
                </div>
              </Row>
            <Row>
              <Button variant="link">
                How to play blackjack
              </Button>
            </Row>
            <Row>
              <Button variant="link">
                Why card counting works
              </Button>
            </Row>
            <Row>
              <Button variant="link">
                How to count cards
              </Button>
            </Row>
            <Row>
              <Button variant="link">
                How much money can you make
              </Button>
            </Row>
            <Row>
              <Button variant="link">
                How to use this app
              </Button>
            </Row>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
      </div>
    );
}

export default Instructions;