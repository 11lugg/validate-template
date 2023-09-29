import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import jsonp from "jsonp";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState({ error: "", success: "" });
  const [placeholder, setPlaceholder] = useState("Enter email");

  const onSubmit = (e) => {
    e.preventDefault();
    setResult({ error: "", success: "" });

    const url = process.env.REACT_APP_MAILCHIMP_URL;

    const modifiedUrl = url.replace("/post?", "/post-json?");

    jsonp(`${modifiedUrl}&EMAIL=${email}`, { param: "c" }, (error, data) => {
      if (error) {
        setResult({ ...result, error: error });

        console.error(`Error while fetching data: ${error}`);
        return;
      }
      setResult({ ...result, success: data });
      setEmail("");
      setPlaceholder("All done!");
    });
  };

  const onChange = (e) => {
    setResult({ error: "", success: "" });
    setPlaceholder("Enter email");

    setEmail(e.target.value);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col lg={8} className="mb-3 mb-lg-0">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                size="lg"
                type="email"
                name="EMAIL"
                className={
                  result.success ? "is-valid" : result.error ? "is-invalid" : ""
                }
                required
                onChange={onChange}
                placeholder={placeholder}
                value={email}
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
      {result.error && <p className="text-danger">{result.error}</p>}
      {result.success && <p className="text-success">{result.success.msg}</p>}
    </>
  );
}

export default SignupForm;
