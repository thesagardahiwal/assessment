import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FindDockter from './pages/FindDockter'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/find' element={<FindDockter/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App