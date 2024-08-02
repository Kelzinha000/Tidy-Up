import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/Cadastro.jsx"
import Login from "./pages/Login/Login.jsx";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;