import { Routes, Route } from 'react-router-dom';
import fondo from './assets/fondo.jpg'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className='min-h-screen bg-cover bg-center'
    style={{ backgroundImage: `url(${fondo})` }}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;