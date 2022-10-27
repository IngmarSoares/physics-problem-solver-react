import'../styles/Home.css'
import {lenguaje} from './NavBar'
let Home = () => {
  return (
    <>
      <h1>{lenguaje.homeh1} <span>{lenguaje.homespan}</span></h1> 
      <p>{lenguaje.homeparrafo1}</p>
      <p> {lenguaje.homeparrafo2}</p>
    </>
  )
}

export default Home