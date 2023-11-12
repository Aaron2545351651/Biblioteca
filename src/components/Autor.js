import { useState } from "react";

function Autor(props) {
    

    const [verImagen, setVerImagen] = useState(false);
    
    let sectionVerImagen = (
        <button 
            onClick={() => setVerImagen(true)}
            className="btn btn-primary"
        >
            Foto del Autor
        </button>
    );

    if (verImagen) {
        sectionVerImagen = (
            <div>
                <button
                    type="button"
                    onClick={() => setVerImagen(false)}
                    className="btn-close float-end"
                    aria-label="close"
                />
                <hr />
                <img src={props.imagen} className="card-img-top" alt="..."/>
            </div>
        );
    }

    return (
        <div className="col-md-4">
            <div className="card mb-3" style={{ height: '100%' }}>
                <div className="card-body">
                    <h5 className="card-tittle">{props.nombre}</h5>
                    {sectionVerImagen}
                    <p className="card-text">{props.informacion}</p>         
                </div>
            </div>
        </div>
    )
}

export default Autor;
