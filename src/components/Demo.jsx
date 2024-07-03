const Demo = () => {

  //conditional rendering
  //1.using if/else

  //2.using switch
  // const status = true;
  // switch(status) {
  //   case true:
  //     return( 
  //       <div className="text-center">
  //         <h1 className="my-6 font-semibold">Hello World</h1>
  //         <button className="btn btn-secondary" onClick={() => alert("Clicked on Submit Button")}>Submit</button>
  //       </div>
  //     );
  //   case false:
  //     return <button className="btn my-4">Logout</button>
  //   default:
  //     return <p>Error</p>
  // }

  //3.using ternary operator
  // const status = false;
  // return(
  //   status? <button>Logout</button>: <button>Login</button>
  // )

  //4.Using && operator
  // const status = true;
  // return (
  //   <div>
  //     <h1>Login Status</h1>
  //     {
  //       status && <button>Logout</button>
  //     }
  //   </div>
  // );

  //5.immediately invoked function
  // const status = false;
  // return (
  //   <div>
  //     <h1>Login Status</h1>
  //     {
  //     (() => {
  //       if(status)
  //         return <button type="button">Logout</button>
  //       else
  //         return <button type="button">Login</button>
  //     })()}
  //   </div>
  // );

  return (
    <div className="text-center">
      <h1 className="my-6 font-semibold">Hello World</h1>
      <button className="btn btn-secondary" onClick={() => alert("Clicked on Submit Button")}>Submit</button>

    </div>
  );
};

export default Demo;