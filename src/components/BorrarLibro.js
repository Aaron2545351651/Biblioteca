import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BorrarLibro(props) {
    const { show, handleClose, libro } = props;

    const handleConfirm = async () => {
        try {
            console.log(`ID del libro a eliminar: ${libro.idlibro}`); // Añade esta línea
            const response = await fetch(`http://localhost:4000/libros/${libro.idlibro}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el libro');
            }

            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar eliminación</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Estás seguro de que quieres eliminar el libro {libro.titulo}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    No
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Sí, eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BorrarLibro;