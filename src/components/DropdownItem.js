import { NavLink } from "react-router-dom";
import '../styles/DropdownItem.css'



function DropdownItem (props) {


  return (
    <NavLink className="menu-item">{props.children}    </NavLink>
  )
}

export default DropdownItem