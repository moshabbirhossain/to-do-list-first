import { useState } from "react";

const PrevObj = () => {
    const [myObj, setMyObj] = useState(
        {
            key1: "value 1",
            key2: "value 2",
            key3: "value 3"
        }
    );
    const change = () =>{
        setMyObj(
            prevObj=>(
                {
                    ...prevObj,
                    key1: 'New Value for Key1 is 1',
                    key2: 'New value for key 2 is 2'
                }
            )
        )
    }
    return (
        <div>
            <h1>{myObj.key1}</h1>
            <h1>{myObj.key2}</h1>
            <h1>{myObj.key3}</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default PrevObj;