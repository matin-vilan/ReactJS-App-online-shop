import React from 'react';
import "./ShoppingItems.css"

const ShoppingItems = (props) => {
    return (
        <div>
            <div className='icon'>
                {props.icon}
            </div>
            <div className='text'>
                {props.text}
            </div>
            
        </div>
    );
};

export default ShoppingItems;