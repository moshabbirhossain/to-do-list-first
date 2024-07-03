import { useState } from "react";

const TodoForm = () => {
  const [data, setData] = useState("");
  const [saveData] = useState([]);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    saveData.push(data);
    setData("");
    //console.log(saveData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center my-4">
        <h1 className="mb-4 font-semibold">ToDo List</h1>
        <input
          type="text"
          required
          onChange={(e) => setData(e.target.value)}
          value={data}
          className="border-solid border-2 border-primary border-r-0 rounded-l-3xl outline-none pl-4 bg-white"
          placeholder="Enter Your ToDo Task"
        />
        <button
          type="submit"
          className="border-solid border-2 border-primary  border-l-0 rounded-r-3xl pl-4 pr-6 bg-white">
          Enter
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
