/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let fibonacci = [0,1];

for (let i = 2; i<=50; i++) {    
        let newNum = fibonacci[i-1] + fibonacci[i-2];
        fibonacci.push(newNum);
    }

fibonacci.forEach(num => console.log(num));
