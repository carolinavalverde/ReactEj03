import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HelloWorld = ({ name }) => {
  const [msj, setMsj] = useState("(vamos al changed state)");

  const cambiarEstado = () => {
    setMsj("(changed state)");
  };

  return (
    <section className="container">
      <div className="card rounded bg-primary text-warning text-center p-5 m-3">
        <h1 className="fw-bold display-2">
          Hello {name}! {msj}
        </h1>
        <button className="btn btn-warning m-5 p-2 fw-bolder" onClick={cambiarEstado}>
          Click me
        </button>
      </div>
    </section>
  );
};

export default HelloWorld;
