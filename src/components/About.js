import {Link} from 'react-router-dom'

let About = () => {
  return (
    <>
      <h1> About</h1>
      <li> <Link to="/user/Ingmar" > Ingmar </Link> </li>
      <li> <Link to="/user/Ana" > Ana </Link> </li>
      <li> <Link to="/user/Luna" > Luna </Link> </li>

    </>
  )
}

export default About