// src/components/admin/AdminLogin.jsx

import React, { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";

const CustomForm = ({ formType, heading, className = "" }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = () => {};

  return (
    <Container className={className}>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-white">{heading}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="adminUsername" className="mb-3">
              <Form.Label className="text-white">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="adminPassword" className="mb-3">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {formType}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomForm;
