// Lista de imágenes de "anuncios" (pueden ser gifs, jpg, png, etc.)
const IMAGENES = [
  'gyat.gif',
  'https://i.pinimg.com/736x/87/d2/9d/87d29d962f35cafad45f866acbdba71b.jpg',
  'https://s.studiobinder.com/wp-content/uploads/2018/02/Funniest-Commercials-2017-Article-Header-StudioBinder-Production-Software.jpg'
];

// Contenedor donde se añaden
const container = document.getElementById('anuncios-container');

// Crear un anuncio en una posición aleatoria
function crearAnuncio() {
  const anuncio = document.createElement('div');
  anuncio.className = 'anuncio';

  const img = document.createElement('img');
  img.src = IMAGENES[Math.floor(Math.random() * IMAGENES.length)];
  img.alt = 'Anuncio falso';

  const btn = document.createElement('button');
  btn.textContent = '×';
  btn.onclick = () => cerrarAnuncio(anuncio);

  anuncio.appendChild(img);
  anuncio.appendChild(btn);

  // Posición aleatoria dentro de la ventana
  anuncio.style.top = `${Math.random() * 80 + 10}%`;
  anuncio.style.left = `${Math.random() * 80 + 10}%`;

  container.appendChild(anuncio);

  // El anuncio se elimina automáticamente después de 8 s
  setTimeout(() => cerrarAnuncio(anuncio), 8000);
}

// Cerrar anuncio con animación
function cerrarAnuncio(el) {
  el.classList.add('cerrar');
  setTimeout(() => el.remove(), 400);
}

// Crear un anuncio nuevo cada 5 s

setInterval(crearAnuncio, 5000);
