import {NavLink} from 'react-router-dom'
import '../styles/NavBar.css'
import DropdownMenu from './DropdownMenu'
import NavItemC from './NavItemC'
import NavItemD from './NavItemD'
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
    <nav className='navbar main-bar'>
        <div className='navbar'>  
          <ul className='navbar-nav'>

            <li> <NavLink className='nav-bar-link' to="/home" > {lenguaje.navhome} </NavLink> </li>
            <li> <NavLink className='nav-bar-link' to="/about" > {lenguaje.navabout} </NavLink> </li>
            <li> <NavLink className='nav-bar-link' to="/contact" > {lenguaje.navcontact} </NavLink> </li>
            <NavItemC className='nav-bar-menu' text={lenguaje.navkinematics}> 
              <DropdownMenu campo='cinematica' options={[['mru',`${lenguaje.navMRU}`],['mrua',`${lenguaje.navMRUA}`]]}/>
            </NavItemC>
            <NavItemD  className='nav-bar-menu' text={lenguaje.navdynamics}> 
              <DropdownMenu campo='dinamica' options={[['firstlaw',`${lenguaje.nav1stlaw}`],['secondlaw',`${lenguaje.nav2ndlaw}`],['thirdlaw',`${lenguaje.nav3rdlaw}`]]}/>
            </NavItemD>

            
          </ul>
        </div>
        <div className='navbar'>
          <img onClick={changeLangEN} className='bandera' alt='bandera' src={flagEN} /> 
          <img onClick={changeLangES} className='bandera' alt='bandera' src={flagES} />
        </div>
    </nav>
  )
}

export default NavBar
export const lenguaje = lang