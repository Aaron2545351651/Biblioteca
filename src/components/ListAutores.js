import dataAutor from '../data/Autor';
import Autor from './Autor';

function ListAutores() {
        
    let lstAutores = dataAutor.map(element =>{
        return <Autor
                    nombre={element.Nombre}
                    informacion={element.Informacion}
                    imagen={element.Images}
                />
    });

    return(
        <div className="col-md-6">
        <div className='row ml-auto'>
            {lstAutores}
        </div>
        </div>
    );
}

export default ListAutores;