import React, { useState } from 'react';
import '../styles/Views.css';

const TratamientoView: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Datos quemados para la tabla
    const terrenos = [
        { codigo: 'T-001', actividad: 'Riego', costoHora: '$25', horasAsignadas: '10', costoActividad: '$250' },
        { codigo: 'T-002', actividad: 'Fertilización', costoHora: '$30', horasAsignadas: '8', costoActividad: '$240' },
        { codigo: 'T-003', actividad: 'Siembra', costoHora: '$20', horasAsignadas: '12', costoActividad: '$240' },
        { codigo: 'T-004', actividad: 'Control de Plagas', costoHora: '$35', horasAsignadas: '5', costoActividad: '$175' },
        { codigo: 'T-005', actividad: 'Cosecha', costoHora: '$40', horasAsignadas: '15', costoActividad: '$600' },
        { codigo: 'T-006', actividad: 'Limpieza', costoHora: '$15', horasAsignadas: '20', costoActividad: '$300' },
        { codigo: 'T-007', actividad: 'Deshierbe', costoHora: '$18', horasAsignadas: '12', costoActividad: '$216' },
        { codigo: 'T-008', actividad: 'Labranza', costoHora: '$22', horasAsignadas: '14', costoActividad: '$308' },
        { codigo: 'T-009', actividad: 'Fumigación', costoHora: '$28', horasAsignadas: '10', costoActividad: '$280' },
        { codigo: 'T-010', actividad: 'Siembra', costoHora: '$20', horasAsignadas: '18', costoActividad: '$360' },
    ];
    

    // Lógica para paginación
    const totalPages = Math.ceil(terrenos.length / rowsPerPage);
    const currentData = terrenos.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reinicia a la primera página
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="seleccion-view">
            <h2 className="header-title">Tratamiento del terreno</h2>

            <div className="card">
                <div className="card-header">Datos registrados</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-success" onClick={openModal}>
                                Agregar
                            </button>
                        </div>
                        <div className="col-6 text-end">
                            <label style={{ color: '#242424' }}>
                                Registros por pagina mostrados:
                                <select
                                    value={rowsPerPage}
                                    onChange={handleRowsPerPageChange}
                                    className="form-select d-inline mx-2"
                                    style={{ width: 'auto' }}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <hr />
                    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
                        <table id="table" className="table">
                            <thead>
                                <tr>
                                    <th>Terreno</th>
                                    <th>Actividad</th>
                                    <th>Costo Hora</th>
                                    <th>Horas Asignadas</th>
                                    <th>Costo de Actividad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((terreno, index) => (
                                    <tr key={index}>
                                        <td>{terreno.codigo}</td>
                                        <td>{terreno.actividad}</td>
                                        <td>{terreno.costoHora}</td>
                                        <td>{terreno.horasAsignadas}</td>
                                        <td>{terreno.costoActividad}</td>
                                        <td>
                                            <button className="btn btn-primary btn-edit">Editar</button>
                                            <button className="btn btn-danger btn-delete">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Paginación */}
                    <div className="pagination">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        >
                            &laquo;
                        </button>
                        {[...Array(totalPages)].map((_, page) => (
                            <button
                                key={page}
                                className={currentPage === page + 1 ? 'active' : ''}
                                onClick={() => setCurrentPage(page + 1)}
                            >
                                {page + 1}
                            </button>
                        ))}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        >
                            &raquo;
                        </button>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h5>Agregar Nuevo Terreno</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Código del Terreno:</label>
                                    <input type="text" className="form-control" placeholder="T-XXX" />
                                </div>
                                <div className="form-group">
                                    <label>Tamaño:</label>
                                    <input type="text" className="form-control" placeholder="Ej: 10 ha" />
                                </div>
                                <div className="form-group">
                                    <label>Área de Cultivo:</label>
                                    <input type="text" className="form-control" placeholder="Ej: 8 ha" />
                                </div>
                                <div className="form-group">
                                    <label>Análisis:</label>
                                    <input type="text" className="form-control" placeholder="Ej: Óptimo" />
                                </div>
                                <div className="form-group">
                                    <label>Costo de Oportunidad:</label>
                                    <input type="text" className="form-control" placeholder="Ej: $5000" />
                                </div>
                                <div className="form-group">
                                    <label>Análisis Patológico:</label>
                                    <input type="text" className="form-control" placeholder="Ej: Sin plagas" />
                                </div>
                                <div className="form-group">
                                    <label>Ubicación:</label>
                                    <input type="text" className="form-control" placeholder="Provincia, Cantón, Distrito" />
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

export default TratamientoView;
