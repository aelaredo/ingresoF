/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
    let sexo;
    let sexoMaxCant;
    let lugar;
    let lugarMasVisitado;
    let temporada;
    let cantidadPersonas;
    let maxCantidadPersonas;
    let contadorBariloche = 0;
    let contadorCataratas = 0;
    let contadorSalta = 0;
    let contadorViajesInvierno = 0;
    let cantidadPersonasInvierno = 0;
    let promedio;

    do {
        sexo = prompt("Ingrese 'f' si es femenina o 'm' si es masculino");
        while (!(sexo == 'f' || sexo == 'm')) {
            sexo = prompt("Error. Solo se admite 'f' si es femenina ó 'm' si es masculino");
        }

        lugar = prompt("Ingrese lugar a viajar bariloche,cataratas o salta");
        while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")) {
            lugar = prompt("Incorrecto solo se puede viajar a bariloche,cataratas o salta");
        }

        temporada = prompt("Ingrese la temporada en la que va a viajar");
        while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")) {
            temporada = prompt("Incorrecto Ingrese la temporada “otoño”,”invierno, “verano,”primavera” ");
        }

        cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que van a viajar"));
        while (!(cantidadPersonas > 0)) {
            cantidadPersonas = parseInt(prompt("Incorrecto, Ingrese la cantidad de personas que van a viajar"));
        }

        if (contadorBariloche == 0 && contadorCataratas == 0 && contadorSalta == 0) {
            maxCantidadPersonas = cantidadPersonas;
            sexoMaxCant = sexo;
        } else if (cantidadPersonas > maxCantidadPersonas) {
            maxCantidadPersonas = cantidadPersonas;
            sexoMaxCant = sexo;
        }

        switch (lugar) {
            case "bariloche":
                contadorBariloche++;
                break;
            case "cataratas":
                contadorCataratas++;
                break;
            case "salta":
                contadorSalta++;
                break;
        }

        if (temporada == "invierno") {
            cantidadPersonasInvierno += cantidadPersonas;
            contadorViajesInvierno++;
        }


        seguir = prompt("Ingrese 's' si desea seguir agregando datos")
    } while (seguir == 's');

    if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
        lugarMasVisitado = "bariloche";
    } else if (contadorCataratas > contadorSalta && contadorCataratas >= contadorBariloche) {
        lugarMasVisitado = "cataratas";
    } else {
        lugarMasVisitado = "salta";
    }

    console.log("El lugar mas visitado es " + lugarMasVisitado);

    console.log("El sexo de la persona que mas gente lleva es " + sexoMaxCant);


    if (cantidadPersonasInvierno != 0) {
        promedio = cantidadPersonasInvierno / contadorViajesInvierno;
        console.log("El promedio de personas por viaje en invierno es de " + promedio);
    } else {
        console.log("no hay personas que viajen en invierno");
    }

}