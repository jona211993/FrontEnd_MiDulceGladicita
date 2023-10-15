import estilos from "../../styles/header.module.css";
import Banner from "../Banner/Banner";
import TheNavBar from "../NavBar/TheNavBar";

function Header({ imagenes,size }) {
  
  return (
    <section id="inicio" >
      <TheNavBar></TheNavBar>    
      <div className={estilos.espacio}>
       <br />
      </div>
      <Banner imagenes={imagenes} size={size}></Banner>    
    </section>
  );
}

export default Header;
