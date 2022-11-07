import React from "react";
import img from "../../../public/jennie-clavel-ZCT3-udB2-w-unsplash.jpg";
import img2 from "../../../public/Santa-Ana-Gothic-Cathedral-1000x667.jpg";
import "../../styles/map.css";

import "../../styles/image.css";

export default function SantaAna() {
  return (
    <div className="container container-fluid min-vh-100 mt-3">
      <section className="rounded d-flex align-items-center justify-content-center flex-wrap h-100 w-100">
        <div className="bg-light rounded w-75 d-flex flex-column justify-content-center ">
          <div className="p-5 d-flex flex-wrap justify-content-around">
            <img
              src={img}
              alt="Teatro"
              className="img-fluid rounded"
              width="400px"
            />
            <div className="text-center mt-3 w-50 lh-lg">
              <h3>Santa Ana</h3>
              <h4 className="text-danger">"La ciudad Morena"</h4>
              <div>
                Santa Ana es una ciudad salvadoreña, cabecera del municipio,
                departamento, distrito y sede de la diócesis homónimos; y es la
                ciudad principal de la zona occidental, y segunda ciudad en
                importancia de El Salvador, ubicada a 64 km de la capital
                estatal, San Salvador.
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="line bg-secondary rounded"></div>
          </div>
          <div className="mt-3 text-start px-5 py-3 ms-2">
            <h2 className="text-start">Historia</h2>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
}
