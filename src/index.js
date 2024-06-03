import { obtenerDatos } from "../obtener";
import { darDatos } from "../ingrese";

export let ingresoTexto=document.getElementById("texto").value;
let agregar=document.getElementById("agregar");

 
obtenerDatos();
agregar.addEventListener('click', darDatos)