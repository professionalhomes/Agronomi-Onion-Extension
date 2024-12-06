import React, { useState } from 'react';
import '../styles/Views.css';

const SiembraView: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Datos quemados para la tabla
    const terrenos = [
        { codigo: 'T-001', costoManoObraAnimal: '$500', costoManoObraSiembra: '$400', costoFertilizacion: '$300', costoSemilla: '$200' },
        { codigo: 'T-002', costoManoObraAnimal: '$550', costoManoObraSiembra: '$450', costoFertilizacion: '$350', costoSemilla: '$250' },
        { codigo: 'T-003', costoManoObraAnimal: '$600', costoManoObraSiembra: '$500', costoFertilizacion: '$400', costoSemilla: '$300' },
        { codigo: 'T-004', costoManoObraAnimal: '$650', costoManoObraSiembra: '$550', costoFertilizacion: '$450', costoSemilla: '$350' },
        { codigo: 'T-005', costoManoObraAnimal: '$700', costoManoObraSiembra: '$600', costoFertilizacion: '$500', costoSemilla: '$400' },
        { codigo: 'T-006', costoManoObraAnimal: '$750', costoManoObraSiembra: '$650', costoFertilizacion: '$550', costoSemilla: '$450' },
        { codigo: 'T-007', costoManoObraAnimal: '$800', costoManoObraSiembra: '$700', costoFertilizacion: '$600', costoSemilla: '$500' },
        { codigo: 'T-008', costoManoObraAnimal: '$850', costoManoObraSiembra: '$750', costoFertilizacion: '$650', costoSemilla: '$550' },
        { codigo: 'T-009', costoManoObraAnimal: '$900', costoManoObraSiembra: '$800', costoFertilizacion: '$700', costoSemilla: '$600' },
        { codigo: 'T-010', costoManoObraAnimal: '$950', costoManoObraSiembra: '$850', costoFertilizacion: '$750', costoSemilla: '$650' },
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
            <h2 className="header-title">Siembra del terreno</h2>

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
                                    <th>Costo mano de obra animal</th>
                                    <th>Costo mano de obra siembra</th>
                                    <th>Costo Por Fertilizacion</th>
                                    <th>Costo de semilla</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((terreno, index) => (
                                    <tr key={index}>
                                        <td>{terreno.codigo}</td>
                                        <td>{terreno.costoManoObraAnimal}</td>
                                        <td>{terreno.costoManoObraSiembra}</td>
                                        <td>{terreno.costoFertilizacion}</td>
                                        <td>{terreno.costoSemilla}</td>
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

export default SiembraView;
