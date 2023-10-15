import React from "react";
import styled from "styled-components";

function SectionServices() {
  return (
    <section id="servicios">
      <Contenedor>
        <div>
          <h1>Servicios</h1>
          <hr />
        </div>
        <div className="container">
          <div className="container-cards">
            <ModelCard>
              <img
                src="https://as1.ftcdn.net/v2/jpg/02/43/99/52/1000_F_243995298_v7QeqzMYgoMyNqZz1r7nUxBn4R1jlCoX.jpg"
                alt="Avatar"
              />
              <div className="contenido">
                <h4>
                  <b>Catering</b>
                </h4>
                <hr />
                <p>
                  "Nuestro servicio de catering ofrece una experiencia culinaria
                  excepcional para tus eventos más especiales. Desde bodas
                  elegantes hasta reuniones íntimas, nos aseguramos de que cada
                  plato sea una obra maestra de sabores exquisitos y
                  presentación impecable"
                </p>
              </div>
            </ModelCard>
            <ModelCard>
              <img
                src="https://i.pinimg.com/1200x/b0/91/22/b09122dee8e1bad4f385f0d2a7db13ad.jpg"
                alt="Avatar"
              />
              <div className="contenido">
                <h4>
                  <b>Pasteles Especiales</b>
                </h4>
                <hr />
                <p>
                  "Cada pastel es una expresión de creatividad y dedicación,
                  elaborado a medida para reflejar tu estilo y personalidad.
                  Desde aniversarios memorables hasta celebraciones únicas,
                  nuestros pasteles son el complemento perfecto para cualquier
                  ocasión especial"
                </p>
              </div>
            </ModelCard>
            <ModelCard>
              <img
                src="https://i.blogs.es/1c733d/postres/1366_2000.jpg"
                alt="Avatar"
              />
              <div className="contenido">
                <h4>
                  <b>Postres</b>
                </h4>
                <hr />
                <p>
                  "Cada postre es una combinación perfecta de ingredientes
                  frescos y técnicas artesanales, que te deleitarán con cada
                  bocado. Desde clásicos reconfortantes hasta creaciones
                  innovadoras, nuestros postres son el broche de oro para
                  cualquier comida o el antojo perfecto para cualquier momento
                  del día"
                </p>
              </div>
            </ModelCard>
          </div>
        </div>
      </Contenedor>
    </section>
  );
}

export default SectionServices;

const Contenedor = styled.div`
  height: auto;
  width: 100%;
  background-color: papayawhip;

  div > h1 {
    margin-left: 1em;
  }
  .container {
    /* background-color: green; */
    display: flex;
    justify-content: center;
  }
  .container-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    /* background-color: red; */
  }
`;

const ModelCard = styled.div`
  width: 300px;
  height: 500px;
  margin: 20px;
  border-radius: 20px;
  &:hover {
    box-shadow: 0 12px 20px 0 rgba(105, 48, 10, 0.651);
  }
  background-image: linear-gradient(
    to left bottom,
    #695f39,
    #766b48,
    #837858,
    #908568,
    #9d9278,
    #a09579,
    #a2977a,
    #a59a7b,
    #9d936d,
    #958c60,
    #8c8553,
    #837f46
  );
  box-shadow: 0 4px 8px 0 rgba(104, 58, 20, 0.689);
  transition: 0.9s;

  img {
    width: 100%;
  }

  .contenido {
    color: rgb(12, 12, 12);
  }
  h4{
    margin-left:10px ;
  }
`;
