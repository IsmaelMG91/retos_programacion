/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const area = (Poligono) => {
    Poligono.print();
    return Poligono.area();
}

class Poligono {
    constructor(tipo) {
        this.tipo = tipo;
    }

    print(){
    console.log(`El área del ${this.tipo} es igual a ${this.area()}`)
    }
}

class Triangulo extends Poligono {
    constructor(base, altura) {
        super("Triángulo")
        this.base = base
        this.altura = altura
    }

    area(){
        return (this.base*this.altura)/2
    }
}

class Cuadrado extends Poligono {
    constructor (lado) {
        super("Cuadrado")
        this.lado = lado
    }

    area() {
        return (this.lado**2)
    }
}

class Rectangulo extends Poligono {
    constructor (base, altura) {
        super("Rectángulo")
        this.base = base
        this.altura = altura
    }

    area() {
        return (this.base * this.altura)
    }
}

area(new Triangulo(2, 7))
area(new Cuadrado(4))
area(new Rectangulo(8, 3))