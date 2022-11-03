
function Cuadricula (props) {

  return (
    <>

    <label htmlFor={props.name}> {props.lenguaje} : </label>
    <input id={props.id} type={props.type} name={props.name} disabled={props.disabled}/>
    <span>{props.unit}</span>
    <br></br>
    </>
  )
}

export default Cuadricula