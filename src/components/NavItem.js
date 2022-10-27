import { useState } from "react";
import { NavLink } from "react-router-dom";


function NavItem(props) {

  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
        <NavLink className='nav-bar-menu' onClick={() => setOpen(!open)} end> {props.text} </NavLink>

        {open && props.children}

    </li>
  )

}

export default NavItem