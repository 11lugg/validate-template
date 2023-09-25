// import React, { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import templateImage from "./assets/template_image.png";

// import { client } from "./prismic";
// import { PrismicRichText } from "@prismicio/react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  // const [document, setDocument] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await client.getSingle("homepage");
  //     console.log(response);
  //     if (response) {
  //       setDocument(response);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <hr />
      <header>
        <Container>
          <Row>
            <Col>Company Name</Col>
          </Row>
          <hr />
          <Row className="hero">
            <Col>
              <Col>
                <h1>Automate PDFs with our smart form integration</h1>
              </Col>
              <Col>
                <h2>Say Goodbye to Manual Entry. Hello, Efficiency!</h2>
              </Col>

              <Col>
                <p>
                  Our platform seamlessly takes your form data and auto-fills
                  your PDFs, saving you time and reducing errors.
                </p>
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
                backgroundImage: `url(${templateImage})`,
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
