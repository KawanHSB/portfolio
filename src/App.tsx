import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Projetos from './Pages/Projetos'
import Techs from './Pages/Techs'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route
          path='/projetos'
          element={
            <Projetos/>
          }
        />
        <Route
          path='/techs'
          element={
            <Techs/>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
