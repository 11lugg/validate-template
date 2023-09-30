import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Header({ company_name }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Row className="nav">
      <Col xs={isHomePage ? 7 : 12} lg={isHomePage ? 9 : 12} className="col">
        <Link to="/">{company_name}</Link>
      </Col>
      {isHomePage && (
        <Col xs={5} lg={3} className="col">
          <Row>
            <Col className="d-none d-sm-block" sm={6}>
              <Button as={Link} to="/price" variant="link">
                Prices
              </Button>
            </Col>
            <Col xs={12} sm={6}>
              <Button as={Link} to="/price">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  );
}

export default Header;
