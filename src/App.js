import React, { useEffect, useState } from "react";
import "./App.css";

import { client } from "./prismic";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import HeadComponent from "./components/HeadComponent";

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

  console.log(document);

  const {
    company_name,
    main_header,
    tagline,
    description,
    image,
    price_plan_list,
    favicon,
    website_title,
  } = document;

  return (
    <>
      <HeadComponent
        favicon={favicon}
        website_title={website_title}
        description={description}
      />
      <header>
        <Container>
          <Row className="nav">
            <Col xs={7} lg={9} className="col">
              {company_name}
            </Col>
            <Col xs={5} lg={3} className="col">
              <Row>
                <Col className="d-none d-sm-block" sm={6}>
                  <Button variant="link">Prices</Button>
                </Col>
                <Col xs={12} sm={6}>
                  <Button>Sign Up</Button>
                </Col>
              </Row>
            </Col>
          </Row>
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
              <Col>
                <Row>
                  <Col lg={8}>
                    {" "}
                    <Form.Control
                      size="lg"
                      type="email"
                      className="subscribe-form"
                      placeholder="Enter email"
                    />
                  </Col>
                  <Col lg={4} className="mt-3 mt-lg-0">
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
      <main>
        <Container>
          {price_plan_list.map((price_plan, index) => {
            const odd = (
              <>
                <Col className="col" xs={12} lg={6}>
                  <Row>
                    <Col xs={4} sm={3}>
                      <img
                        src={price_plan.icon.url}
                        alt={price_plan.icon.name}
                      ></img>
                    </Col>
                    <Col xs={8} sm={9}>
                      <Col xs={12}>{price_plan.who_is_it_for}</Col>
                      <Col xs={12}>{price_plan.header}</Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>{price_plan.price_description}</Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <span>£{price_plan.price}</span> /
                      {price_plan.payment_frequency}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button size="lg">Submit</Button>
                    </Col>
                  </Row>
                </Col>
                <Col className="col" xs={12} lg={6}>
                  <p>Whats included</p>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} /> Convert form data
                      quickly
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} /> Secure,
                      accessible PDF storage
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} /> Works with
                      popular forms
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} /> Our support
                    </li>
                  </ul>
                </Col>
              </>
            );

            const even = (
              <>
                <Col
                  className="col"
                  xs={{ span: 12, order: "last" }}
                  lg={{ span: 6, order: "first" }}
                >
                  <p>Whats included</p>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} /> Convert form data
                      quickly
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} /> Secure,
                      accessible PDF storage
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} /> Works with
                      popular forms
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} /> Our support
                    </li>
                  </ul>
                </Col>
                <Col
                  className="col"
                  xs={{ span: 12, order: "first" }}
                  lg={{ span: 6, order: "last" }}
                >
                  <Row>
                    <Col xs={4} sm={3}>
                      <img
                        src={price_plan.icon.url}
                        alt={price_plan.icon.name}
                      ></img>{" "}
                    </Col>
                    <Col xs={8} sm={9}>
                      <Col xs={12}>{price_plan.who_is_it_for}</Col>
                      <Col xs={12}>{price_plan.header}</Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>{price_plan.price_description}</Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <span>£{price_plan.price}</span> /
                      {price_plan.payment_frequency}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button size="lg">Submit</Button>
                    </Col>
                  </Row>
                </Col>
              </>
            );

            const oddOrEven = index % 2 === 0 ? odd : even;

            return (
              <section
                key={index}
                className={`price-option-${index % 2 === 0 ? "odd" : "even"}`}
              >
                <Row>{oddOrEven}</Row>
              </section>
            );
          })}
        </Container>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
