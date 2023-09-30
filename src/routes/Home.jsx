import React from "react";
import "../App.css";

import { Container, Button, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home({ document }) {
  const {
    company_name,
    main_header,
    tagline,
    description,
    image,
    price_plan_list,
  } = document;

  return (
    <>
      <header>
        <Container>
          <Header company_name={company_name} />
          <Row className="hero mt-5 mt-md-0">
            <Col xs={12} md={6}>
              <Col>
                <h1>{main_header}</h1>
              </Col>
              <Col>
                <h2>{tagline}</h2>
              </Col>

              <Col>
                <p>{description}</p>
              </Col>
              <Col xs={12} lg={6}>
                <Button as={Link} to="/price" size="lg" className="w-100">
                  Sign Up
                </Button>
              </Col>
            </Col>
            <Col
              xs={12}
              md={6}
              className="img"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            ></Col>
          </Row>
        </Container>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default Home;
