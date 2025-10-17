// Lista de imágenes de "anuncios" (pueden ser gifs, jpg, png, etc.)
const IMAGENES = [
  'https://i.pinimg.com/736x/1d/f2/d7/1df2d7f4c88053d479d87b9457ac83e0.jpg',
  'https://i.pinimg.com/736x/87/d2/9d/87d29d962f35cafad45f866acbdba71b.jpg',
  'https://i.pinimg.com/1200x/22/74/d7/2274d76442abfe5b9bdd4aa883091d95.jpg',
  'https://i.pinimg.com/1200x/fa/70/8c/fa708cf5a827ad1735dbd1a15e0a5778.jpg',
  'https://i.pinimg.com/736x/9f/92/82/9f9282e8fa91bdafa35578b2898b79d4.jpg',
  'https://i.pinimg.com/736x/d3/5c/e8/d35ce8011b14a989a585005865551dca.jpg',
  'https://i.pinimg.com/736x/13/ac/d3/13acd3fff24f1cc95eda0b7a517b55d6.jpg',
  'https://i.pinimg.com/736x/37/5a/52/375a520b33983eebd6c68f5ad5b39c74.jpg',
  'https://i.pinimg.com/736x/d6/8c/ff/d68cffce149286526dbec359b2aeaa41.jpg'
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
  anuncio.style.top = `${Math.random() * 40 + 10}%`;
  anuncio.style.left = `${Math.random() * 90 + 20}%`;

  container.appendChild(anuncio);

  // El anuncio se elimina automáticamente después de 60 s
  setTimeout(() => cerrarAnuncio(anuncio), 6000000);
}

// Cerrar anuncio con animación
function cerrarAnuncio(el) {
  el.classList.add('cerrar');
  setTimeout(() => el.remove(), 400);
}

// Crear un anuncio nuevo cada 5 s

setInterval(crearAnuncio, 5000);



