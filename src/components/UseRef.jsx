import { useRef } from "react";
const UseRef = () => {
    const myHeading = useRef();
    const myImg = useRef(null);
    const clickHandler = () => {
        myHeading.current.innerText = "Button Clicked";
        myImg.current.src = "https://placehold.co/600x400/orange/white";
        myImg.current.setAttribute("width", "256px");
        myImg.current.setAttribute("height", "576px");
    };
    // useRef use in input field
    let firstName,
        lastName = useRef();
    let clickHandlers = () => {
        const fname = firstName.value;
        const lname = lastName.value;
        alert(fname + " " + lname);
    };
    // css-class change
    let heading = useRef();
    const pressHandle = () => {
        heading.current.classList.remove("text-success");
        heading.current.classList.add("text-primary");
    };


    {/* persisted mutable (ভ্যালু চেঞ্জ হবে কিন্তু দেখা যাবে না)  */}
    let number = useRef(0); 
    const enter = () => {
        number.current++;
        console.log(number.current);
    };
    return (
        <div>
            {/* change innerText, innerHTML, attribute like img src etc*/}
            <h1 ref={myHeading}>
                Change the image and set its new width and height using useRef
                Hook
            </h1>
            <img
                ref={myImg}
                src="https://placehold.co/600x400?text=Hello World"
                alt=""
            />
            <button onClick={() => clickHandler()} className="btn">
                Click
            </button>
            <br />
            {/* use of useRef in input field */}
            <input
                type="text"
                ref={(a) => (firstName = a)}
                placeholder="firstName"
            />
            <br />
            <input
                type="text"
                ref={(a) => (lastName = a)}
                placeholder="lastName"
            />
            <br />
            <button type="button" onClick={clickHandlers}>
                Submit
            </button>
            {/* css class change using useRef */}
            <h1 className="text-success" ref={heading}>
                This is Heading Section
            </h1>
            <button type="button" onClick={pressHandle}>
                Press
            </button>

            <br />
             {/* persisted mutable (ভ্যালু চেঞ্জ হবে কিন্তু দেখা যাবে না)  */}
            <button type="button" onClick={enter}>Enter</button>
        </div>
    );
};

export default UseRef;
