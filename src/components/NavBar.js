import {NavLink} from 'react-router-dom'
import '../styles/NavBar.css'
import DropdownMenu from './DropdownMenu'
import NavItem from './NavItem'
import { langEN } from '../languaje/en';
import { langES } from '../languaje/es';
import flagES from '../images/ES.png'
import flagEN from '../images/US.png'


let lang
if (localStorage.getItem('lang') === 'langES') {
  lang = langES
}  else if (localStorage.getItem('lang') === 'langEN'){
  lang = langEN
}  else {lang = langEN}



let NavBar = () =>  {

  function changeLangES () {
    localStorage.setItem('lang','langES')
    window.location.reload(false)
    }
  
  function changeLangEN () {
    localStorage.setItem('lang','langEN')
    window.location.reload(false)
    }
  
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        
        <li> <NavLink className='nav-bar-link' to="/home" > Home </NavLink> </li>
        <li> <NavLink className='nav-bar-link' to="/about" > About </NavLink> </li>
        <li> <NavLink className='nav-bar-link' to="/contact" > Contact </NavLink> </li>
        <NavItem className='nav-bar-menu' text='Cinematica' old> 
        <DropdownMenu campo='cinematica' options={[['mrua','Uniformly Accelerated Motion Calculator'],['mru','Uniformly Motion Calculator']]}/>
        </NavItem>

        
        
        <img onClick={changeLangEN} className='bandera' alt='bandera' src={flagEN} /> 
        <img onClick={changeLangES} className='bandera' alt='bandera' src={flagES} />
      </ul>
    </nav>
  )
}

export default NavBar
export const lenguaje = lang