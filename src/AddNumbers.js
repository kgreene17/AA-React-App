import React, { useState } from 'react';

 export const AddNumbers = () => {
    //create my needed states
    const [val1, setVal1] = useState(null);
    const [val2, setVal2] = useState(null);
    const [total, setTotal] = useState(null);

    //create funcs to track input and add/display total

    const handleInput1 = (event) => {
        setVal1(event.target.value);
    };
    const handleInput2 = (event) => {
        setVal2(event.target.value);
    }
    const addNums = (val1, val2) => {
        //using parseInt here to convert to Integer so that eg 3+4 returns '7' and not '34'
        setTotal(parseInt(val1) + parseInt(val2))
    }

    //
    return (
        <div>
            <h1> American Airlines Add Numbers Exercise </h1>
            <input onChange={(event) => handleInput1(event)}
                value={val1 ? val1 : ''}
            />
            +
            <input onChange={(event) => handleInput2(event)}
                value={val2 ? val2 : ''}
            />
            <br/>
            <button onClick={() => addNums(val1, val2)}>
                Total
            </button>
            <p>{total} </p>
        </div>
    )
} 