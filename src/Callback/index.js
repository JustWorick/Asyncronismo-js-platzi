//Callback ejemplo
//output esperado: 4
function sum(num1, num2) {
    return num1 + num2;
}
function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));


//SetTimeOut
//output esperado:"Hola Js" despues de 2 seg
setTimeout(function () {
    console.log("hola Js");
}, 2000)

//ejemplo2
function grettings(name) {
    console.log(`hola ${name}`);
}

setTimeout(grettings, 2000, "oscar");
//output esperado: "hola oscar" despues de 2 seg


//Playground Callback y setTimeout
"Tienes la función execCallback que recibirá un callback es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos."

"Para hacer que la función se demore 2 segundos debes usar la función setTimeout, pero para ejecutarla debes llamarla mediante el namescpace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:"

window.setTimeout(() => {
  // code
})

"Dentro del cuerpo de la función execCallback debes escribir tu solución. Ejemplo:"

Input:
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);

"Output:"
// Execute myFunc 2s after

//Solucion
function execCallback(callback) {
    return window.setTimeout(callback, 2000)
  }
