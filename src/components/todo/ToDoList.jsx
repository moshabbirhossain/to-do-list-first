// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ToDoList = () => {
    const [data, setData] = useState("");
    const [storeData] = useState([]);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        storeData.push(data);
        setData("");
        console.log(storeData);
    };
    return (
        <div>
            <form className="text-center my-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your ToDo list"
                    className="border-solid border-2 border-r-0 rounded-l-3xl pl-4 outline-none"
                    onChange={(e) => setData(e.target.value)}
                    value={data}
                />

                <button
                    type="submit"
                    className="border-solid border-2 border-l-0 rounded-r-3xl outline-none pl-4 pr-6"
                >
                    Add
                </button>
            </form>
            <div className="mx-96 mt-24">
                {
                    storeData.map((item) =>
                        <ol key={item} type="A" className="pl-10 font-medium">
                            <li>{item}</li>
                        </ol>
                    )
                }
                </div>
        </div>
    );
};

export default ToDoList;
