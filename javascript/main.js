
// alert("¡Bienvenido a la calculadora online!");

// function inicio() {
//     let operacion = prompt("Ingrese la operacion matematica a realizar (suma, resta, multiplicacion, division)");
//     let valor1    = parseInt(prompt("Ingrese el valor de la operacion"));
//     let valor2    = parseInt(prompt("Ingrese el valor de la operacion"));
//     for(let i = 0; i < 10; i++) {
//         if (operacion === "suma") {
//             let suma = valor1 + valor2;
//             alert("El resultado es: " + suma);
//             break;
//         }else if (operacion === "resta") {
//             let resta = valor1 - valor2;
//             alert("El resultado es: " + resta);
//             break;
//         }else if (operacion === "division"){
//             let division = valor1 / valor2;
//             alert("El resultado es: " + division);
//             break;
//         }else (operacion === "multiplicacion")
//             let multiplicacion = valor1 * valor2;
//             alert("El resultado es: " + multiplicacion);
//             break;
//     }
//     let otraOperacion = prompt("¿Quiere realizar otra operación? (Si o no)")
//     if (otraOperacion === "si") {
//         return inicio()
//     }else {
//         alert("Gracias por visitarnos")
//     };
//    }

// inicio();

// let operacion = prompt("ingrese la operacion que quiera realizar(sum, rest,div, multi o salir):");
// let valorUno = parseInt(prompt("ingrese un valor: "));
// let valorDos = parseInt(prompt("ingrese un valor: "));

// while(operacion != "salir") {
//     if(operacion === "sum") {
//         let sum = valorUno + valorDos;
//         alert("El resultado es: " + sum);
//         break;
//     }else if(operacion === "rest") {
//         let rest = valorUno - valorDos;
//         alert("El resultado es: " + rest);
//         break;
//     }else if(operacion === "div") {
//         let div = valorUno / valorDos;
//         alert("El resultado es: " + div);
//         break;
//     }else if(operacion === "multi") {
//         let multi = valorUno * valorDos;
//         alert("El resultado es: " + multi);
//         break;
//     }else{
//         operacion = prompt("ingrese la operacion que quiera realizar(sum, rest,div, multi o salir):");
//         valorUno = parseInt(prompt("ingrese un valor: "));
//         valorDos = parseInt(prompt("ingrese un valor: "));
//     }
// }



class Students {
    constructor(name, lastName, attendance){
        this.name       = name;
        this.lastName   = lastName;
        this.attendance = attendance;
    };
};

const matias    = new Students("Matías",    "Punjabi",  true);
const franco    = new Students("Franco",    "Punjabi",  false);
const marcela   = new Students("Marcela",   "Monzón",   true);
const alejandro = new Students("Alejandro", "Punjabi",  false);

let arrayStudent = [matias, franco, marcela, alejandro];

function attendanceStudent() {
    let studentConsult  = prompt("Ingrese el nombre del estudiante: ");
    let student         = arrayStudent.find(student => student.name === studentConsult);
    if(student.attendance === true){
        alert("El/la alumno/a: " + student.name + " ha asistido a clases. ¡Muy bien!"); 
    }else{
        alert("El/la alumno/a: " + student.name + " deberá hacer horas extras. ¡Muy mal!");
    }
};

// attendanceStudent();
    

function newStudent() {
    if(studentAttendance === "y"){
        studentAttendance = true;
    }else{
        studentAttendance = false;
    };
    let newStudent = new Students(studentName, studentLastName, studentAttendance);
    arrayStudent.unshift(newStudent);
    return newStudent;
};
let studentName = prompt("Nombre del nuevo estudiando:");
let studentLastName = prompt("Apellido del nuevo estudiante");
let studentAttendance = prompt("Asistencia en clase: y o n");

while(studentName != "salir"){    
    newStudent();
    alert(`El alumno ${newStudent.name} ${newStudent.lastName} ha sido agregado!`);
    alert(newStudent); 
};
