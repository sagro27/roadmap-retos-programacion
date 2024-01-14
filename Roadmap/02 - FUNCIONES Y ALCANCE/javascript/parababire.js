/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

//Funciones declarativas

/*Sin Argumentos ni Retorno*/
function saludo() {
  alert("Hola");
}
/*Con Argumentos*/
function saludoExtendido(nombre) {
  alert("Hola" + " " + nombre);
}

/*Con Retorno*/
function suma(a, b) {
  return a + b;
}

//Funciones expresivas

let diHola = function () {
  alert("Hola");
}

//Funciones arrow

let suma = (a, b) => a + b;

//Funciones dentro de funciones

function solicitudDeNombre() {
  let nombre = prompt("Dinos tu nombre", "Luis");
  return nombre;
}

function saludo() {
  alert("Hola" + " " + solicitudDeNombre());
}

//Función creada en el lenguaje

/*prompt() es una función propia de javascript al igual que alert(), etc..*/
let nombre = prompt("Dinos tu nombre", "Luis");

//Ámbito de variables

/*Variable global edad está disponible de ser usada en otro lugar del código
actual*/
let edad = prompt("Ingresa tu edad", "30");

/*Variable local edad solo está disponible dentro de una función */
function edadUsuario() {
  let edad = prompt("Ingresa tu edad", "30");
  alert("La edad ingresada es: " + edad + "años.");
}

//Dificultad extra
/* Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

function stringsAndNumbers(txt1, txt2) {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(txt1 + " " + txt2);
    } else if (i % 5 === 0) {
      console.log(txt2);
    } else if (i % 3 === 0) {
      console.log(txt1);
    } else {
      console.log(i);
      count++;
    };
  }
  return count;
}