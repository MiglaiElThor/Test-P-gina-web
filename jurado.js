let currentImageIndex = 0;
const images = [
    "inspector jurado.png",
    "jurao obeso.webp",
    "https://scontent.fmad18-1.fna.fbcdn.net/v/t1.6435-9/139564964_1622430304619506_3593358625228872535_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QDqojXym6tUQ7kNvwHUReSZ&_nc_oc=AdkCQHUwIWcG9BXr4LAhmAHHwfxfsXVbqw5PAcWsRGacYXJsm2thPblyN8V5WKZ1QP8&_nc_zt=23&_nc_ht=scontent.fmad18-1.fna&_nc_gid=TWS8s3IBqnQT_LNbsVGI_w&oh=00_AfcL7klkbrgEbYMzB3Z-sfPTQyIdAU5pyEhquTDt7w6isQ&oe=692C84F4",
    "jurao con buzzcut.png"
    
];

// textos
const imageTexts = [
    "Imagen 1: inspector jurado",
    "La imagen nos muestra a Jurado en sus primeros años, donde ya se evidenciaban los grandes desafíos que su peso le imponía. Acciones básicas, que para otros niños eran sencillas, para él representaban proezas que requerían un esfuerzo monumental. Sus padres eran testigos de su lucha diaria. Es en estos inicios donde se forjó su espíritu. Pequeñas victorias, como lograr levantarse para limpiarse el culo, eran símbolos conmovedores de autonomía y superación. Cada triunfo, por mínimo que fuera, le demostraba su capacidad. Estos logros diarios fueron los cimientos de su determinación y resiliencia, preparándolo para enfrentar los juicios del mundo y buscar su propio espacio.",
    "",
    "Jurado, un chico obeso, decidió hacerse un corte de pelo buzzcut. La simple tarea de ir a la peluquería se convirtió en un desafío debido a su peso y a las miradas y juicios de la gente. El transporte público, las puertas estrechas y las miradas constantes dificultaron su camino. Finalmente, llegó a la peluquería y, tras superar la dificultad de entrar, se hizo el corte de pelo. Al mirarse en el espejo, se sintió renovado y con más confianza. A pesar de los desafíos, Jurado se sintió fuerte y listo para enfrentar el mundo con su nuevo look",
    "Jurao Foca"
];

let indicator = null;
const INDICATOR_SIZE = 80;
const INDICATOR_BORDER = 4;

function createIndicator() {
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.style.position = 'fixed';
        indicator.style.width = INDICATOR_SIZE + 'px';
        indicator.style.height = INDICATOR_SIZE + 'px';
        indicator.style.border = INDICATOR_BORDER + 'px solid red';
        indicator.style.backgroundColor = 'transparent';
        indicator.style.borderRadius = '50%';
        indicator.style.pointerEvents = 'none';
        indicator.style.display = 'none';
        indicator.style.zIndex = '10000';
        document.body.appendChild(indicator);
    }
}

function positionIndicatorOverButton() {
    const button = document.querySelector('.change-image-btn');
    if (!indicator || !button) return;
    const rect = button.getBoundingClientRect();
    const iw = indicator.offsetWidth || INDICATOR_SIZE;
    const ih = indicator.offsetHeight || INDICATOR_SIZE;
    indicator.style.left = (rect.left + rect.width / 2 - iw / 2) + 'px';
    indicator.style.top = (rect.top + rect.height / 2 - ih / 2) + 'px';
}

// --- Right-side persistent text boxes (one per image) ---
const TEXTBOX_WIDTH = 360; // px (aumentado)
let textBoxes = [];

function createTextBoxes() {
    const column = document.getElementById('textColumn');
    if (!column) return;
    // clear existing if any
    column.innerHTML = '';
    textBoxes = [];
    for (let i = 0; i < imageTexts.length; i++) {
        const box = document.createElement('div');
        box.className = 'imageTextBox';
        box.style.width = TEXTBOX_WIDTH + 'px';
        box.style.background = 'rgba(255,255,255,0.95)';
        box.style.color = '#111';
        box.style.border = '1px solid #ddd';
        box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    box.style.padding = '16px';
    box.style.borderRadius = '8px';
    box.style.fontFamily = 'sans-serif';
    box.style.fontSize = '18px';
    box.style.lineHeight = '1.5';
        box.style.transition = 'box-shadow 0.18s, transform 0.18s';
    // allow the box to expand downward instead of showing a scrollbar
    box.style.overflow = 'visible';
    box.style.maxHeight = 'none';
        box.innerText = imageTexts[i] || '';
        // show only the box corresponding to the current image; hide others
        box.style.display = (i === currentImageIndex) ? 'block' : 'none';
        column.appendChild(box);
        textBoxes.push(box);
    }
}

function highlightTextBox(index) {
    if (!textBoxes || textBoxes.length === 0) return;
    for (let i = 0; i < textBoxes.length; i++) {
        const b = textBoxes[i];
        if (i === index) {
            // make visible and highlighted
            b.style.display = 'block';
            b.style.boxShadow = '0 6px 20px rgba(0,0,0,0.18)';
            b.style.transform = 'translateY(-2px)';
        } else {
            // hide non-active boxes
            b.style.display = 'none';
            b.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            b.style.border = '1px solid #ddd';
            b.style.transform = 'translateY(0)';
        }
    }
}


function getRandomPosition() {
    const button = document.querySelector('.change-image-btn');
    const windowWidth = window.innerWidth - button.offsetWidth;
    const windowHeight = window.innerHeight - button.offsetHeight;
    
    return {
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight
    };
}

function getRandomSize() {
    return {
        width: Math.random() * (200 - 60) + 60,
        height: Math.random() * (200 - 60) + 60
    };
}

function moveAndResizeButton() {
    const button = document.querySelector('.change-image-btn');
    const position = getRandomPosition();
    const size = getRandomSize();
    
    button.style.position = 'fixed';
    button.style.left = position.x + 'px';
    button.style.top = position.y + 'px';
    button.style.width = size.width + 'px';
    button.style.height = size.height + 'px';
    // Ensure the invisible button is above other content so clicks reach it
    button.style.zIndex = '9999';

    if (indicator) {
        positionIndicatorOverButton();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createIndicator();
    moveAndResizeButton();
    // create persistent text boxes to the right of the image
    createTextBoxes();
    highlightTextBox(currentImageIndex);

    const faq = document.querySelector('.faq-button');
    if (faq) {
        // When pressing the tooltip, first position the indicator over the
        // invisible button then show it. The indicator has pointer-events: none
        // so clicks will go through to the underlying button (if it is above
        // other content). We also hide the indicator on mouseup/leave.
        faq.addEventListener('mousedown', () => {
            positionIndicatorOverButton();
            if (indicator) indicator.style.display = 'block';
        });

        faq.addEventListener('mouseup', () => {
            if (indicator) indicator.style.display = 'none';
        });

        faq.addEventListener('mouseleave', () => {
            if (indicator) indicator.style.display = 'none';
        });
    }
});

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imgElement = document.getElementById('juradoImage');
    imgElement.src = images[currentImageIndex];
    moveAndResizeButton();
    // highlight the corresponding text box for the current image
    highlightTextBox(currentImageIndex);
}