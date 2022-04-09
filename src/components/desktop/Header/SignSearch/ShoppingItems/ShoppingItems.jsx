import React from "react";
import "./ShoppingItems.css";

const ShoppingItems = (props) => {
  return (
    <div className="shoppingItem ms-2 pointer">
      <div className="shoppingItemContainer d-flex my-3 mx-2">
        <div className="icon ms-2">{props.icon}</div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default ShoppingItems;
