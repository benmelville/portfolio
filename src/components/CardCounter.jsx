import React, { useState } from 'react';


const CardCounter = () => {
    const increment = () => { setCount(count + 1); };
    const decrement = () => { setCount(count - 1); };
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Card Counter</h2>
            <p>count: {count}</p>
            <button onClick={increment}>increase</button>
            <button onClick={decrement}>decrease</button>
        </div>
    );
};

export default CardCounter;