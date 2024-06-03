import { obtenerDatos } from "../obtener";
import { darDatos } from "../ingrese";
//calling GET to be dure that information is always going to be updated
obtenerDatos();
//sending input to module where the input is going to be read
export let ingresoTexto=document.getElementById("texto");
// calling bottom from HTML to activate event listener (bottom should add a new object))
let agregar=document.getElementById("agregar");

 //listener for function that is being run in 'ingrese.js' where its funtionality is explained
agregar.addEventListener('click', darDatos)