import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import DataProvider from "./components/Context/DataContext";
import CarritoContent from "./components/Carrito/CarritoContent";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};


function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Wrapper>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/productos" element={<Products></Products>}></Route>
          <Route path="/carrito" element={<CarritoContent></CarritoContent>}></Route>
        </Routes>

        </Wrapper>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
