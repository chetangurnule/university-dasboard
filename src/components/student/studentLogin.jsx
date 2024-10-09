import React from "react";
import CustomForm from "../common/customForm";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const studentLogin = () => {
  const [formType, setFormType] = useState("Login");
  const handleOnClick = () => {
    if (formType === "Login") {
      setFormType("SignUp");
    } else {
      setFormType("Login");
    }
  };

  return (
    <>
      <Container>
        <Row className="">
          <Col>
            <p className="text-center text-white ">
              {formType === "Login" ? (
                <p>
                  Not SignUp?{" "}
                  <span
                    onClick={handleOnClick}
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  >
                    Click Here to SignUp
                  </span>
                </p>
              ) : (
                <p
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={handleOnClick}
                >
                  Click here to LogIn
                </p>
              )}
            </p>
            <CustomForm formType={formType} heading={`Student ${formType}`} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default studentLogin;
