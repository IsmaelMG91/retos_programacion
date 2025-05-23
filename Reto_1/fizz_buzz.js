/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
    
for (let i = 0; i<=100; i++ ) {

    let divisibleBy3 = i % 3 === 0; //guarda true o false
    let divisibleBy5 = i % 5 === 0; 

    if (divisibleBy3 && divisibleBy5) {
        console.log("fizzbuzz" + "\n");
    } else if (divisibleBy3) {
        console.log("fizz" + "\n");
    } else if (divisibleBy5) {
        console.log("buzz" + "\n");
    } else {
        console.log(i + "\n");
    }
}
