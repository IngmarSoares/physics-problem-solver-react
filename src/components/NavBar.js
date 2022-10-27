import {NavLink} from 'react-router-dom'
import '../styles/NavBar.css'



let NavBar = () =>  {

  return (
    <>
      <ul className='navbar'>
        <li> <NavLink className='nav-bar-link' to="/" end> Home </NavLink> </li>
        <li> <NavLink className='nav-bar-link' to="/about" > About </NavLink> </li>
        <li> <NavLink className='nav-bar-link' to="/contact" > Contact </NavLink> </li>
      </ul>
    </>
  )
}

export default NavBar