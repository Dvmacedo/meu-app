import React, { useState, useEffect } from 'react';
import './Calculadora.css';

function Calculadora() {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState(null);
  const [value, setValue] = useState(null);

  const handleDigit = (digit) => {
    setDisplay(display === '0' ? String(digit) : display + digit);
  };

  const handleOperation = (op) => {
    if (operation !== null) {
      calculate();
    }
    setValue(parseFloat(display));
    setOperation(op);
    setDisplay('0');
  };

  const calculate = () => {
    if (operation === '+') {
      setDisplay(String(value + parseFloat(display)));
    } else if (operation === '-') {
      setDisplay(String(value - parseFloat(display)));
    } else if (operation === '*') {
      setDisplay(String(value * parseFloat(display)));
    } else if (operation === '/') {
      setDisplay(String(value / parseFloat(display)));
    }
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  return (
    <div className="App">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleDigit(1)}>1</button>
        <button onClick={() => handleDigit(2)}>2</button>
        <button onClick={() => handleDigit(3)}>3</button>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleDigit(4)}>4</button>
        <button onClick={() => handleDigit(5)}>5</button>
        <button onClick={() => handleDigit(6)}>6</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleDigit(7)}>7</button>
        <button onClick={() => handleDigit(8)}>8</button>
        <button onClick={() => handleDigit(9)}>9</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleDigit(0)}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearEntry}>AC</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculadora;
