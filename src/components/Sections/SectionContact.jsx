import "../../styles/contacto.estilos.css";

function SectionContact() {
  return (
    <section id="contacto">
      <div className="wraper-contact">
        <div className="container-contact">
          <div className="cabecera">
            <h1>Contacto</h1>
            <h4>Info@mysitio.com / telf: 999 999 999</h4>
            <h4>_____________</h4>
            <p>
              Ponte en contacto con nostros, atenderemos muy cordialmente tu
              pedido.
            </p>
            <p>Escribenos a nuestro email.</p>
          </div>
          <div className="wraper">
            <form action="https://formsubmit.co/jonatanpacora@gmail.com" method="POST">
              <div className="container-formulario">
                <div className="cf-datos">
                  <div className="box">
                    <label htmlFor="name">Tu Nombre</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="box">
                    <label htmlFor="email">Correo</label>
                    <input type="email" name="email" id="email" />
                  </div>
                  <div className="box">
                    <label htmlFor="tema">Tema</label>
                    <input type="text" name="tema" id="tema" />
                  </div>
                  <div className="box">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" name="telefono" id="telefono" />
                  </div>
                </div>
                <div className="cf-mensaje">
                  <div className="box">
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" cols="50" rows="10" />
                  </div>
                </div>
                
              </div>
              <div className="container-btn">
                   <input type="submit" value="Enviar" className="mybutton"></input>              
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
