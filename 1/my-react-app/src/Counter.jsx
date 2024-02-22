import React, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const minus = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={add}>Add</button>
            <button className="counter-button" onClick={minus}>Minus</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    );

}

export default Counter