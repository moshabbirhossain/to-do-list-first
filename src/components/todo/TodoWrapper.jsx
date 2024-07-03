
import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoWrapper = () => {
    const [value, setValue] =useState([]);
    return (
        <div className="border-solid border-2 border-primary mx-96 mt-10 bg-green-600">
            <div>
                <TodoForm/>
            </div>
            <div>
                {
                    saveData.map((item) => (
                        <ul key={item} className="pl-10">
                            <li className="flex items-center gap-6 my-4">
                                <p className="border-solid border-primary border-2 rounded-lg py-2 pl-4 w-72 text-white">{item}</p>
                                <button className="btn btn-primary">Edit</button>
                                {/* <button className="btn">Save</button> */}
                                <button className="btn btn-primary">Delete</button>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    );
};

export default TodoWrapper;