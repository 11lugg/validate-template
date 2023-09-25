// import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import "./App.css";

import { client } from "./prismic";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.getSingle("homepage");
      if (response) {
        setDocument(response.data);
      }
    };

    fetchData();
  }, []);

  if (!document) return null;

  const { company_name, main_header, tagline, description, image } = document;

  return (
    <>
      <hr />
      <header>
        <Container>
          <Row>
            <Col>{company_name}</Col>
          </Row>
          <hr />
          <Row className="hero">
            <Col>
              <Col>
                <h1>{main_header}</h1>
              </Col>
              <Col>
                <h2>{tagline}</h2>
              </Col>

              <Col>
                <p>{description}</p>
              </Col>
              <Col>
                <Row>
                  <Col xs={8}>
                    {" "}
                    <Form.Control
                      size="lg"
                      type="email"
                      className="subscribe-form"
                      placeholder="Enter email"
                    />
                  </Col>
                  <Col xs={4}>
                    <Button
                      size="lg"
                      variant="primary"
                      className="subscribe-form"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col
              className="img"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            ></Col>
          </Row>
        </Container>
      </header>
      <hr />
      <main>
        <Container>
          <section>price list</section>
          <hr />
          <section>price option 1</section>
          <hr />
          <section>price option 2</section>
          <hr />
          <section> price option 3</section>
        </Container>
      </main>
      <hr />
      <footer></footer>
    </>
  );
}

export default App;
