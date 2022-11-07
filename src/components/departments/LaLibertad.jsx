import React from "react";
import img from "../../../public/lalibertad.jpg";
import "../../styles/image.css";
import { UilUserArrows } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilDollarAlt } from "@iconscout/react-unicons";

export default function LaLibertad() {
  return (<div className="container container-fluid mt-3">
  <section className="rounded d-flex align-items-center justify-content-center flex-wrap h-100 w-100">
    <div className="bg-light rounded w-75 d-flex flex-column justify-content-center ">
      <div className="p-5 d-flex flex-wrap justify-content-around align-items-center">
        <img
          src={img}
          alt="Teatro"
          className="img-fluid rounded"
          width="400px"
        />
        <div className="text-center mt-3 lh-lg responsive-width">
          <h3>La Libertad</h3>
          <h4 className="text-danger">"Departamento playero"</h4>
          <div>
          La Libertad es un departamento de El Salvador. Su capital es la ciudad de Santa Tecla, capital 
          también del municipio homónimo. 
          Tiene una extensión territorial de 112 km&sup2; y una población de 121,908 habitantes.
          El departamento de la Libertad consta con la mayoría de las mejores playas de todo el país, ya sean 
          para disfrutar nadando o practicando algún deporte extremo acuático como el 
          surf, windsurf, kayaking, etc.
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="line bg-secondary rounded-1"></div>
      </div>
      <div className="px-5 py-3">
        <h3>General</h3>
        <div className="">
          <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap my-2 center-card">
            <div className="bg-secondary rounded">
              <div className="p-3 text-center">
                <UilUserArrows size="50" color="#f0f5fa" />
                <h5>Gentilicio</h5>
                <p>"Liberteño(a)"</p>
              </div>
            </div>
            <div className="bg-secondary rounded">
              <div className="p-3 text-center">
                <UilUsersAlt size="50" color="#f0f5fa" />
                <h5>Población</h5>
                <p>Total 660,653 hab.</p>
              </div>
            </div>
            <div className="bg-secondary rounded">
              <div className="p-3 text-center">
                <UilDollarAlt size="50" color="#f0f5fa" />
                <h5>PIB</h5>
                <p>Total (2013) 660,652 US$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div></div>
</div>
    /*<div className="container container-fluid h-100">
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
</div>*/
  );
}