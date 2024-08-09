import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/PagCadastro.jsx"
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import AddRelatorio from "./pages/AddRelatorio/AddRelatorio.jsx";
import Relatorios from "./pages/Relatorios/Relatorios.jsx"
import Perfil from "./pages/Perfil/Perfil.jsx";
import LoginAdm from "./pages/LoginAdm/LoginAdm.jsx";
import ListarFuncionarios from "./pages/ListarFuncionarios/ListarFuncionarios.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path="/addRelatorio" element={<AddRelatorio />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/LoginAdm" element={<LoginAdm />} />
        <Route path="/funcionarios" element={<ListarFuncionarios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;