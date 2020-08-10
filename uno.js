/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
    let nombre;
    let nombrePesoMax;
    let peso;
    let pesoMax;
    let sexo;
    let edad;
    let contadorF = 0; //contador mujeres
    let contadorU = 0; //contador universal
    let acumuladorEdad = 0;
    let promedio;

    for (let i = 0; i < 5; i++) {
        nombre = prompt("Ingrese su nombre");

        peso = parseInt(prompt("Ingrese su peso"));
        while (!(peso > 0)) {
            peso = parseInt(prompt("Peso invalido, Ingrese su peso"));
        }

        sexo = prompt("Ingrese 'f' si es femenina o 'm' si es masculino");
        while (!(sexo == 'f' || sexo == 'm')) {
            sexo = prompt("Error. Solo se admite 'f' si es femenina ó 'm' si es masculino");
        }

        edad = parseInt(prompt("Ingrese su edad"));
        while (!(edad > 0)) {
            edad = parseInt(prompt("Edad no valida, ingrese su edad"));
        }

        if (sexo == 'f') {
            contadorF++;
        } else {
            if (contadorU == 0 || peso > pesoMax) {
                pesoMax = peso;
                nombrePesoMax = nombre;
            }
        }

        contadorU++;

        acumuladorEdad += edad;

        promedio = acumuladorEdad / contadorU;

    }

    if (contadorF != 0) {
        console.log("La cantidad de mujeres es " + contadorF);
    } else {
        console.log("No se ingresaron mujeres al sistema");
    }

    console.log("El promedio de edad es " + promedio);
    console.log("el hombre mas pesado es " + nombrePesoMax);
}