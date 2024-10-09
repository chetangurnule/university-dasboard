import { useState } from "react";
import "./App.css";
import AdminLogin from "./components/admin/adminLogin";
import StudentLogin from "./components/student/studentLogin";
import { Container, Tab, Tabs } from "react-bootstrap";
function App() {
  return (
    <>
      <Container className="mt-5">
        <Tabs
          defaultActiveKey="student"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="student" title="Student">
            <StudentLogin />
          </Tab>
          <Tab eventKey="admin" title="Admin">
            <AdminLogin />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default App;
