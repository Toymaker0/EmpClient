import React from "react";
import { Col, Navbar, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const dashBoardItem = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Employees",
      path: "/empolyees",
    },
    {
      name: "Department",
      path: "/department",
    },
    {
      name: "Leaves",
      path: "/leaves",
    },
    {
      name: "Salary",
      path: "/salary",
    },
    {
      name: "Setting",
      path: "/setting",
    },
  ];
  const navigate = useNavigate();
  const handleMenu = (item) => {
    console.log(item);
    navigate(item.path);
  };
  console.log(window.location.pathname);
  
  return (
    <>
      <Row>
        <Col md={2}  className="side-container vh-100">
          
              <Row className="m-2 p-2  ">Employ Management</Row>
              <ul className="list-group">
                {dashBoardItem.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={`list-group-item m-2 ${window.location.pathname==item.path? 'active':''} `}
                      onClick={() => {
                        handleMenu(item);
                      }}
                      aria-current="true"
                    >
                      {item.name}
                    </li>
                  );
                })}
                {/* <li class="list-group-item active" aria-current="true">An active item</li> */}
              </ul>
            </Col>
        
        <Col>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Layout;
