import React, { useState } from "react";

function CrearLibro(props) {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [anio, setAnio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [nombreAutor, setNombreAutor] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        // Crea un objeto con los datos del formulario
        const nuevoLibro = {
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen,
            anio: anio,
            categoria: categoria,
            nombreAutor: nombreAutor
        };

        // Realiza una solicitud HTTP para enviar los datos al servidor
        fetch('http://localhost:4000/crear-libro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoLibro)
        })
        .then(response => response.json())
        .then(data => {
            // Maneja la respuesta del servidor aquí
            console.log(data);
            // Limpia los campos después de enviar los datos
            setTitulo("");
            setDescripcion("");
            setImagen("");
            setAnio("");
            setCategoria("");
            setNombreAutor("");
        })
        .catch(error => {
            // Maneja cualquier error de la solicitud aquí
            console.error(error);
        });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="border border-2 border-secondary p-2 rounded">
            <input
                placeholder="Titulo"
                className="form-control mb-2"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
            />
            <input
                placeholder="Descripcion"
                className="form-control mb-2"
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
            />
            <input
                placeholder="Imagen"
                className="form-control mb-2"
                type="text"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                required
            />
            <input
                placeholder="Año"
                className="form-control mb-2"
                type="text"
                value={anio}
                onChange={(e) => setAnio(e.target.value)}
                required
            />
            <input
                placeholder="Categoria"
                className="form-control mb-2"
                type="text"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
            />
            <input
                placeholder="Nombre del Autor"
                className="form-control mb-2"
                type="text"
                value={nombreAutor}
                onChange={(e) => setNombreAutor(e.target.value)}
                required
            />
            <input type="submit" value="Crear" className="btn btn-primary" />
        </form>
    );
}

export default CrearLibro;
