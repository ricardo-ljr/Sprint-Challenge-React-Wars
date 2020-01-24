import React from "react";
import "./StarWars.css";
import { Container, Row, Col } from "reactstrap";

const Card = ({ chars }) => {
  return (
    <Col>
      <div>
        <h1>{chars.name}</h1>
        <p>
          sex:
          {chars.gender}
        </p>
        <p>
          birth year:
          {chars.birth_year}
        </p>
        <p>
          eye color:
          {chars.eye_color}
        </p>
        <p>
          height:
          {chars.height}
        </p>
      </div>
    </Col>
  );
};

export default Card;
