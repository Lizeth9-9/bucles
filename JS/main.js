// Ejercicio 1: Suma del 1 al 100 //
function sumarCien() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumarCien());

// Ejercicio 2: Números pares del 1 al 50 //

function Numpar() {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
Numpar();

// Ejercicio 3: Tabla de multiplicar//

function multiplicar() {
    let n = prompt("Escribe un numero");
    for (let i = 1; i <= 10; i++) {
        let multiplicacion = n * i;
        console.log(multiplicacion);
    }
}

multiplicar();

// Ejercicio 4: Cuenta regresiva //
function cuenta() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
cuenta();

// Ejercicio 5: Factorial de un número//
function factorial() {
    let x = prompt("Escribe un numero");
    let num = 1;
    for (let i = 1; i <= x; i++) {
        num *= i;
    }
    return num;
}
console.log(factorial());
