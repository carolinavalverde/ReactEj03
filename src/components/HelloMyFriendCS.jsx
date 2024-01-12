import { useState } from "react";

const HelloWorld = ({ name }) => {
  const [msj, setMsj] = useState("(from changed state)");

  const handleClick = () => {
    setMsj("(changed state)");
  };

  return (
    <div className="container-fluid text-bg-dark text-center p-2">
      <h1>
        Hello {name}! {msj}
      </h1>
      <button className="btn btn-primary m-2" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default HelloWorld;
