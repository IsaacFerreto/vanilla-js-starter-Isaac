//POST
import {obtenerDatos} from "ingrese.js";

export async function darDatos() {
    try {
      let tarea =
      {
        id:Date.now(),
        nombre:input.value,
        estado:false
      }
      const respuesta = await fetch(" ",{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(tarea)
      })
      console.log(`Se agrego satisfactoriamente la tarea ${tarea.nombre}`);  
      const datos = await respuesta.json()
      console.log(datos);
    } catch (error) {
        console.error(error);
    }
    //line to put the get function
    obtenerDatos()
}