import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import DashboardUser from '../pages/DashboardUser'
function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/user' element={<DashboardUser/>}></Route>
    </Routes>
  )
}

export default App
