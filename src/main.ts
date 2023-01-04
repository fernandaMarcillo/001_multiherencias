interface Vehiculo{
    modelo:string;
    fabricante:string;
    encender():void;
    acelerar():void;
    frenar():void;
    apagar():void;
}
interface VehiculoTerrestre{
    numeroLlantas:number;
    conducir():void;
    encender():void;
    acelerar():void;
    frenar():void;
    apagar():void;
}
interface VehiculoMaritimo{
    numeroTurbinas:number;
    numeroAnclas:number;
    navegar():void;
}
interface VehiculoAereo{
    numeroHelices:number;
    pilotar:void;
}
//--------------Vehiculo-Terrestre-------------------------------------------//
//------Camion------------
class Camion implements VehiculoTerrestre{
    nombre: string = "Camion";
    numeroLlantas: number =8
    modelo:number =2020;
    fabricante:string = "Casa Baca"



    conducir(): void {
        console.log("El vehiculo esta siendo conducido");
    }
    encender(): void {
        console.log("El vehiculo esta encendido");
    }
    acelerar(): void {
        console.log("El vehiculo esta acelerando");
    }
    frenar(): void {
        console.log("El vehiculo esta frenando");
    }
    apagar(): void {
        console.log("El vehiculo esta apagado");
    }
    cargar() {
        console.log("el camion esta cargando");
    }
}
function procesar(Vehiculo:VehiculoTerrestre){
    Vehiculo.encender();
    Vehiculo.conducir();
    Vehiculo.acelerar();
    Vehiculo.frenar();
    Vehiculo.apagar();
}
let Camion1 = new Camion
console.log(Camion1.nombre)
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
class Camioneta implements VehiculoTerrestre{
    nombre: string = "Camioneta";
    numeroLlantas: number = 4;
    modelo:number =2017;
    fabricante:string = "ford"
    numeroCabina: number = 2;



    conducir(): void {
        console.log("La Camioneta esta siendo conducido");
    }
    encender(): void {
        console.log("La Camioneta esta encendido");
    }
    acelerar(): void {
        console.log("La Camioneta esta acelerando");
    }
    frenar(): void {
        console.log("La Camioneta esta frenando");
    }
    apagar(): void {
        console.log("La Camioneta esta apagado");
    }
    cargar() : void{
        console.log("La Camioneta esta cargando");
    }
    aciento(): void{
        console.log("La Camioneta tiene todos sus acientos ocupados")
    }
}
function analizar(Vehiculo:VehiculoTerrestre){
    Vehiculo.encender();
    Vehiculo.conducir();
    Vehiculo.acelerar();
    Vehiculo.frenar();
    Vehiculo.apagar();
}
let Camioneta1 = new Camioneta
console.log(Camioneta1.nombre)
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
class Automovil implements VehiculoTerrestre{
    nombre: string = "automovil";
    numeroLlantas: number = 4;
    modelo:number =2015;
    fabricante:string = "Kia"


    conducir(): void {
        console.log("El automovil esta siendo conducido");
    }
    encender(): void {
        console.log("El automovil esta encendido");
    }
    acelerar(): void {
        console.log("El automovil esta acelerando");
    }
    frenar(): void {
        console.log("El automovil esta frenando");
    }
    apagar(): void {
        console.log("El automovil esta apagado");
    }
    cargar() : void{
        console.log("El automovil esta cargando");
    }
    aciento(): void{
        console.log("El automovil tiene todos sus acientos ocupados")
    }
}
function procesar1(Vehiculo:VehiculoTerrestre){
    Vehiculo.encender();
    Vehiculo.conducir();
    Vehiculo.acelerar();
    Vehiculo.frenar();
    Vehiculo.apagar();
}
let Automovil1 = new Automovil
console.log(Automovil1.nombre)
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


//---------------------------------Yate--
class Yate implements VehiculoMaritimo{
    fabricante:string ="Titanic"
    numeroTurbinas: number = 3;
    numeroAnclas:number =1;
    numeroMotores: number =4;
    modelo:string= "Oceano";

    navegar():void{
        console.log("El yate empezo a navegar");
    }
    propulsion():void{
        console.log("el yate se esta propulsando")
    }

}
function procesar2(maritimo:VehiculoMaritimo){
    maritimo.navegar();
}
let yate = new Yate
console.log(yate.numeroTurbinas);
console.log(yate.numeroAnclas);
console.log(yate.numeroMotores);
console.log(yate.modelo);
console.log(yate.fabricante);
yate.navegar();

//..........................velero....................
class Velero implements VehiculoMaritimo{
    numeroTurbinas: number = 0;
    numeroAnclas:number = 1;
    numeroMastil:number = 3;
    numeroVelas: number =2;
 

    navegar():void{
        console.log("El velero empezo a navegar");
    }
    girar():void{
        console.log("el velero esta girando");

    }
}
function procesar3(maritimo:VehiculoMaritimo){
    maritimo.navegar();
}
let velero = new Velero
console.log(velero.numeroTurbinas);
console.log(velero.numeroAnclas);
console.log(velero.numeroMastil);
console.log(velero.numeroVelas);
velero.navegar();
velero.girar();
//..........................Avioneta..........
class Avioneta implements VehiculoAereo{
    modelo:string = "Latam";
    fabricante:string = "Booting"
    numeroHelices: number = 6;
    
    
    pilotar():void{
        console.log("El avion esta siendo pilotado");
    }
    planear():void{
        console.log("la avioneta esta planeando");
    }
    maniobrar():void{
        console.log("la avioneta esta siendo maneobrada");
    }

}
function procesar5(aereo:VehiculoAereo){
    aereo.pilotar();
}
let avioneta = new Avioneta
console.log(avioneta.numeroHelices);
console.log(yate.modelo);
console.log(yate.fabricante);
avioneta.pilotar();
avioneta.planear();
avioneta.maniobrar();
