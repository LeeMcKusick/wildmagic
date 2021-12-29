import React from 'react'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


function TableItem(props) {
  return <tr><td><p>{props.roll+1}: {props.value}</p></td></tr>;
}

function OptionsList(props) {
  const options = props.options;
  return (
    <Table>
      {options.map((item, index) =>
        <TableItem value={item} key={index} roll={index} />
      )}
    </Table>
  );
}

export default function WildSurge(props) {

  const { surge, generateRandomSurge, chooseSource } = props;

  return (
      <Container>
        <Container>
          <Row id="sourceRow">
            <Col>
              <Form.Control as='select' onChange={(evt) => { chooseSource(evt.target.value) }}>
                <option disabled>Sorcerer</option>
                <option value="phbSurges">&nbsp;&nbsp;Player's Handbook Wild Magic Sorcerer Table</option>
                <option value="uad100WildMagicTable">&nbsp;&nbsp;Homebrew - Extended d100 Wild Magic Sorcerer Table - /u/Ptyalin</option>
                <option value="d100pyromancy">&nbsp;&nbsp;Homebrew - Pyromancy - /u/GoblinSupplements</option>
                <option value="ravenloft">&nbsp;&nbsp;Homebrew - 50 Ravenloft / Horror Surges</option>
                <option disabled>Barbarian</option>
                <option value="tcoeBarbarian">&nbsp;&nbsp;Tasha's Couldron of Everything - Path of Wild Magic Barbarian</option>
                <option value="homebrewPathOfWildMagic">&nbsp;&nbsp; Homebrew - d13 Path of Wild Magic Barbarian</option>
                <option value="homebrewPathofChaosWildMagic">&nbsp;&nbsp;Homebrew - d20 Path of Chaotic Wild Magic Barbarian</option>

              </Form.Control>
            </Col>
          </Row>
          <Row id="surgeRow">
            <Col>
              <Button onClick={() => { generateRandomSurge(surge.surgeTable); }} size="lg" type="submit">SURGE!</Button>
            </Col>
          </Row>
          <hr/>
          <Jumbotron>
            <h2>{surge.surge}</h2>
          </Jumbotron>
        </Container>

        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Available Options
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <OptionsList options={surge.surgeTable}></OptionsList>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
      </Container>
  );
}
