function Saludo(){
    const estiloFondo = {
        backgroundColor: 'rgba(240, 240, 240, 0.5) ',
    };

    return(
                <div class="accordion col-md-6" id="accordionExample" >
        <div class="accordion-item" style={estiloFondo}>
            <h2 class="accordion-header" >
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={estiloFondo}>
                Descripción de la biblioteca
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Bienvenidos a 'El Paraíso de los Libros'</strong> un rincón literario donde los sueños y las aventuras esperan ser descubiertos entre las páginas de innumerables historias. Nuestra biblioteca es un refugio para los amantes de la lectura de todas las edades y gustos. Desde los clásicos atemporales hasta las voces contemporáneas más cautivadoras, aquí encontrarás un mundo de conocimiento, imaginación y emoción. Sumérgete en un océano de letras y deja que los libros te transporten a lugares lejanos, te hagan reír, llorar, soñar y aprender. 'El Paraíso de los Libros' es más que una biblioteca, es un santuario para la mente y el alma, un lugar donde cada libro es un portal hacia la magia y el descubrimiento. ¡Únete a nosotros en esta maravillosa aventura literaria!
            </div>
            </div>
        </div>
        <div class="accordion-item" style={estiloFondo}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={estiloFondo}>
                Frase de la biblioteca
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong/>"En El Paraíso de los Libros, cada página es una puerta abierta a un mundo nuevo por descubrir."
            </div>
            </div>
        </div>
        <div class="accordion-item" style={estiloFondo}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={estiloFondo}>
                Dirección de la biblioteca
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong/>Visitanos del pali de guadalupe 75 vrs al sur
            </div>
            </div>
        </div>
        </div>
    )
    };

export default Saludo;