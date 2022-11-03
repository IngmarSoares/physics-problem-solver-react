import { lenguaje } from './NavBar';
import imagenformulamru from '../images/mru-formula.png'
import { useState } from 'react';
import Cuadricula from './Cuadricula';
import '../styles/mru.css'


function Mru (){


  const [selectedUnitsOption, setSelectedUnitsOption] = useState([' m/s',' m',' s'])
  function changeUnits (event){
    if (event.target.value === 'ms') {setSelectedUnitsOption([' m/s',' m',' s'])}
    if (event.target.value === 'kmh') {setSelectedUnitsOption([' km/h',' km',' h'])}
    if (event.target.value === 'mph') {setSelectedUnitsOption([' mi/h',' mi',' h'])}
  }

  const [problemType, setProblemType] = useState([0,1,1,1,1])
  function changeProblem (event){
    switch(event.target.value) {
      case 'findto':
        setProblemType([0,1,1,1,1])
        break;
      case 'findt':
        setProblemType([1,0,1,1,1])
        break;
      case 'findVo':
          setProblemType([1,1,0,1,1])
        break;
      case 'findSo':
        setProblemType([1,1,1,0,1])
        break;
      case 'findS':
          setProblemType([1,1,1,1,0])
        break;
      default: setProblemType([1,1,1,1,1])
    }
  }

  const[result,setResult] = useState('')
  function calcResult(){
    const ese = document.getElementById('ese').value
    const eseo = document.getElementById('eseo').value
    const te = document.getElementById('te').value
    const teo = document.getElementById('teo').value
    const uveo = document.getElementById('uveo').value

    console.log(document.getElementById('probType').value)
    
    console.log(typeof(ese))
    switch(document.getElementById('probType').value) {
      case 'findto':
        
        setResult(lenguaje.mruresultto + (Number(te) - ((Number(ese) - Number(eseo))/Number(uveo))) + selectedUnitsOption[2])
        break;
      case 'findt':
        setResult(lenguaje.mruresultt  + (Number(teo) + ((Number(ese) - Number(eseo))/Number(uveo))) + selectedUnitsOption[2])
        break;
      case 'findVo':
        setResult(lenguaje.mruresultvo + ((Number(ese) - Number(eseo))/(Number(te) - Number(teo))) + selectedUnitsOption[0])
        break;
      case 'findSo':
        setResult(lenguaje.mruresultso + (Number(ese) - Number(uveo)*(Number(te) - Number(teo))) + selectedUnitsOption[1])
        break;
      case 'findS':
        setResult(lenguaje.mruresults + (Number(eseo) + Number(uveo)*(Number(te) - Number(teo))) + selectedUnitsOption[1])
        break;
      default: setResult('')
    }

  }

  function clearFields() {
    document.getElementById('ese').value = ''
    document.getElementById('eseo').value = ''
    document.getElementById('te').value = ''
    document.getElementById('teo').value = ''
    document.getElementById('uveo').value = ''
  }



  return (
    <>
      <h1>{lenguaje.mruh1}</h1>
      <h4>{lenguaje.mruh41}</h4>
      <div className='formula'>
        <img className='form-image' src={imagenformulamru} alt='mru-formula'/>
        <ul className='var-list'>
          <li>{lenguaje.mruli1}</li>
          <li>{lenguaje.mruli2}</li>
          <li>{lenguaje.mruli3}</li>
          <li>{lenguaje.mruli4}</li>
          <li>{lenguaje.mruli5}</li>
        </ul>
      </div>
        
      <h4>{lenguaje.mruh42}</h4>
      <h2>{lenguaje.mrusolver}</h2>

      <form action="#">
        <label >{lenguaje.mruselectproblem}</label>
        <select onChange={changeProblem} name='problem-type' id='probType'>
          <option value='findto'>{lenguaje.mrufindto}</option>
          <option value='findt'>{lenguaje.mrufindt}</option>
          <option value='findVo'>{lenguaje.mrufindvo}</option>
          <option value='findSo'>{lenguaje.mrufindso}</option>
          <option value='findS'>{lenguaje.mrufinds}</option>
        </select>
        <label >{lenguaje.mruselectunits}</label>
        <select  onChange={changeUnits} name='units' id='units'>
          <option value='ms'>{lenguaje.mruunitms}</option>
          <option value='kmh'>{lenguaje.mruunitkmh}</option>
          <option value='mph'>{lenguaje.mruunitmph}</option>
        </select>
        <br></br>
        <br></br>
        <Cuadricula name='eseo' lenguaje={lenguaje.mruli1} type='number' id='eseo' unit={selectedUnitsOption[1]} disabled={!problemType[3]}/>
        <Cuadricula name='ese' lenguaje={lenguaje.mruli2} type='number' id='ese' unit={selectedUnitsOption[1]} disabled={!problemType[4]}/>
        <Cuadricula name='teo' lenguaje={lenguaje.mruli3} type='number' id='teo' unit={selectedUnitsOption[2]} disabled={!problemType[0]}/>
        <Cuadricula name='te' lenguaje={lenguaje.mruli4} type='number' id='te' unit={selectedUnitsOption[2]} disabled={!problemType[1]}/>
        <Cuadricula name='uveo' lenguaje={lenguaje.mruli5} type='number' id='uveo' unit={selectedUnitsOption[0]} disabled={!problemType[2]}/>
        <br></br> 
      </form> 
      <br></br>
      <button id='erase' onClick={clearFields}>{lenguaje.mruclear}</button> 
      <button id='calcular' onClick={calcResult}>{lenguaje.mrucalc}</button> 
      <br></br>
      <h3>{result}</h3>
    </>

  )
}

export default Mru

