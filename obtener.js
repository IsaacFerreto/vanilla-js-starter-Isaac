//GET
export async function obtenerDatos() {
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json()
        datos.forEach(element => {
           let li= document.createElement('p')
            li.innerHTML=element.nombre
            let body = document.body
            body.appendChild(li)
        });
        console.log(datos);
    } catch (error) {
        console.error(error);
    }    
}