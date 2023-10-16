import React from "react";
import { useState } from "react";
import "../../styles/header.css";
import estilos_banner from "../../styles/banner.module.css";
import "./Banner.css";

function Banner({ imagenes, size }) {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = size;
  // if (!Array.isArray(imagenes) || cantidad === 0) return;
  const nextImage = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const previousImage = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };
  return (
    <div className="myBanner">
      <div className="botonLateral">
        <button className="flechas" onClick={previousImage}>
          <box-icon name="chevron-left" color="white" size="4em"></box-icon>
        </button>
      </div>
      <div className={estilos_banner.slide}>
        {imagenes.map((imagen, index) => {
          return (
            <div className={estilos_banner.contenedorFotos} key={index}>
              {imagenActual === index && (
                <img key={index} src={imagen} alt={"imagen" + index}></img>
              )}
            </div>
          );
        })}
      </div>

      <div className="botonLateral">
        <button className="flechas" onClick={nextImage}>
          <box-icon name="chevron-right" color="white" size="4em"></box-icon>
        </button>
      </div>
    </div>
  );
}

export default Banner;
