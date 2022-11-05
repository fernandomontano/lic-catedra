import React from "react";
import img from "../../../public/jennie-clavel-ZCT3-udB2-w-unsplash.jpg";
import img2 from "../../../public/Santa-Ana-Gothic-Cathedral-1000x667.jpg";

import "../../styles/image.css";

export default function SantaAna() {
  return (
    <div className="container container-fluid h-100">
      <section className="mx-5 rounded d-flex align-items-center h-100 ">
        <div className="d-flex flex-column rounded flex-wrap bg-light">
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            <div>
              <img src={img} className="rounded"></img>
            </div>
            <div className="text-center d-flex flex-column responsive-width p-4">
              <h1 className="mt-2 ">Santa Ana</h1>
              <div className="text-danger">"La ciudad Morena"</div>
              <div className="lh-lg">
                El municipio de Santa Ana tiene una población estimada de 264
                091 habitantes para el año 2013, ocupando el segundo lugar en
                población. Para su administración se divide en 34 cantones y 312
                caseríos, mientras que la propia ciudad se divide en 12 barrios
                y varias colonias. La localidad celebra sus fiestas patronales
                durante las «Fiestas Julias», del 17 al 26 de julio.
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
