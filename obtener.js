

//GET
const contedorAzul = document.getElementById("CTNcontainer");
let contC = 0;
let contP=0;
contedorAzul.className = 'Maindiv';



//this function is to get information from local host to page
export async function obtenerDatos() {
    try {
        contedorAzul.innerHTML = ""
        const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json()
        console.log(datos.lenght);
        //this for each is used for the creation of the HTML elements
        if (datos.length == 0 || datos.length == '') {
            document.querySelector('#vacio').style.display = 'block';
        } else {
            document.querySelector('#vacio').style.display = 'none';
        }


        contC=0
        contP=0

        datos.forEach(tarea => {
            let div = document.createElement("div")
            div.className = 'EachDiv'
            let p = document.createElement("p")
            let checkBox = document.createElement("input")
            console.log(`Contador ${contC}`);
            let close = document.createElement("SPAN")
            checkBox.type = "checkbox"
            p.innerHTML = tarea.nombre
            close.innerHTML = 'X'
            close.className='equis'
            checkBox.className = "box"
            close.style.color="red"
            
            p.className='txt'
            div.appendChild(close)
            div.appendChild(checkBox)
            div.appendChild(p)
            contedorAzul.appendChild(div)


            checkBox.value = !checkBox;
            checkBox.checked = tarea.estado

            if (checkBox.checked) {
                contC++;
            }else{
                contP++;
            }
            
            // for(var i=0; i< chequeo.length; i++) {
            //     if(chequeo[i].checked==true){
            //         contC++
            //     }else{
            //         contC--
            //     }
            //     }
            console.log("Con clase y for "+contC);
            if (checkBox.checked) {
                console.log("Marcada");    
            }else{
                console.log("No marcada");
            }
            //Call to PUTT
            checkBox.addEventListener("change", () => {
                if (checkBox.checked) {
                    contC++;
                    contP--;
                    cambio(tarea)

                } else {
                    contC--;
                    contP++;
                    cambio(tarea)
                }
                
                console.log("Vamos a probar contador de VERDADERAS " + contC);

                console.log(`Las pendientes son ${contP}`);
                updateCounterDisplay()
            })
            close.id = tarea.id
            close.className = 'delet'
            //Call to DELETE
            close.addEventListener("click", () => {
                if (checkBox.checked) {
                    contC--;
                } else {
                    contP--;
                }
                vicino(tarea.id)
            })
        })
        updateCounterDisplay()

        //This function is going to be use to delete a item from the list
        console.log(datos);
        console.log(`Este log es para probar contador primero vamos a llamar a datos .lenght ${datos.length}`);
        document.getElementById("cuantas").innerHTML = datos.length;


    } catch (error) {
        alert("SYSTEM ERRROR"+Error)
        console.error(error);
    }

}

async function vicino(id) {
    console.log("LLEGA a funcion para borrar");
    try {
        fetch(`http://localhost:3000/api/task/${id}`, {
            method: 'DELETE',
        })

        console.log(`Se elimino la tarea con id ${id}`);
    } catch (error) {
        alert("SYSTEM ERRROR "+Error)
        console.log(error);
    }
    //GET
    location.reload()
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

function updateCounterDisplay() {
    document.getElementById("howManyC").innerHTML = contC;
    document.getElementById("howManyP").innerHTML = contP;
    if (contP==0&&contC!=0) {
        
        document.querySelector('#full').style.display = 'block';
    } else {
        document.querySelector('#full').style.display = 'none';
    }
    
}