import React from 'react';
import "./NavItem.css"

function NavItem({text}) {
  return (
    <div className='TopMenuNavItem'>{text}</div>
  )
}

export default NavItem