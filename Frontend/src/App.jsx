import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Section02 from "./Setion02/Section02";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../src/pages/cadastro/cadastro.jsx"
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
   <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
      <Header />
      <Login />
      <Section02 />
      <Footer />
      
    </>
  )
}

export default App;