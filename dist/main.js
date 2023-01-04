"use strict";
//--------------Vehiculo-Terrestre-------------------------------------------//
//------Camion------------
class Camion {
    constructor() {
        this.nombre = "Camion";
        this.numeroLlantas = 8;
        this.modelo = 2020;
        this.fabricante = "Casa Baca";
    }
    conducir() {
        console.log("El vehiculo esta siendo conducido");
    }
    encender() {
        console.log("El vehiculo esta encendido");
    }
    acelerar() {
        console.log("El vehiculo esta acelerando");
    }
    frenar() {
        console.log("El vehiculo esta frenando");
    }
    apagar() {
        console.log("El vehiculo esta apagado");
    }
    cargar() {
        console.log("el camion esta cargando");
    }
}
function procesar(Vehiculo) {
    Vehiculo.encender();
    Vehiculo.conducir();
    Vehiculo.acelerar();
    Vehiculo.frenar();
    Vehiculo.apagar();
}
let Camion1 = new Camion;
console.log(Camion1.nombre);
console.log(Camion1.numeroLlantas);
console.log(Camion1.fabricante);
console.log(Camion1.modelo);
Camion1.encender();
Camion1.conducir();
Camion1.apagar();
Camion1.frenar();
Camion1.acelerar();
Camion1.cargar();
//-------------------------------Camioneta
class Camioneta {
    constructor() {
        this.nombre = "Camioneta";
        this.numeroLlantas = 4;
        this.modelo = 2017;
        this.fabricante = "ford";
        this.numeroCabina = 2;
    }
    conducir() {
        console.log("La Camioneta esta siendo conducido");
    }
    encender() {
        console.log("La Camioneta esta encendido");
    }
    acelerar() {
        console.log("La Camioneta esta acelerando");
    }
    frenar() {
        console.log("La Camioneta esta frenando");
    }
    apagar() {
        console.log("La Camioneta esta apagado");
    }
    cargar() {
        console.log("La Camioneta esta cargando");
    }
    aciento() {
        console.log("La Camioneta tiene todos sus acientos ocupados");
    }
}
function analizar(Vehiculo) {
    Vehiculo.encender();
    Vehiculo.conducir();
    Vehiculo.acelerar();
    Vehiculo.frenar();
    Vehiculo.apagar();
}
let Camioneta1 = new Camioneta;
console.log(Camioneta1.nombre);
console.log(Camioneta1.numeroLlantas);
console.log(Camioneta1.fabricante);
console.log(Camioneta1.modelo);
Camioneta1.encender();
Camioneta1.conducir();
Camioneta1.apagar();
Camioneta1.frenar();
Camioneta1.acelerar();
Camioneta1.cargar();
Camioneta1.aciento();
//------------------------automovil
class Automovil {
    constructor() {
        this.nombre = "automovil";
        this.numeroLlantas = 4;
        this.modelo = 2015;
        this.fabricante = "Kia";
    }
    conducir() {
        console.log("El automovil esta siendo conducido");
    }
    encender() {
        console.log("El automovil esta encendido");
    }
    acelerar() {
        console.log("El automovil esta acelerando");
    }
    frenar() {
        console.log("El automovil esta frenando");
    }
    apagar() {
        console.log("El automovil esta apagado");
    }
    cargar() {
        console.log("El automovil esta cargando");
    }
    aciento() {
        console.log("El automovil tiene todos sus acientos ocupados");
    }
}
function procesar1(Vehiculo) {
    Vehiculo.encender();
    Vehiculo.conducir();
    Vehiculo.acelerar();
    Vehiculo.frenar();
    Vehiculo.apagar();
}
let Automovil1 = new Automovil;
console.log(Automovil1.nombre);
console.log(Automovil1.numeroLlantas);
console.log(Automovil1.fabricante);
console.log(Automovil1.modelo);
Automovil1.encender();
Automovil1.conducir();
Automovil1.apagar();
Automovil1.frenar();
Automovil1.acelerar();
Automovil1.cargar();
Automovil1.aciento();
