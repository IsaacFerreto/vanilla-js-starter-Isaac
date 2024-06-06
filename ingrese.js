//POST
import { obtenerDatos } from "./obtener";
import { ingresoTexto,contenedorNombre,contenedorCheckbox,contenedorBoton } from "./src";


//Main pourpuse of this function is to submmit informmation to an object,
// that object is going to added to an array and the array to the local host and to the screen
export async function darDatos() {
    try {
        //Object creation
      let tarea =
      {
        id:Date.now(),
        nombre:ingresoTexto.value,    
        estado:false
      }
      //this part is going to submit method POST so we can add with fecht the information to the local host
      const respuesta = await fetch("http://localhost:3000/api/task",{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(tarea)
      })
      console.log(`Se agrego satisfactoriamente la tarea ${tarea.nombre}`);  
      const datos = await respuesta.json()
      console.log(datos);
      ingresoTexto.value=''
    } catch (error) {
        console.error(error);
    }
    obtenerDatos()
  }