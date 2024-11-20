import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SeleccionView from './components/SeleccionView';

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <NavBar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="/seleccion" element={<SeleccionView />} />
                        {/* Puedes añadir más rutas aquí */}
                        <Route path="/" element={<h1>Bienvenido a Agronomi</h1>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
