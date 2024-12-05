import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SeleccionView from './components/SeleccionView';
import LabranzaView from './components/LabranzaView';
import TratamientoView from './components/TratamientoView';
import SiembraView from './components/SiembraView';
import CosechaView from './components/CosechaView';
import '../src/styles/NavBar.css';

const App: React.FC = () => {
    // Estado para controlar si el navbar está abierto o cerrado
    const [isNavOpen, setIsNavOpen] = useState(true);

    return (
        <Router>
            <div className="app" style={{ display: 'flex' }}>
                {/* Pasamos el estado y el controlador al navbar */}
                <NavBar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
                <div
                    className={`content ${isNavOpen ? '' : 'collapsed'}`}
                    style={{
                        flex: 1,
                        padding: '20px',
                        marginLeft: isNavOpen ? '250px' : '70px', // Ajuste dinámico del margen
                        transition: 'margin-left 0.3s ease', // Transición suave
                    }}
                >
                    <Routes>
                        <Route path="/seleccion" element={<SeleccionView />} />
                        <Route path="/labranza" element={<LabranzaView />} />
                        <Route path="/tratamiento" element={<TratamientoView />} />
                        <Route path="/siembra" element={<SiembraView />} />
                        <Route path="/cosecha" element={<CosechaView />} />
                        {/* Otras rutas */}
                        <Route path="/" element={<h1 style={{ color: '#242424' }}>Bienvenido a Agronomi Cebolla</h1>} />s
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;