import React from "react";
import { Col, Row } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <>
      <div>AdminDashboard</div>
      <Row>
        <Col className="admin-module m-2">
          <Row>Total Employees</Row>
          <Row>Total Employees</Row>
        </Col>
        <Col className="admin-module m-2">
        <Row>Total Department</Row>
        <Row>Total Department</Row>
        </Col>
        <Col className="admin-module m-2">
        <Row>Monthy pay</Row>
        <Row>Monthy pay</Row>
        </Col>
      </Row>
      <div>Leave Detials</div>
      <Row>
        <Col className="admin-module m-2">
          <Row>Leave Applied</Row>
          <Row>Total Employees</Row>
        </Col>
        <Col className="admin-module m-2">
        <Row>Leave Approved</Row>
        <Row>Total Department</Row>
        </Col>
        <Col className="admin-module m-2">
        <Row>Leave Pending</Row>
        <Row>Monthy pay</Row>
        </Col>
        <Col className="admin-module m-2">
        <Row>Leave Rejected</Row>
        <Row>Monthy pay</Row>
        </Col>
      </Row>
    </>
  );
};

export default AdminDashboard;
