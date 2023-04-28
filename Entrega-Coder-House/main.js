let nombre = prompt('Ingrese su nombre por favor')
let calificaciones = [];  

for (let i = 1; i <=4; i++){
    let calificacionTrimestre = parseFloat(prompt(`Porfavor Ingrese la calificacion del trimestre ${i}:`));
    if ( calificacionTrimestre >= 0 && calificacionTrimestre <= 10){
    calificaciones.push(calificacionTrimestre);
    } else {
        alert(`La calificacion ingresada pra el el trimestre numero ${i} no es valida. porfavor ingresa numeros del 1 al 10`)
    }
}
function calcularPromedio(notas){
    let suma = 0;
    for ( let i = 0; i<notas.length; i++){
        suma += notas[i];
    } return suma / notas.length;
}
let promedio = calcularPromedio(calificaciones);
document.getElementById("promedio").textContent = `${nombre} Su promedio es : ${promedio}`;
