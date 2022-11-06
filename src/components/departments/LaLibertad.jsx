import React from "react";
import img from "../../../public/lalibertad.jpg";

import "../../styles/image.css";

export default function LaLibertad() {
  return (<div className="container container-fluid h-100">
  <section className="mx-5 rounded d-flex align-items-center h-100 ">
    <div className="d-flex flex-column rounded flex-wrap bg-light">
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        <div>
          <img src={img} className="rounded"></img>
        </div>
        <div className="text-center d-flex flex-column responsive-width p-4">
          <h1 className="mt-2 ">La Libertad</h1>
          <div className="text-danger">"Departamento playero"</div>
          <div className="lh-lg">
          La Libertad es un departamento de El Salvador. Su capital es la ciudad de Santa Tecla, capital 
          también del municipio homónimo. 
          Tiene una extensión territorial de 112 km&sup2; y una población de 121,908 habitantes.
          El departamento de la Libertad consta con la mayoría de las mejores playas de todo el país, ya sean 
          para disfrutar nadando o practicando algún deporte extremo acuático como el surf, windsurf, kayaking, etc.

          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-around p-2">
        <div className="line bg-secondary rounded mb-3"></div>
        <div className="d-flex justify-content-around"></div>
      </div>
    </div>
  </section>
  <div></div>
</div>
  );
}