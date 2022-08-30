const precios = [100,200,400]

function mayoracero (numero) {
    if (numero < 1 ) {
        return false;
    } else {
        return true ;
    }
}

function manzana() {
    let seguirComprando;
    let seguircomprandofinal;
    do {

        let cuantas = parseInt(prompt("Cuantas manzanas desea llevar?"));
        let precio = precios[0];
        let mayorcero = mayoracero(cuantas);
        if (isNaN(cuantas) || mayorcero == false ) {
            alert("Ingrese un numero")
        } else {
            alert("Usted desea" + " " + cuantas + " " + "manzanas")
            let total = cuantas * precio;
            alert("El total de su compra es " + " $ " + total + " ARS ");
            seguirComprando = prompt("Desea seguir comprando?");
            seguircomprandofinal = seguirComprando.toUpperCase();
        }

    }
    while (seguircomprandofinal == "SI");

    alert("Gracias por comprar!");
}

function peras() {
    let seguirComprando;
    let seguircomprandofinal;
    do {

        let cuantas = parseInt(prompt("Cuantas peras desea llevar?"));
        let precio = precios[1];
        let mayorcero = mayoracero(cuantas);
        if (isNaN(cuantas) || mayorcero == false ) {
            alert("Ingrese un numero")
        } else {
            alert("Usted desea" + " " + cuantas + " " + "peras")
            let total = cuantas * precio;
            alert("El total de su compra es " + " $ " + total + " ARS ");
            seguirComprando = prompt("Desea seguir comprando?");
            seguircomprandofinal = seguirComprando.toUpperCase();
        }

    }
    while (seguircomprandofinal == "SI");

    alert("Gracias por comprar!");
}

function bananas() {
    let seguirComprando;
    let seguircomprandofinal;
    do {

        let cuantas = parseInt(prompt("Cuantas bananas desea llevar?"));
        let precio = precios[2];
        let mayorcero = mayoracero(cuantas);
        if (isNaN(cuantas) || mayorcero == false ) {
            alert("Ingrese un numero")
        } else {
            alert("Usted desea" + " " + cuantas + " " + "bananas")
            let total = cuantas * precio;
            alert("El total de su compra es " + " $ " + total + " ARS ");
            seguirComprando = prompt("Desea seguir comprando?");
            seguircomprandofinal = seguirComprando.toUpperCase();
        }

    }
    while (seguircomprandofinal == "SI");

    alert("Gracias por comprar!");
}

function nocomprar(){
    alert(" Esperamos que vuelva pronto ! ")

}