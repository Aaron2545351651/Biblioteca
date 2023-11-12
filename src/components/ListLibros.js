import React, { useState, useEffect } from "react";
import Libro from './Libro';
import BorrarLibro from './BorrarLibro';
import ActualizarLibro from './ActualizarLibro';
import DetallesLibro from './DetallesLibro';

function ListLibros(props) {
    const { fnAddFavorites } = props;
    const [libros, setLibros] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [libroToDelete, setLibroToDelete] = useState(null);
    const [libroToUpdate, setLibroToUpdate] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedLibro, setSelectedLibro] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

    useEffect(() => {
        fetch('http://localhost:4000/libros')
            .then(response => response.json())
            .then(data => setLibros(data.libros))
            .catch(error => console.error(error));
    }, []);

    const loadLibros = () => {
        fetch('http://localhost:4000/libros')
            .then(response => response.json())
            .then(data => setLibros(data.libros))
            .catch(error => console.error(error));
    };

    const closeAllModals = () => {
        setShowDeleteModal(false);
        setShowUpdateModal(false);
        setShowDetailsModal(false);
    };

    const handleOpenDeleteModal = (libro) => {
        setLibroToDelete(libro);
        closeAllModals();
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        loadLibros();
    };

    const handleOpenUpdateModal = (libro) => {
        setLibroToUpdate(libro);
        closeAllModals();
        setShowUpdateModal(true);
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        loadLibros();
    };

    const handleOpenDetailsModal = (libro) => {
        setSelectedLibro(libro);
        closeAllModals();
        setShowDetailsModal(true);
    };

    const handleCloseDetailsModal = () => {
        setShowDetailsModal(false);
    };

    const filteredLibros = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const listLibrosRendered = filteredLibros.map((libro) => (
        <Libro
            key={libro.libroid}
            value={libro}
            fnAddFavorites={fnAddFavorites}
            fnOpenDeleteModal={handleOpenDeleteModal}
            fnOpenUpdateModal={handleOpenUpdateModal}
            BookDetailsModal={handleOpenDetailsModal}
        />
    ));

    return (
        <div className="col-md-11">
            <div className="d-flex mb-2"> {/* Utilizamos d-flex para establecer una disposición en línea */}
            <input
                type="text"
                placeholder="Buscar por título"
                value={searchTerm}
                className="form-control"
                style={{ width: '10cm' }}
                required
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setSearchTerm("")} className="btn btn-secondary">Limpiar búsqueda</button>
            </div>
            <div className="row ml-auto">{listLibrosRendered}</div>
            {libroToDelete && (
                <BorrarLibro
                    show={showDeleteModal}
                    handleClose={handleCloseDeleteModal}
                    libro={libroToDelete}
                />
            )}
            {libroToUpdate && (
                <ActualizarLibro
                    show={showUpdateModal}
                    handleClose={handleCloseUpdateModal}
                    libro={libroToUpdate}
                />
            )}
            {selectedLibro && (
                <DetallesLibro
                    show={showDetailsModal}
                    handleClose={handleCloseDetailsModal}
                    libro={selectedLibro}
                    handleEditClick={handleOpenUpdateModal}
                    handleFavoriteClick={fnAddFavorites}
                    handleDeleteClick={handleOpenDeleteModal}
                />
            )}
        </div>
    );
}

export default ListLibros;
