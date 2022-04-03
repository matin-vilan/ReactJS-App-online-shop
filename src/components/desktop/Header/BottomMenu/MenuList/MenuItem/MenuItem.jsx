import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./MenuItem.module.css";

const MenuItem = ({ text }) => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const activeHandler = () => {
    setActive(!active);
    setShow(!show);
  };

  return (
    <>
      <Dropdown
        className="ms-2"
        show={show}
        onMouseEnter={activeHandler}
        onMouseLeave={activeHandler}
      >
        <Dropdown.Toggle
          variant={"none"}
          className={active ? "text-danger" : ""}
          id="dropdown-basic"
        >
          {text}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropDownMenuItem}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default MenuItem;
