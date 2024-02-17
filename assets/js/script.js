// Función para solicitar el número y validar su rango
const solicitarNumero = () => {
    let numero = Number(prompt("Ingrese un número entre 1 y 20"));

    while (isNaN(numero) || numero < 1 || numero > 20) {
        alert("Número fuera del rango o no es un número. Favor de ingresar un número entre 1 y 20.");
        numero = Number(prompt("Ingrese un número entre 1 y 20"));
    }

    return numero;
};

// Función para calcular el factorial
const factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};

// Obtención de la tabla de multiplicación y factorial del número ingresado
const numeroIngresado = solicitarNumero();

// Imprimir tabla de multiplicación, Calcular y mostrar el factorial utilizando un ciclo for anidado
for (let i = 1; i <= numeroIngresado; i++) {
    console.log(`${numeroIngresado} x ${i} = ${numeroIngresado * i}`);
    for (let j = 0; j < numeroIngresado; j++) {
        console.log(`Factorial de ${i} es ${factorial(i)}`);
    }
}