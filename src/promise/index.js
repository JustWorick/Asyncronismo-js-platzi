//
const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
})

const cows = 54;

const countcows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no cows on the farm')
    }
});

countcows.then((result) => {
    console.log(result);
})
//la promesa por si sola entregara solo 1 resultado, para que tome el segundo es necerario agregar el .catch
.catch((b) => {
    console.log(b);
})
//cuando la promesa termine, ya sea, resuelta o rechazada se puede encadenar un accion con .finally
.finally(() => console.log('Finally'));


//Playground Promesas (Resuelto)
function delay(time, message) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(message);
    }, time)
  })
}
