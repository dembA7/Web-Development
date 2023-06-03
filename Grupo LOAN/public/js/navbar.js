var botonCotizacion = document.getElementById('botonCotizacion');

function cambiarTextoBoton() {
  var width = window.innerWidth;
  if (width < 992) {
    botonCotizacion.textContent = 'Contáctanos';
  } else {
    botonCotizacion.textContent = 'Cotiza con nosotros';
  }
}

window.addEventListener('load', cambiarTextoBoton);
window.addEventListener('resize', cambiarTextoBoton);