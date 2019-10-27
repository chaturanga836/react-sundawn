import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftPanal from './LeftPanal/LeftPanal'
const Home = () => {
  return (
    <div>
      <Row>
        <Col sm={3}><LeftPanal/></Col>
        <Col sm={9}>2 of 2</Col>
      </Row>
      </div>
  );
};

export default Home;
