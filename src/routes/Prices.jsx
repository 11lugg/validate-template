import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

import SignupForm from "../components/SignupForm";
import Header from "../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function PriceList({ document }) {
  const { company_name, price_plan_list } = document;

  return (
    <>
      <header>
        <Container>
          <Header company_name={company_name} />
          <Row className="hero mt-5 mt-md-0 prices">
            <Col xs={12}>
              <h2>Get Early access for discount</h2>
            </Col>
            <Col xs={12}>
              <p>
                Join our waitlist and get access to validate for a discounted
                early bird price
              </p>
            </Col>
            <Col xs={12}>
              <h2>Join the waitlist now</h2>
              <Row>
                <Col className="d-none d-sm-block" lg={2} xl={3}></Col>
                <Col xs={12} lg={8} xl={6} className="text-start">
                  <SignupForm />
                </Col>
                <Col className="d-none d-sm-block" lg={2} xl={3}></Col>
              </Row>
            </Col>
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
    </>
  );
}

export default PriceList;
