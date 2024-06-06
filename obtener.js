

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
        if (datos.length==0||datos.length=='') {
            document.querySelector('#vacio').style.display = 'block';
        }else{
            document.querySelector('#vacio').style.display = 'none';

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
            
            checkBox.value=!checkBox;
       
            //Call to PUTT
            checkBox.addEventListener("change",()=>{
                cambio(tarea)
           
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
        console.log(`Este log es para probar contador primero vamos a llamar a datos .lenght ${datos.length}`);
        document.getElementById("cuantas").innerHTML=datos.length;
if (datos.estado) {
     
}

    } catch (error) {
        console.error(error);
    }

}

async  function vicino(id) {
    console.log("LLEGA a funcion para borrar");
        try {
          fetch(`http://localhost:3000/api/task/${id}`, {
              method: 'DELETE',
          })
              
              console.log(`Se elimino la tarea con id ${id}`);
      }catch (error) {
          console.log(error);
      } 
      //GET
      location.reload( )
}


//PUT
async function cambio(objeto) {
    //little get to get .estado to change that data
    const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json()
        //declaration of the object i want to change
        console.log(`Console log objeto.estado ANTES de cambio ${objeto.estado}`);
        objeto.estado = !objeto.estado
    const putRespuesta = await fetch(`http://localhost:3000/api/task/${objeto.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objeto)
    })
    console.log(`Console log objeto.estado DESPUES de cambio ${objeto.estado}`);
let datosPut = await putRespuesta.json() 
console.log(datosPut);
}

 