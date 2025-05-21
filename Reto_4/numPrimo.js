/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const esPrimo = (num) => {
    let numDivisores = 0;

    if (num < 2) return false;

    for (let i = 1; i <= num; i++) {
        let numPrimo = num % i;
        if (numPrimo === 0) {
            numDivisores++;
        }
    }

    if (numDivisores === 2) {
        return true;
    }
}

for (let i = 2; i <= 100; i++) { 
    if (esPrimo(i)) {
        console.log(i);
    }
}

