import React ,{useState}from "react";
import "./App.css";


export default function App() {
  const [calc, setcalc] = useState("")
  const handleClick=(n)=>{
setcalc(calc.concat(n.target.name))
  }
  const clear=()=>{
    setcalc("")
  }
  const back=()=>{
    setcalc(calc.slice(0,calc.length-1))
  }
  const equal=()=>{
    try{
      setcalc(eval(calc).toString());

    }
    catch(err){
      setcalc("Error")
    }
  }

  return (
    <div className="container">
      <form className="f1">
        <input type="text" value={calc}></input>

      </form>
<div className="keypad">
<button onClick={clear} className="clear">Clear</button>
<button onClick={back}>C</button>
<button name="+"  onClick = {handleClick}>+</button>
  
  <button name="7" onClick = {handleClick}>7</button>
  <button name="8" onClick = {handleClick}>8</button>
  <button name="9" onClick = {handleClick}>9</button>
  <button name="-" onClick = {handleClick}>&ndash;</button>
  <button name="4" onClick = {handleClick}>4</button>
  <button name="5" onClick = {handleClick}>5</button>

  <button name="6" onClick = {handleClick}>6</button>
  <button name="*" onClick = {handleClick}>&times;</button>
  <button name="1" onClick = {handleClick}>1</button>
  <button name="2" onClick = {handleClick}>2</button>
  <button name="3" onClick = {handleClick}>3</button>
  <button name="/" onClick = {handleClick}>&divide;</button>
  <button name="." onClick = {handleClick}>.</button>
  <button name="0" onClick = {handleClick}>0</button>
  <button className="equal" onClick={equal}>=</button>





</div>
    </div>
  )
}

