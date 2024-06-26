console.log("Hola Curso TS")
//varibale inferida por TS
let age = 20;
//variable definida
let edad : number = 30;
let nacimiento : string = "1994";
let isSenior : true;
let person : Object = {};
//array
let frutas : string[] = ["manzana", "peras"];
let verduras : Array<string> = ["lechuga","cebolla"];
let verduleria : Object[] = [{}, {name:"manzana"}];
//any = comodin -> no usar en lo posible 
let saludo : any = "Hola";
saludo = 20;
saludo = true;

//tipo void = no devuelve un tipo especifico, principalmente las func
function saludar(): void{
    console.log("Hola");
}

//tipo unknown = desconocido -> simil any, pero mas controlado
let saludo2 : unknown;

//varaibles vacias
let saludo3 : null;
let saludo4 : undefined;

//variables de valor variable, no los manejo, por ej entran por teclado o por un svc
let dinero : number | null; //por ej en una deuda me deben un monto o nada
let deuda : number | undefined; // simil anterior, pero tengo mas libertad de funciones

//variables centralizadas, ideal para proj grandes
type responceService = string | undefined;
let respuesta : responceService;

//casteo de variable
let sms : any = "";
(sms as string).concat;
let smsUpercase = <string>sms;
