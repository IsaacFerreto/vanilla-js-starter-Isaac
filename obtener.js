//GET
export async function obtenerDatos() {
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json()
        console.log(datos);
    } catch (error) {
        console.error(error);
    }    
}