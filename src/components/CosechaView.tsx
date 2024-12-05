import React, { useState } from 'react';
import '../styles/Views.css';

const CosechaView: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Datos quemados para la tabla
    const terrenos = [
        { codigo: 'T-001', costoArranque: '$300', costoLavado: '$200', costoSaco: '$100', costoTransporte: '$400' },
        { codigo: 'T-002', costoArranque: '$350', costoLavado: '$250', costoSaco: '$150', costoTransporte: '$450' },
        { codigo: 'T-003', costoArranque: '$400', costoLavado: '$300', costoSaco: '$200', costoTransporte: '$500' },
        { codigo: 'T-004', costoArranque: '$450', costoLavado: '$350', costoSaco: '$250', costoTransporte: '$550' },
        { codigo: 'T-005', costoArranque: '$500', costoLavado: '$400', costoSaco: '$300', costoTransporte: '$600' },
        { codigo: 'T-006', costoArranque: '$550', costoLavado: '$450', costoSaco: '$350', costoTransporte: '$650' },
        { codigo: 'T-007', costoArranque: '$600', costoLavado: '$500', costoSaco: '$400', costoTransporte: '$700' },
        { codigo: 'T-008', costoArranque: '$650', costoLavado: '$550', costoSaco: '$450', costoTransporte: '$750' },
        { codigo: 'T-009', costoArranque: '$700', costoLavado: '$600', costoSaco: '$500', costoTransporte: '$800' },
        { codigo: 'T-010', costoArranque: '$750', costoLavado: '$650', costoSaco: '$550', costoTransporte: '$850' },
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
            <h2 className="header-title">Cosecha del terreno</h2>

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
                                    <th>Costo mano de obra de arranque</th>
                                    <th>Costo Por Lavado</th>
                                    <th>Costo Por Saco</th>
                                    <th>Costo Por Transporte Carga</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((terreno, index) => (
                                    <tr key={index}>
                                        <td>{terreno.codigo}</td>
                                        <td>{terreno.costoArranque}</td>
                                        <td>{terreno.costoLavado}</td>
                                        <td>{terreno.costoSaco}</td>
                                        <td>{terreno.costoTransporte}</td>
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

export default CosechaView;
