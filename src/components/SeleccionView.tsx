import React, { useState } from 'react';
import '../styles/SeleccionView.css';

const SeleccionView: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Datos quemados para la tabla
    const terrenos = [
        { codigo: 'T-001', tamanio: '10 ha', areaCultivo: '8 ha', analisis: 'Óptimo', costoOportunidad: '$5000', analisisPatologico: 'Sin plagas', ubicacion: 'Provincia A' },
        { codigo: 'T-002', tamanio: '15 ha', areaCultivo: '12 ha', analisis: 'Regular', costoOportunidad: '$3000', analisisPatologico: 'Plaga leve', ubicacion: 'Provincia B' },
        { codigo: 'T-003', tamanio: '5 ha', areaCultivo: '4 ha', analisis: 'Óptimo', costoOportunidad: '$2000', analisisPatologico: 'Sin plagas', ubicacion: 'Provincia C' },
        { codigo: 'T-004', tamanio: '8 ha', areaCultivo: '6 ha', analisis: 'Deficiente', costoOportunidad: '$1000', analisisPatologico: 'Plaga grave', ubicacion: 'Provincia D' },
        { codigo: 'T-005', tamanio: '12 ha', areaCultivo: '10 ha', analisis: 'Óptimo', costoOportunidad: '$4000', analisisPatologico: 'Sin plagas', ubicacion: 'Provincia E' },
        { codigo: 'T-006', tamanio: '20 ha', areaCultivo: '15 ha', analisis: 'Regular', costoOportunidad: '$6000', analisisPatologico: 'Plaga leve', ubicacion: 'Provincia F' },
        { codigo: 'T-007', tamanio: '7 ha', areaCultivo: '5 ha', analisis: 'Óptimo', costoOportunidad: '$2500', analisisPatologico: 'Sin plagas', ubicacion: 'Provincia G' },
        { codigo: 'T-008', tamanio: '9 ha', areaCultivo: '7 ha', analisis: 'Deficiente', costoOportunidad: '$1800', analisisPatologico: 'Plaga moderada', ubicacion: 'Provincia H' },
        { codigo: 'T-009', tamanio: '14 ha', areaCultivo: '11 ha', analisis: 'Óptimo', costoOportunidad: '$4500', analisisPatologico: 'Sin plagas', ubicacion: 'Provincia I' },
        { codigo: 'T-010', tamanio: '18 ha', areaCultivo: '14 ha', analisis: 'Regular', costoOportunidad: '$5500', analisisPatologico: 'Plaga leve', ubicacion: 'Provincia J' },
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
            <h2 className="header-title">Selección del terreno</h2>

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
                                {currentData.map((terreno, index) => (
                                    <tr key={index}>
                                        <td>{terreno.codigo}</td>
                                        <td>{terreno.tamanio}</td>
                                        <td>{terreno.areaCultivo}</td>
                                        <td>{terreno.analisis}</td>
                                        <td>{terreno.costoOportunidad}</td>
                                        <td>{terreno.analisisPatologico}</td>
                                        <td>{terreno.ubicacion}</td>
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
        </div>
    );
};

export default SeleccionView;
