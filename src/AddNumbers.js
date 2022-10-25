import React, { useState } from 'react';

 export const AddNumbers = () => {
    const [count, setCount] = useState(null);

    return (
        <div>
            <h1> American Airlines Add Numbers Exercise </h1>
            <input
            />
            +
            <input
            />
            <br/>
            <button>
                Total
            </button>
        </div>
    )
} 