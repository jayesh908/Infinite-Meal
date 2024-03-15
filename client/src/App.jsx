
import './App.css'
import Header from './Component/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Body from './Component/Body'
import About from './Component/About'
import Contactus from './Component/Contactus'
import ErrorComp from './Component/ErrorComp'
import Restromenu from './Component/Restromenu'
// import Bodyy from './Component/Bodyy'
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<ErrorComp />}></Route>
        <Route path='/' element={<Body />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contactus />}></Route>
          <Route path='/contact' element={<Contactus />}></Route>
          <Route path='/restaurant/:resid' element={<Restromenu />}></Route>
     
      </Routes>
    </Router>
  )
}

export default App
