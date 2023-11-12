function Carrusel() {
  const imageStyle = {
    height: '500px', // Ajusta la altura deseada aquí
  };

  return (
    <div id="carouselExampleControls" className="col-md-6 carousel slide" data-bs-ride="carousel" data-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/libros1.png" className="d-block w-100" alt="..." style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src="./images/libros2.jpg" className="d-block w-100" alt="..." style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src="./images/libros3.jpg" className="d-block w-100" alt="..." style={imageStyle} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;
