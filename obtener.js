import { darDatos } from "./ingrese"

//GET
const contedorAzul = document.getElementById("CTNcontainer")


//this function is to get information from local host to page
export async function obtenerDatos() {
    try {
        contedorAzul.innerHTML = ""
        const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json()
         console.log(datos.lenght);
        //this for each is used for the creation of the HTML elements
        if (datos.lenght==0||datos.lenght=='') {
            document.querySelector('.vacio').style.display = 'block';
        }
        datos.forEach(tarea => {
            let div = document.createElement("div")
            let p = document.createElement("p")
            let checkBox = document.createElement("input")
            let close = document.createElement("SPAN")
            checkBox.type = "checkbox"
            p.innerHTML = tarea.nombre
            close.innerHTML = 'X'
            p.appendChild(checkBox)
            p.appendChild(close)
            div.appendChild(p)
            contedorAzul.appendChild(div)
            console.log(checkBox.value);
            checkBox.value=!checkBox;
            console.log(checkBox.value);
            console.log(tarea.estado);
            //Call to PUTT
            checkBox.addEventListener("change",()=>{
                cambio(tarea.id)
                console.log(tarea.estado);
            })            
            close.id=tarea.id
            close.className='delet'
            //Call to DELETE
            close.addEventListener("click",()=>{
                vicino(tarea.id)
            })            
        })
        
        //This function is going to be use to delete a item from the list
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

async  function vicino(id) {
    console.log("LLEGA");
        try {
          fetch(`http://localhost:3000/api/task/${id}`, {
              method: 'DELETE',
          })
              .then(res => res.text()) // or res.json()
              .then(res => console.log(res))
              console.log(`Se elimino la tarea con id ${id}`);
      }catch (error) {
          console.log(error);
      } 
      //GET
      location.reload( )
}


//PUT
async function cambio(id) {
    //little get to get .estado to change that data
    const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json()
        //declaration of the object i want to change
    let tarea = {
        estado : !datos.estado
    }
    
    const putRespuesta = await fetch(`http://localhost:3000/api/task/${id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(tarea)
})
let datosPut = await putRespuesta.json()
console.log(datosPut);
}

 