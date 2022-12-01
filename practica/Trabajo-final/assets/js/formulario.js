const miFormulario = document.getElementById("mi-formulario");
const nombreEvento = "submit";

const accionEvento = (event) => {
    // evitar comportamiento por defecto en el evento submit
    event.preventDefault();
    // agregar acciones en mi evento.....

    const altura = miFormulario.elements.altura.value;
    const ancho = miFormulario.elements.ancho.value;
    const color = miFormulario.elements.color.value;
    const textoPantalla = document.getElementById("textoPantalla");
    
    console.log("altura", altura, "ancho", ancho, "color", color);

    const pantalla = document.getElementById("pantalla")
    pantalla.style.width = ancho + "px"
    pantalla.style.height = altura + "px"
    pantalla.style.background = color
    const valor = document.getElementById("texto").value;
    // console.log(valor)
    textoPantalla.innerText=valor
}


miFormulario.addEventListener(nombreEvento, accionEvento)

// console.log(miFormulario)