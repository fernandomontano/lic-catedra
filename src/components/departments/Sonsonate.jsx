import React from "react";
import img from "../../../public/sonsonate.jpg";

import "../../styles/image.css";


export default function Sonsonate() {
  return (<div className="container container-fluid h-100">
  <section className="mx-5 rounded d-flex align-items-center h-100 ">
    <div className="d-flex flex-column rounded flex-wrap bg-light">
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        <div>
          <img src={img} className="rounded"></img>
        </div>
        <div className="text-center d-flex flex-column responsive-width p-4">
          <h1 className="mt-2 ">Sonsonate</h1>
          <div className="text-danger">"La ciudad de los cocos"</div>
          <div className="lh-lg">
          Sonsonate es una antigua provincia de la Capitanía General de Guatemala que obtuvo su independencia 
          de España en 1821 y que a partir de 1824 junto con la provincia de San Salvador formaron el 
          país que hoy es llamado El Salvador.
          El Departamento está ubicado en la zona occidental del país. Tiene un área de 1225.77 
          km&sup2; y una población estimada de 
          438 960 habitantes (2007), con una densidad de población de aproximadamente 423 hab/km&sup2;
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
</div>);
}
