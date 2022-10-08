alert('Respondé a las siguientes preguntas para saber el precio total de 5 productos :D')

let prod1 = Number(prompt("¿Cuál es el precio del primer producto?"));
let prod2 = Number(prompt("¿Cuál es el precio del segundo producto?"));
let prod3 = Number(prompt("¿Cuál es el precio del tercer producto?"));
let prod4 = Number(prompt("¿Cuál es el precio del cuarto producto?"));
let prod5 = Number(prompt("¿Cuál es el precio del quinto producto?"));


function suma() {
    const suma = prod1 + prod2 + prod3 + prod4 + prod5;
    console.log("El precio del primer producto es: $" + prod1);
    console.log("El precio del segundo producto es: $" + prod2);
    console.log("El precio del tercer producto es: $" + prod3);
    console.log("El precio del cuarto producto es: $" + prod4);
    console.log("El precio del quinto producto es: $" + prod5);
    console.log("El precio total de los 5 productos es: $" + suma);

    alert("La suma de los 5 productos que ingresó es de: $" + suma);
}

suma();

console.clear();