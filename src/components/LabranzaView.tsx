import React, { useState } from 'react';
import '../styles/Views.css';

const LabranzaView: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Datos quemados para la tabla
    const terrenos = [
        { codigo: 'T-001', costoArado: '$500', costoEnmiendas: '$300', costoTrazado: '$200', costoCamas: '$400', costoMurillo: '$150', costoRastra: '$250' },
        { codigo: 'T-002', costoArado: '$600', costoEnmiendas: '$350', costoTrazado: '$250', costoCamas: '$450', costoMurillo: '$200', costoRastra: '$300' },
        { codigo: 'T-003', costoArado: '$550', costoEnmiendas: '$400', costoTrazado: '$300', costoCamas: '$500', costoMurillo: '$250', costoRastra: '$350' },
        { codigo: 'T-004', costoArado: '$700', costoEnmiendas: '$450', costoTrazado: '$350', costoCamas: '$550', costoMurillo: '$300', costoRastra: '$400' },
        { codigo: 'T-005', costoArado: '$800', costoEnmiendas: '$500', costoTrazado: '$400', costoCamas: '$600', costoMurillo: '$350', costoRastra: '$450' },
        { codigo: 'T-006', costoArado: '$900', costoEnmiendas: '$550', costoTrazado: '$450', costoCamas: '$650', costoMurillo: '$400', costoRastra: '$500' },
        { codigo: 'T-007', costoArado: '$1000', costoEnmiendas: '$600', costoTrazado: '$500', costoCamas: '$700', costoMurillo: '$450', costoRastra: '$550' },
        { codigo: 'T-008', costoArado: '$1100', costoEnmiendas: '$650', costoTrazado: '$550', costoCamas: '$750', costoMurillo: '$500', costoRastra: '$600' },
        { codigo: 'T-009', costoArado: '$1200', costoEnmiendas: '$700', costoTrazado: '$600', costoCamas: '$800', costoMurillo: '$550', costoRastra: '$650' },
        { codigo: 'T-010', costoArado: '$1300', costoEnmiendas: '$750', costoTrazado: '$650', costoCamas: '$850', costoMurillo: '$600', costoRastra: '$700' },
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
            <h2 className="header-title">Labranza del terreno</h2>

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
                                    <th>Costo por arado</th>
                                    <th>Costo por enmiendas</th>
                                    <th>Costo por trazado</th>
                                    <th>Costo por camas</th>
                                    <th>Costo por murillo</th>
                                    <th>Costo por rastra</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((terreno, index) => (
                                    <tr key={index}>
                                        <td>{terreno.codigo}</td>
                                        <td>{terreno.costoArado}</td>
                                        <td>{terreno.costoEnmiendas}</td>
                                        <td>{terreno.costoTrazado}</td>
                                        <td>{terreno.costoCamas}</td>
                                        <td>{terreno.costoMurillo}</td>
                                        <td>{terreno.costoRastra}</td>
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

export default LabranzaView;
