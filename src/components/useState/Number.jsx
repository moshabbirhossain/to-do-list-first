import { useState } from "react";const Number = () => {
    const [number, setNumber] = useState(0);
    const changeNumber = () =>
        setNumber(number+1);

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={changeNumber}>Click</button>
        </div>
    );
};

export default Number;