import { Provider } from 'react-redux'
import { GlobalCSS } from './styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Perfil from './assets/pages/Perfil'
import Home from './assets/pages/Home'
import { store } from './store'
import Cart from './components/Cart'

const App = () => {
  const isMobile = window.innerWidth <= 960

  if (isMobile) {
    return <h1>Only available for desktops</h1>
  }
  return (
    <Provider store={store}>
      <GlobalCSS />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Perfil />} />
        </Routes>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}
export default App
