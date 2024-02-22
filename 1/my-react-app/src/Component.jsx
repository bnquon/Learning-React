import React, {useState} from "react";

function Component() {

    let [name, setName] = useState("Guess");
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName("CLICKED");
    }   

    const incrementAge = () => {
        setAge(age+1);
    }

    return(
        <div>
            <h1>Name: {name}</h1>
            <button onClick={updateName}>CLICK ME</button>

            <h1>Age: {age}</h1>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    );
}

export default Component