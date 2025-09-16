import fondoP from '../src/assets/FONDO-A.jpg'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  
  return (
    <div className='min-h-screen bg-cover bg bg-center'
    style={{ backgroundImage: `url(${fondoP})` }}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;