/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/
function mostrar() {
    let marca;
    let precio;
    let precioBarat;
    let precioCaro;
    let peso;
    let tipo;
    let acumuladorPeso = 0;
    let marcaBarat;
    let marcaCara;
    let flagL = 0;
    let flagS = 0;


    do {

        marca = prompt("Ingrese la marca del producto");

        precio = parseInt(prompt("Ingrese el precio"));
        while (!(precio > 0)) {
            precio = parseInt(prompt("Incorrecto, Ingrese el precio"));
        }

        peso = parseInt(prompt("Ingrese el peso del producto"));
        while (!(peso > 0)) {
            peso = parseInt(prompt("Incorrecto, Ingrese el peso del producto"));
        }

        tipo = prompt("Ingrese solido o liquido");
        while (!(tipo == "solido" || tipo == "liquido")) {
            tipo = prompt("Error. Solo se admite solido o liquido");
        }

        if (tipo == "liquido") {
            if (precio > precioCaro || flagL == 0) {
                precioCaro = precio;
                marcaCara = marca;
                flagL = 1;
            }
        } else {
            if (precio < precioBarat || flagS == 0) {
                precioBarat = precio;
                marcaBarat = marca;
                flagS = 1;
            }
        }

        acumuladorPeso += peso;

        seguir = prompt("Si desea seguir ingrese 's'");
    } while (seguir == 's')


    console.log("El peso total de la comopra es " + acumuladorPeso);
    console.log("La marca mas cara de liquidos es " + marcaCara);
    console.log("La marca mas barata de solidos es " + marcaBarat);
}