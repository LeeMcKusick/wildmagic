import React from 'react'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function WildSurge(props) {

  const { surge, generateRandomSurge, chooseSource } = props;

  return (
      <Container>
        <Container>
          <hr/>
          <Row>
            <Col>
              <Form.Control as='select' onChange={(evt) => { chooseSource(evt.target.value) }}>
                <option value="phbSurges">Player's Handbook Wild Magic Sorcerer Table</option>
                <option value="tcoeBarbarian">Tasha's Couldron of Everything - Path of Wild Magic Barbarian</option>
                <option value="uad100WildMagicTable">Homebrew - Extended d100 Wild Magic Table - /u/Ptyalin</option>
                <option value="homebrewPathOfWildMagic">Homebrew - d13 Path of Wild Magic Barbarian</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => { generateRandomSurge(surge.surgeTable); }} size="lg" type="submit">SURGE!</Button>
            </Col>
          </Row>
          <hr/>
          <Jumbotron>
            <h2>{surge.surge}</h2>
          </Jumbotron>
        </Container>
      </Container>
  );
}
