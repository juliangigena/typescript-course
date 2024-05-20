console.log("Hola Curso TS");
//varibale inferida por TS
var age = 20;
//variable definida
var edad = 30;
var nacimiento = "1994";
var isSenior;
var person = {};
//array
var frutas = ["manzana", "peras"];
var verduras = ["lechuga", "cebolla"];
var verduleria = [{}, { name: "manzana" }];
//any = comodin -> no usar en lo posible 
var saludo = "Hola";
saludo = 20;
saludo = true;
//tipo void = no devuelve un tipo especifico, principalmente las func
function saludar() {
    console.log("Hola");
}
//tipo unknown = desconocido -> simil any, pero mas controlado
var saludo2;
//varaibles vacias
var saludo3;
var saludo4;
