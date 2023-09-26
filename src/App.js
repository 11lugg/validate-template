// import React, { useEffect, useState } from "react";
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
            <Col>{company_name}</Col>
          </Row>
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
      <main>
        <Container>
          {price_plan_list.map((price_plan, index) => {
            const odd = (
              <>
                <Col>
                  <Row>
                    <Col xs={3}>
                      <img
                        src={price_plan.icon.url}
                        alt={price_plan.icon.name}
                      ></img>
                    </Col>
                    <Col xs={9}>
                      <Col xs={12}>{price_plan.who_is_it_for}</Col>
                      <Col xs={12}>{price_plan.header}</Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>{price_plan.price_description}</Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
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
                <Col>
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
                <Col>
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
                <Col>
                  <Row>
                    <Col xs={3}>
                      <img
                        src={price_plan.icon.url}
                        alt={price_plan.icon.name}
                      ></img>{" "}
                    </Col>
                    <Col xs={9}>
                      <Col xs={12}>{price_plan.who_is_it_for}</Col>
                      <Col xs={12}>{price_plan.header}</Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>{price_plan.price_description}</Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
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
