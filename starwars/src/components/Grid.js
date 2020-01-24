import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Card.js";
import { Container, Row, Col } from "reactstrap";

export default function Grid() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map(chars => {
          return <Cards chars={chars} key={chars.id} />;
        })}
      </Row>
    </Container>
  );
}
