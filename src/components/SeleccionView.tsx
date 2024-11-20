import React, { useState } from 'react';
import '../styles/SeleccionView.css';

const SeleccionView: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [terrenos, setTerrenos] = useState<any[]>([]); // Datos de la tabla

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="seleccion-view">
            <h2 className="header-title">Selección del terreno</h2>

            <div className="card">
                <div className="card-header">
                    Datos registrados
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <button
                                className="btn btn-success"
                                onClick={openModal}
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                    <hr />
                    <table id="table" className="table">
                        <thead>
                            <tr>
                                <th>Terreno</th>
                                <th>Tamaño</th>
                                <th>Área de cultivo</th>
                                <th>Análisis</th>
                                <th>Costo de oportunidad</th>
                                <th>Análisis Patológico</th>
                                <th>Ubicación</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {terrenos.map((terreno, index) => (
                                <tr key={index}>
                                    <td>{terreno.codigo}</td>
                                    <td>{terreno.tamanio}</td>
                                    <td>{terreno.areaCultivo}</td>
                                    <td>{terreno.analisis}</td>
                                    <td>{terreno.costoOportunidad}</td>
                                    <td>{terreno.analisisPatologico}</td>
                                    <td>{terreno.ubicacion}</td>
                                    <td>
                                        <button className="btn btn-primary">Editar</button>
                                        <button className="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Registro de información para selección del terreno</h5>
                            <button onClick={closeModal}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <label>Código del terreno</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="T-XXX"
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label>Tamaño en hectáreas</label>
                                        <input type="number" className="form-control" required />
                                    </div>
                                    <div className="col">
                                        <label>Área de cultivo en hectáreas</label>
                                        <input type="number" className="form-control" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Análisis del terreno</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="col">
                                        <label>Costo de Oportunidad</label>
                                        <input type="number" className="form-control" required />
                                    </div>
                                    <div className="col">
                                        <label>Análisis patológico</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Provincia</label>
                                        <select className="form-select">
                                            <option value="0">Seleccione</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label>Cantón</label>
                                        <select className="form-select">
                                            <option value="0">Seleccione</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label>Distrito</label>
                                        <select className="form-select">
                                            <option value="0">Seleccione</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={closeModal}>
                                Cerrar
                            </button>
                            <button className="btn btn-success">Guardar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeleccionView;
