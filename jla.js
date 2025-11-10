const fondosPorTema = {
  twin: ["meowl.jpg", "meowl_twin.png"],
  jojolion: ["temp.png", "temp.png"],
  Chiikawa: ["hachiware.png", "hachiware_twin.png"]
};

let temaActual = "twin";
let indiceFondo = 0;

function mostrarFondo() {
  document.body.style.backgroundImage = `url('${fondosPorTema[temaActual][indiceFondo]}')`;
}

function cambiarFondo() {
  indiceFondo = (indiceFondo + 1) % fondosPorTema[temaActual].length;
  mostrarFondo();
}

const switchInput = document.getElementById("favorite");
switchInput.addEventListener("click", cambiarFondo);

const radios = document.querySelectorAll('.radio-input .label input');
radios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      temaActual = radio.closest('.label').dataset.tema;
      indiceFondo = 0;
      mostrarFondo();
      switchInput.checked = false;
    }
  });
});

window.addEventListener("load", mostrarFondo);
