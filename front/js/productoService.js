// Función asincrónica que obtiene datos de las cervezas
// Se realiza una solicitud HTTP GET a la URL "http://localhost:8080/productos"
async function getCervezas(){
// Espera a que se resuelva la solicitud y obtiene los datos de la respuesta en formato JSON
    const res = await fetch("http://localhost:8080/productos");
    const resJson = await res.json();
    return resJson; // Devuelve los datos en formato JSON como resultado de la función
}
