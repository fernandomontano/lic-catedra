import React from "react";
import img from "../../../public/chalatenango.jpg";

import "../../styles/image.css";

export default function Chalatenango() {
  return (
    <div className="container container-fluid h-100">
      <section className="mx-5 rounded d-flex align-items-center h-100 ">
        <div className="d-flex flex-column rounded flex-wrap bg-light">
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            <div>
              <img src={img} className="rounded"></img>
            </div>
            <div className="text-center d-flex flex-column responsive-width p-4">
              <h1 className="mt-2 ">Chalatenango</h1>
              <div className="text-danger">"Valle de aguas y arena"</div>
              <div className="lh-lg">
                El nombre Chalatenango es de origen náhuat, y proviene de chal,
                shal (arena); at, (agua): río; y tenango (valle).
                Etimológicamente, valle de aguas y arena. Chalatenango se
                asienta en el borde sur de la Sierra Madre a su paso por
                Centroamérica. Chalatenango se convirtió en un importante centro
                del cultivo del añil y se mantuvo como tal durante todo el
                período colonial, esto ocasionó que el municipio junto a todo el
                departamento se posicionara como un productor añilero.
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
