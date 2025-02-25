import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

const Empolyees = () => {
  return (
    <>
      <div>Manage Employees</div>
      <Row>
        <Col md={4}><input type="search" /></Col>
        <Col md={4}></Col>
        <Col md={4} className="text-end"><Button> Add New Employ</Button></Col>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Image</th>
              <th>Name</th>
              <th>Dob</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
        </Table>
      </Row>
    </>
  );
};

export default Empolyees;
