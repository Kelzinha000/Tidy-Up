import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/PagCadastro.jsx"
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/Home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;