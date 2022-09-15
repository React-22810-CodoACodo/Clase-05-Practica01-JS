/* 
Practica 01

Crear un programa que haga lo siguiente:
    1.-Pedir el nombre al usuario/a .
    2.-Pedir un numero al usuario/a .
    3.-Pedir otro numero
    4.-Devolver un alerta que diga (Hola (nombre de usuario/a) bienvenid@ a la pagina);
    5.-Otro alerta que diga el resultado de los dos numeros ingresados es (resultado); 
    6.-Escribe en pantalla (document.write) "el resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: (resultado de la suma + las letras de su nombre)" 
*/

// 1.-Pedir el nombre al usuario/a 
var nombre = prompt("Ingrese su nombre");
// 2.-Pedir un numero al usuario/a 
var numero1 = parseInt(prompt("Ingrese un numero"));
// 3.-Pedir otro numero
let numero2 = parseInt(prompt("Ingrese otro numero"));
// 4.-Devolver un alerta que diga (Hola (nombre de usuario/a) bienvenid@ a la pagina);
alert("Hola " + nombre + " bienvenid@ a la pagina");
// 5.-Otro alerta que diga el resultado de los dos numeros ingresados es (resultado);
alert("El resultado de los dos numeros ingresados es " + (numero1 + numero2));
// 6.-Escribe en pantalla (document.write) "el resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: (resultado de la suma + las letras de su nombre)"
document.write("El resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: " + (numero1 + numero2 + nombre.length));

