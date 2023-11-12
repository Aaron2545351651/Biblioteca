import Favorito from "./Favorito"

function ListFavoritos(props) {

    const color = {
        color: 'white',
        fontFamily: 'Monaco',
        fontWeight: 'bold',
      };

    const listaFavoritosRedered = props.elements.map(element => (
        <Favorito
        key={element.idlibro} // Asigna 'element.Id' como clave única 
        value={element} 
        eliminarDeFavorito={props.eliminarDeFavorito} // Pasa la función para eliminar productos
        />
    ));

    return(
        <div>
            <h2 style={color}>Libros favoritos</h2>
            {listaFavoritosRedered}
        </div>
    );
}

export default ListFavoritos;



 
  

 



