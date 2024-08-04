import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/PagCadastro.jsx"
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import AddRelatorio from "./pages/AddRelatorio/AddRelatorio.jsx";
import RelatoriosADM from "./pages/RelatoriosADM/RelatoriosADM.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path="/addRelatorio" element={<AddRelatorio/>}/>
          <Route path="/relatorios" element={<RelatoriosADM/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;