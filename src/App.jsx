import React, { useState } from 'react';
import './App.css';

const oprs = [ 'CLEAR', 'DEL', 7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '=', '/', '*', '-', '+']

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');

  const isOperator = (value) => {
    return value === '+' || value === '-' || value === '*' || value === '/'
  };

  const calculate = (val1, operator, val2) => {
    switch (operator) {
      case '+':
        return parseFloat(val1) + parseFloat(val2);
      case '-':
        return parseFloat(val1) - parseFloat(val2);
      case '*':
        return parseFloat(val1) * parseFloat(val2);
      case '/':
        return parseFloat(val1) / parseFloat(val2);
      default:
        return 'Error';
    }
  };

  const handleButtonPress = (value) => {
    if (value === 'CLEAR') {
      setInput('');
      setResult('');
      setOperator('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=' ) {
      if (input && result && operator) {
        const newResult = calculate(result, operator, input);
        setResult('');
        setOperator('');
        setInput(String(newResult));
      }
    } else if (isOperator(value)) {
        if (input && !operator) {
          setOperator(value);
          setResult(input);
          setInput('');
        } else if (input && result && operator) {
          const newResult = calculate(result, operator, input);
          setResult(String(newResult));
          setOperator(value);
          setInput('');
        }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input 
        type="text" 
        className='input'
        value={result + operator + input} disabled />
      <div className="buttons">
        {oprs.map((button, ind) => (
          <button key={button} className={`div${ind+1}`} onClick={() => handleButtonPress(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
