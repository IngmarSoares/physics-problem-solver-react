import { useState } from "react";
import { NavLink } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import '../styles/NavItem.css'


function NavItemC(props) {

  const [open, setOpen] = useState(false)
  NavItemC.handleClickOutside = () => setOpen(false)

  return (
    <li className="nav-item">
        <NavLink className='nav-bar-menu' onClick={() => setOpen(!open)}end> {props.text} </NavLink>

        {open && props.children}

    </li>
  )

}

const clickOutsideConfigC = {
  handleClickOutside: () => NavItemC.handleClickOutside,
};

export default onClickOutside(NavItemC,clickOutsideConfigC)