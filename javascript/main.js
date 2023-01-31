
alert("¡Bienvenido a la calculadora online!")

function inicio() {
    let operacion = prompt("Ingrese la operacion matematica a realizar (suma, resta, multiplicacion, division)"); 
    let valor1 = parseInt(prompt("Ingrese el valor de la operacion"));
    let valor2 = parseInt(prompt("Ingrese el valor de la operacion"));
    for(let i = 0; i < 10; i++) {
        if (operacion === "suma") {
            let suma = valor1 + valor2;
            alert("El resultado es: " + suma);
            break;
        }else if (operacion === "resta") {
            let resta = valor1 - valor2;
            alert("El resultado es: " + resta);
            break;
        }else if (operacion === "division"){
            let division = valor1 / valor2;
            alert("El resultado es: " + division);
            break;
        }else (operacion === "multiplicacion")
            let multiplicacion = valor1 * valor2;
            alert("El resultado es: " + multiplicacion);
            break;      
    }
    let otraOperacion = prompt("¿Quiere realizar otra operación? (Si o no)")
    if(otraOperacion === "si") {
    return inicio()
    }else{
    alert("Gracias por visitarnos")
    }

}
inicio();

