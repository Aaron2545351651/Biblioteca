import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DetallesLibro(props) {
  const { show, handleClose, libro, handleEditClick, handleDeleteClick } = props;

  // Define funciones para manejar los eventos de los botones
  const handleEditar = () => {
    handleEditClick(libro);
  };

  const handleEliminar = () => {
    handleDeleteClick(libro);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Título:</strong> {libro.titulo}</p>
        <p><strong>Descripción:</strong> {libro.descripcion}</p>
        <p><strong>Año de publicación:</strong> {libro.anio}</p>
        <p><strong>Categoría:</strong> {libro.categoria}</p>
        <p><strong>Autor:</strong> {libro.nombreAutor}</p>
        <img src={libro.imagen} alt={libro.titulo} style={{ height: '300px' }}/>
        {/* Agrega botones aquí con eventos onClick */}
        <Button variant="primary" onClick={handleEditar} style={{ marginLeft: '40px' }}>Editar</Button>
        <Button variant="danger" onClick={handleEliminar} style={{ marginLeft: '30px' }}>Eliminar</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetallesLibro;
