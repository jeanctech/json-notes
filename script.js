// Script
function obtener() {
    const response = await fetch("http://127.0.0.1:5500/Json/date.json");
    const json = await response.json();
    console.log(JSON.parse(json));
    console.log(JSON.stringify(json));
}

obtener();