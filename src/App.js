import './App.css';
import './HeaderApp.css';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import PageTestimonios from './pages/PageTestimonios';
import PageContador from './pages/PageContador';
import PageCalculadora from './pages/PageCalculadora';
import PageTareas from './pages/PageTareas';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <NavLink className="link" to={'/'}>Testimonios</NavLink>
        <NavLink className="link" to={'/contador'}>Contador</NavLink>
        <NavLink className="link" to={'/calculadora'}>Calculadora</NavLink>
        <NavLink className="link" to={'/tareas'}>Tareas</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<PageTestimonios/>}/>
        <Route path="/contador" element={<PageContador/>}/>
        <Route path="/calculadora" element={<PageCalculadora/>}/>
        <Route path="/tareas" element={<PageTareas/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
