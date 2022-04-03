import React from "react";
import { Dropdown } from "react-bootstrap";

const MenuItem = ({ text }) => {
  return (
    <>
      <Dropdown className="ms-2">
        <Dropdown.Toggle variant="none" id="dropdown-basic">
          {text}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default MenuItem;
