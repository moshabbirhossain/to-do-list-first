import { useRef } from "react";

const ApiCallingUsingRef = () => {

    const callData = useRef(null);
    const myPTag = useRef();
    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        callData.current = await res.json();
    };
    const showData = () => {
        myPTag.current.innerText = JSON.stringify(callData.current)
    };
    return (
        <div>
            <p ref={myPTag}></p>
            <button onClick={fetchData}>Call Data</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default ApiCallingUsingRef;