import Saludo from './components/Saludo';
import Carrusel from './components/Carrusel';
import ListLibros from './components/ListLibros';
import dataLibro from './data/Libro';
import { useState } from 'react';
import ListFavoritos from './components/ListFavoritos';
import CrearLibro from './components/CrearLibro';


function App() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: `url('./images/OIP.jpg') no-repeat `,
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen al contenedor
  };
  const color = {
    color: 'white',
    fontFamily: 'Monaco',
    fontWeight: 'bold',
  };

  function addLibroToFavorites(element) {
    // Verificar si el producto ya está en el carrito
    if (!listLibrosFavoritos.some(item => item.idlibro === element.idlibro)) {
      setListLibrosFavoritos([...listLibrosFavoritos, element]);
    } else {
      // Producto ya en el carrito, mostrar un mensaje o realizar alguna acción
      console.log('El libro ya está en Favoritos.');
    }
  }

  function nuevoLibro(element) {
    setListLibros([...listLibros, element]);
  }

  // Función para eliminar un elemento del carrito
  function eliminarDeFavorito(libroId) {
    const nuevoFavorito = listLibrosFavoritos.filter(element => element.idlibro !== libroId);
    setListLibrosFavoritos(nuevoFavorito);
  }

  const [listLibros, setListLibros] = useState(dataLibro);
  const [listLibrosFavoritos, setListLibrosFavoritos] = useState([])

  return (
    <div style={containerStyle}>
      <h1 style={color}>BIBLIOTECA "EL PARAISO DE LOS LIBROS"</h1>
      <br/>
      <Saludo />
      <br/>
      <br/>
      <Carrusel />
      <br/>
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            <h2 style={color}>Libros Destacados</h2><br/>
            <ListLibros 
              elements={listLibros}
              fnAddFavorites={addLibroToFavorites}/>
          </div>
          <div className='col-md-3'>
          <h2 style={color}>Agregar nuevo libro</h2>
            <CrearLibro fnNuevoLibro={nuevoLibro}/><br/>
            <ListFavoritos 
              elements={listLibrosFavoritos} 
              eliminarDeFavorito={eliminarDeFavorito}
              />
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <h5 style={color}>Facebook: BibliotecaElParaiso</h5><br/>
    </div>
  );
}

export default App;

