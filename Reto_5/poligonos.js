/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const areaPol = (x, y, type) => {
    switch (type) {
        case "triángulo" : console.log((x*y)/2);
        break;
        case "cuadrado" : console.log(x*y);
        break;        
        case "rectángulo" : console.log(x*y);
        break;
        default : console.log("Polígono no soportado");
    }
}

areaPol(2, 3, "triángulo");
areaPol(2, 5, "rectángulo");
areaPol(3, 3, "cuadrado");
areaPol(3, 3, "círculo");