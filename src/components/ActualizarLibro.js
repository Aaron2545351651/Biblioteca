import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ActualizarLibro(props) {
    const { show, handleClose, libro } = props;
    const [updatedLibro, setUpdatedLibro] = useState({ ...libro });
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        setUpdatedLibro({ ...libro });
    }, [libro]);

    const handleInputChange = (event) => {
        setUpdatedLibro({ ...updatedLibro, [event.target.name]: event.target.value });
    };

    const handleConfirm = async () => {
        try {
            console.log(`ID del libro a actualizar: ${libro.idlibro}`);
            const response = await fetch(`http://localhost:4000/Actualizar/${libro.idlibro}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedLibro),
            });

            if (!response.ok) {
                // Manejar errores como lo estás haciendo actualmente
                // ...
            } else {
                // Mostrar el modal de éxito
                setShowSuccessModal(true);
                handleClose(); // Cierra el modal de actualización
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" name="titulo" value={updatedLibro.titulo} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" name="descripcion" value={updatedLibro.descripcion} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Imagen URL</Form.Label>
                        <Form.Control type="text" name="imagen" value={updatedLibro.imagen} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Año de publicacion</Form.Label>
                        <Form.Control type="text" name="anio" value={updatedLibro.anio} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type="text" name="categoria" value={updatedLibro.categoria} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" name="nombreAutor" value={updatedLibro.nombreAutor} onChange={handleInputChange} />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Actualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualización exitosa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    El libro se ha actualizado correctamente.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActualizarLibro;
