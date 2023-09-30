import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import jsonp from "jsonp";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState({ error: "", success: "" });
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter email");

  const onSubmit = (e) => {
    e.preventDefault();
    setResult({ error: "", success: "" });
    setLoading(true);

    const url = process.env.REACT_APP_MAILCHIMP_URL;

    const modifiedUrl = url.replace("/post?", "/post-json?");

    jsonp(`${modifiedUrl}&EMAIL=${email}`, { param: "c" }, (error, data) => {
      if (error) {
        setResult({ ...result, error: error });
        setLoading(false);

        console.error(`Error while fetching data: ${error}`);
        return;
      }
      setResult({ ...result, success: data });
      setLoading(false);
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
                disabled={loading}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Button
              className="btn-lg"
              style={{ width: "100%" }}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Loading
                </>
              ) : (
                "Subscribe"
              )}
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
