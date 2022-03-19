/* El objetivo de este script es que al momento que el usuario le dé click en el botón, se genere una corrida donde se le pregunten los datos para que llené su firma electrónica.al
Los datos que va a pedir son: Nombre, Correo, Puesto en la empresa y Número de contacto 
Está es una primera versión del programa. */
function cambiarModo() {
  var cuerpoweb = document.body;
  cuerpoweb.classList.toggle("oscuro");
}



function hola() {

  let miFirma = document.getElementById("boton");
  miFirma.onclick = showAlert;
};
function showAlert(event) {
  let resultado;

  let misDatos = {

    nombre: prompt("¿cuál es tu nombre?"),
    puesto: prompt("¿cuál es tu puesto?"),
    correo: prompt("¿cuál es tu correo?"),
    numero: prompt("¿cuál es tu número?"),

  };

  resultado = `Estos son tus datos: ${misDatos.nombre + ' ' + misDatos.puesto + ' ' + ' ' +  misDatos.correo + ' ' + misDatos.numero} `;

  document.write(resultado);
}
