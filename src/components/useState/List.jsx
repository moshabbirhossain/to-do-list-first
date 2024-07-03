import { useState } from "react";


const List = () => {
    const [list, setList] = useState("");
    const [item, setItem] = useState([]);
    const addList = () => {
        item.push(list)
        setItem([...item]);
        // setList("");
    };
    // setList("");
    const removeItem = (index) => {
        item.splice(index, 1);
        setItem([...item]);
        // setList("");
    }
    return (
        <div className="m-6">
            <input type="text" onChange={(e) => setList(e.target.value)} placeholder='Enter List Item' className="border-solid border-2 border-orange-300 outline-none rounded-lg p-2  mr-2"/>
            <button onClick={addList} className="btn btn-secondary">Add</button>
            <table>
                <tbody>
                    {
                        item.length!==0 ? (item.map((element, index) => {
                            return(
                                <tr>
                                    <td className="">{element}</td>
                                    <td><button onClick={()=>removeItem(index)} className="btn btn-error p-1">Remove</button></td>
                                </tr>
                            )
                        })) : (<tr></tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default List;