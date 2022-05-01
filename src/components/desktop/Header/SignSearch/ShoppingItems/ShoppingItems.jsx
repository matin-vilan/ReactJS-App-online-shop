import { Text } from "@chakra-ui/react";
import React from "react";
import "./ShoppingItems.css";

const ShoppingItems = (props) => {
  return (
    <div className="shoppingItem ms-2 pointer">
      <div className="shoppingItemContainer d-flex my-3 ms-2">
        <div className="icon ms-2 d-flex align-items-center">{props.icon}</div>
        <div className="text"><Text fontSize={{lg:".7rem", xl:"1rem"}}>{props.text}</Text></div>
      </div>
    </div>
  );
};

export default ShoppingItems;
