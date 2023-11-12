function Favorito(props) {
    const { value, eliminarDeFavorito } = props;
  
    const clickEliminar = () => {
      eliminarDeFavorito(value.idlibro); // Llama a la función de eliminación con el ID del producto
    };
  

    return(
        <div className="alert alert-info p-0" role="alert" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <img width="50px" src={props.value.imagen} alt=""/>
                <small>{props.value.titulo}</small>
            </div>
            <button onClick={clickEliminar} className="btn btn-danger">Eliminar</button>
        </div>

    );
}

export default Favorito;



  