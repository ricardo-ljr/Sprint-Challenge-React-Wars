import React from "react";
import "./StarWars.css";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled from "styled-components";

const CardsDiv = styled.div`
    background: orange;
    position relative;
    width: 300px;
    max-height: 400px;
    margin: 0 auto;
    align-text: center;
`;

const Cards = ({ chars }) => {
  return (
    <CardsDiv>
      <Card>
        <CardBody>
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
          </p>{" "}
        </CardBody>
      </Card>
    </CardsDiv>
  );
};

export default Cards;
