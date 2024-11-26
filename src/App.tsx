import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CityPage from './pages/CityPage'
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/citypage' element={<CityPage />} />
    </Routes>
  )
}

export default App
