import React, { Component } from 'react';

import './App.css';

//Sorcerer
import phbSurges from './surgeTables/sorcerer/phbWildMagicTable';
import uad100WildMagicTable from './surgeTables/sorcerer/uad100WildMagicTable';
import ravenloft from './surgeTables/sorcerer/ravenloft';
import d100pyromancy from './surgeTables/sorcerer/d100pyromancy';
import d100cryomancy from './surgeTables/sorcerer/d100cryomancy';
import d100feyblood from './surgeTables/sorcerer/d100feyblood';
import allInOne from './surgeTables/sorcerer/allInOne';

//Barbarian
import tcoeBarbarian from './surgeTables/barbarian/tcoeBarbarian';
import homebrewPathOfWildMagic from './surgeTables/barbarian/homebrewPathOfWildMagic';
import homebrewPathofChaosWildMagic from './surgeTables/barbarian/homebrewPathofChaosWildMagic';

import WildSurge from './components/WildSurge';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class App extends Component {

  state = {
    surge: "Wild Magic is unpredictable...",
    source: 'phb',
    surgeTable: phbSurges
  }

  surgeList = {
    "phbSurges": phbSurges,
    "tcoeBarbarian": tcoeBarbarian,
    "homebrewPathOfWildMagic": homebrewPathOfWildMagic,
    "uad100WildMagicTable": uad100WildMagicTable,
    "homebrewPathofChaosWildMagic": homebrewPathofChaosWildMagic,
    "ravenloft": ravenloft,
    "d100pyromancy": d100pyromancy,
    "d100cryomancy": d100cryomancy,
    "d100feyblood": d100feyblood,
    "allInOne": allInOne
  }

  roll = (max) => {
      return Math.floor(Math.random() * max);
  };

  rollMulti = (die, num) => {
      let total = 0;
      for( let i=0; i < num; i++) {
          total += this.roll(die);
      }
      return total;
  }

  generateRandomSurge = (arr) => {
    let num = this.roll(this.state.surgeTable.length);
    let newSurge = this.state.surgeTable[num];

    this.setState({
      surge: newSurge
    });

    this.shuffleSurges(this.state.surgeTable);
  }

  shuffleSurges = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  chooseSource = (source) => {
    //alert(source);
    this.setState({
      surgeTable: this.surgeList[source]
    });
  }

  render() {
    return (
      <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/d20.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Wild Magic!
        </Navbar.Brand>
      </Navbar>
        <section id="main">

            <WildSurge
               generateRandomSurge={this.generateRandomSurge}
               chooseSource={this.chooseSource}
               surge={this.state}
            />

        </section>
          <Navbar fixed="bottom" bg="dark" variant='dark'>
                <Container>
                  <Row>
                    <Col>
                      <Navbar.Brand>Made by Lee Skellington-McKusick</Navbar.Brand>
                    </Col>
                    <Col>
                      <Navbar.Brand><a href='https://ko-fi.com/B0B31QB1X' target='_blank' rel="noopener noreferrer"><img height='36' style={{border: '0px', height:'36px'}} src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a></Navbar.Brand>
                    </Col>
                    <Col>
                      <Navbar.Brand><Button href="https://github.com/LeeMcKusick/wildmagic" target="_new">View on Github</Button></Navbar.Brand>
                    </Col>
                  </Row>
                </Container>
                </Navbar>
      </div>
    );
  }
}
