
import "boxicons";
import Header from "../components/Header/Header";
import SectionAbout from "../components/Sections/SectionAbout";
import SectionFrase from "../components/Sections/SectionFrase";
import SectionServices from "../components/Sections/SectionServices";
import SectionContact from "../components/Sections/SectionContact";


function Home() {
    const listaImagenes = [
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8470233/pexels-photo-8470233.jpeg?auto=compress&cs=tinysrgb&w=600",
      ];
    
      const tamanio = listaImagenes.length;
    
  return (
    <>
    <Header imagenes={listaImagenes} size={tamanio}></Header>
    <SectionAbout></SectionAbout>
    <SectionFrase frase="Piensa positivo y endulza tu vida"></SectionFrase>
    <SectionServices></SectionServices>
    <SectionContact></SectionContact>    
  </>
  );
}

export default Home