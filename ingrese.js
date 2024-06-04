//POST
import { obtenerDatos } from "./obtener";
import { ingresoTexto,contenedorNombre,contenedorCheckbox,contenedorBoton } from "./src";


//Main pourpuse of this function is to submmit informmation to an object,
// that object is going to added to an array and the array to the local host and to the screen
export async function darDatos() {
  contenedorNombre.innerHTML = ""
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
               //Checkbox submit in screen add div contenedorCheckbox
               let la= document.createElement('INPUT') 
               la.setAttribute("type","checkbox")      
               contenedorCheckbox.appendChild(la)
// for to add elements to the screen
      datos.forEach(element => {
        //name submit in screen add div contenedorNombre
        let li= document.createElement('p') 
         li.innerHTML=element.nombre
         contenedorNombre.appendChild(li)

         //buton submit in screen add div contenedorboton
     });
    } catch (error) {
        console.error(error);
    }
    //line to put the get function
    obtenerDatos()
}