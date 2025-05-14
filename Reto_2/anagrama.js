/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama (str1, str2) {

    let word1 = str1.toLowerCase();
    let word2 = str2.toLowerCase();

    if (word1 === word2) return false;

    let elementToCompare1 = word1.split("").sort().toString();
    let elementToCompare2 = word2.split("").sort().toString();

    return elementToCompare1 === elementToCompare2;
}

console.log(anagrama("mejorar","ReMoJar"))