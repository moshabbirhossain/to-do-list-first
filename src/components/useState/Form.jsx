import { useState } from "react";

const Form = () => {

    const [formObj, setFormObj] = useState(
        {
            fName: "", lName: "", city: "", gender: ""
        }
    );

    const onInputChange = (property, value) =>{
        setFormObj(prevObj=>({
            ...prevObj,
            [property] : value
        }))
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        alert(JSON.stringify(formObj))
    }

    return (
        <div className="m-10">
            <h1 className="font-semibold mb-2">Customer Information</h1>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => { onInputChange("fName",e.target.value)}} value={formObj.fName} placeholder="First Name" className="border-solid border-2 border-orange-300 outline-none pl-2 w-1/2"/>
                <br />
                <br />
                <input type="text" onChange={(e) => { onInputChange("lName",e.target.value)}} value={formObj.lName} placeholder="Last Name" className="border-solid border-2 border-orange-300 outline-none pl-2 w-1/2"/>
                <br /> <br />
                <select onChange={(e) => { onInputChange("city",e.target.value)}} value={formObj.city} name="city" id="" className="border-solid border-2 border-orange-300 outline-none w-1/2">
                    <option value="">Select City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rangpur">Rangpur</option>
                </select>
                <br /> <br />
                <input type="radio" onChange={() => { onInputChange("gender",'Male')}} checked={formObj.gender==="Male"} name="gender" id=""/>Male
                <input type="radio" onChange={() => { onInputChange("gender",'Female')}} checked={formObj.gender==="Female"} name="gender" id=""/>Female
                <br /> <br />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default Form;