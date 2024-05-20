import { GlobalCSS } from './styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Perfil from './assets/pages/Perfil'
import Home from './assets/pages/Home'

const App = () => {
  return (
    <>
      <GlobalCSS />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
