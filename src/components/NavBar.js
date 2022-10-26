import {Link} from 'react-router-dom'

let NavBar = () =>  {
  return (
    <>
      <ul>
        <li> <Link to="/" > Home </Link> </li>
        <li> <Link to="/about" > About </Link> </li>
      </ul>
    </>
  )
}

export default NavBar