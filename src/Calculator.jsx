import React,{useState} from "react";

const Calculator = () => {
  const[input,setInput]=useState('');
  const[result,setResult]=useState('');

const handleClick=(value)=>{
setInput(input+value);
}
const handleClear=()=>{
  setInput('');
}
const handleEqual=()=>{
  try{
    setResult(eval(input).toString());
  }catch(error){
    setResult('Error');
  }
}

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="text-container">
      <input type="text" value={input}/>
      {result && <p>{result}</p>}
      </div>
      <div className="table-container">
      <table>
        <tbody>
          <tr>
            <td><button onClick={()=>handleClick('7')}>7</button> </td>
            <td><button onClick={()=>handleClick('8')}>8</button></td>
            <td><button onClick={()=>handleClick('9')}>9</button></td>
            <td><button onClick={()=>handleClick('+')}>+</button></td>
          
          </tr>
          <tr>  
            <td><button onClick={()=>handleClick('4')}>4</button></td>
            <td><button onClick={()=>handleClick('5')}>5</button></td>
            <td><button onClick={()=>handleClick('6')}>6</button></td>
            <td><button onClick={()=>handleClick('-')}>-</button></td>
            </tr>
          <tr>
            <td><button onClick={()=>handleClick('1')}>1</button></td>
            <td><button onClick={()=>handleClick('2')}>2</button></td>
            <td><button onClick={()=>handleClick('3')}>3</button></td>
            <td><button onClick={()=>handleClick('*')}>*</button></td>
          </tr>
          <tr>
            <td><button onClick={handleClear}>C</button></td>
            <td><button onClick={()=>handleClick('0')}>0</button></td>
            <td><button onClick={handleEqual}>=</button></td>
            <td><button onClick={()=>handleClick('/')}>/</button></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};
export default Calculator;
