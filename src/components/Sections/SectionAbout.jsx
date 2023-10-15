import styled from "styled-components";

function SectionAbout() {
  return (
    <section id="nosotros">
      <ContainerAbout>
        <div className="container">
          <div className="containerImage">
            <img
              src="https://images.pexels.com/photos/6036008/pexels-photo-6036008.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="foto_chef"
            />
          </div>
        </div>
        <div className="containerText">
          <h1>Nosotros</h1>
          <span></span>
          <hr />
          <p>
            "Bienvenido a Mi Dulce Gladicita, donde la dulzura se convierte
            en arte. Nos enorgullecemos de endulzar tus momentos especiales con
            una exquisita variedad de postres y pasteles artesanales. Desde
            deliciosos cupcakes hasta magníficos pasteles de bodas, cada bocado
            está elaborado con pasión y cuidado. Además, nuestro servicio de
            catering personalizado lleva la magia de la repostería a tus
            eventos, brindando una experiencia gastronómica inolvidable.
            ¡Déjanos convertir tus sueños dulces en realidad!"
          </p>
        </div>
      </ContainerAbout>
    </section>
  );
}

export default SectionAbout;

const ContainerAbout = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 35em;
  background-color: papayawhip;
  .container {
    display: flex;
    justify-content: center;
  }
  .containerImage {
    padding-top: 2em;
    align-items: center;
  }
  div > img {
    height: 30rem;
    border-radius: 50%;
  }

  .containerText {
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: yellowgreen; */
  }
  @media only screen and (max-width: 445px) {
    .containerText {
      height: 40em;
    }
  }
  .containerText > h1 {
    color: #3c1f1f;
  }
  .containerText > p {
    text-align: center;
    line-height: 32px;
  }

  @media only screen and (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 70em;
    width: 100%;
    /* background-color: #2b3c91; */
  }
  @media only screen and (max-width: 445px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 1fr;
    align-items: center;
    height: 80em;
    width: 100%;
    /* background-color: #912b2b; */
    .containerImage {
      display: flex;
      align-items: center;
      height: 28rem;
      /* background-color: orange; */
      img {
        height: 25rem;
      }
    }
    .container {
      height: 30rem;
      display: flex;
      align-items: center;
      /* background-color: cyan; */
    }
  }
`;
