//GET

let contedorAzul = document.getElementById("CTNcontainer")

//this function is to get information from local host to page
export async function obtenerDatos() {
    try {
        contedorAzul.innerHTML = ""
        const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json()
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
            close.id('cerrar')
            close.className('dele')

            let stop = document.getElementById('cerrar')

          async  function vicino() {
                fetch('https://example.com/delete-item/' + id, {
                    method: 'DELETE',
                })
                    .then(res => res.text()) // or res.json()
                    .then(res => console.log(res))
            }

            stop.addEventListener('click', vicino)
            location.reload();
            //   var span = document.createElement("SPAN");
            //   span.className = "close";
            //   span.appendChild(div)


        })
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}