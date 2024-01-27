import React, { useState } from 'react'
import { useMemo } from 'react';

export default function Memo( {data}) {
    const [inputValue , setInputValue ] = useState("");

    const expensiveCalculation = (data) => {
        console.log("performing calculation");
        return data.toUpperCase();
    };

    const memoizedResult = useMemo(() => expensiveCalculation(inputValue),[inputValue]);

  return (
    <div>
        <br></br>
        <label>data
        <input type='text' value= { inputValue} onChange={(e) => 
            setInputValue(e.target.value) } />
        </label>
        <p>Original data: {inputValue}</p>
        <p>Memoized result:{memoizedResult}</p>
    </div>
  );             
}
