async function getCervezas(){
    const res = await fetch("http://localhost:8080/productos");
    const resJson = await res.json();
    return resJson;
}