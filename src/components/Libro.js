import React, { useState } from "react";

function Libro(props) {
    const [verMas, setVerMas] = useState(false);

    let sectionVerMas = <button 
                        onClick={() => setVerMas(true)}
                        className="btn btn-success">Ver más</button>

    if(verMas)
    {
        sectionVerMas = <div>
            <button
                type="button"
                onClick={() => setVerMas(false)}
                className="btn-close float-end"
                aria-label="close" />  
            <hr />
            {props.value.descripcion}
        </div>
    }

    return (
        <div className="col-md-4" style={{ height: '100%' }}>
            <div className="card mb-3" >
                <img src={props.value.imagen} className="card-img-top" alt="..." style={{ height: '300px' }}/>
                <div className="card-body" >
                    <h5 className="card-title" >{props.value.titulo}</h5>
                    <p className="card-text" >{props.value.descripcion.substring(0, 50)}</p>  
                    {sectionVerMas}
                    <button 
                        onClick={()=>props.fnAddFavorites(props.value)}
                        className="btn btn-warning">Favorito</button>
                    <button 
                        onClick={()=>props.BookDetailsModal(props.value)}
                        className="btn btn-primary">Detalles</button>
                </div>
            </div>
        </div>
    )
}

export default Libro;
