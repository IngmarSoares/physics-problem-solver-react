import { Link } from 'react-router-dom'
import '../styles/DropdownMenu.css'
import DropdownItem from './DropdownItem'


function DropdownMenu (props) {


  return (
    <div className="dropdown">

      {props.options.map((x) => {
        let link = ('/' + props.campo + '/' + x[0]);
        return <DropdownItem key={x[0]}> <Link to={link}> {x[1]} </Link> </DropdownItem>
      })}


    </div>
  )
}

export default DropdownMenu