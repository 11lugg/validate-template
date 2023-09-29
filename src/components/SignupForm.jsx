import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import jsonp from "jsonp";

function SignupForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_MAILCHIMP_URL;

    const modifiedUrl = url.replace("/post?", "/post-json?");

    jsonp(`${modifiedUrl}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg } = data;
      alert(msg);
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col lg={8} className="mb-3 mb-lg-0">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              size="lg"
              type="email"
              name="EMAIL"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>
        </Col>

        <Col lg={4}>
          <Button className="btn-lg" style={{ width: "100%" }} type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SignupForm;
