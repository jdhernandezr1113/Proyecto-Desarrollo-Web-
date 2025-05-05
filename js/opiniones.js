async function agregarOpinion() {
    let nombre = document.getElementById("nombre").value;
    let opinion = document.getElementById("opinion").value;
    
    if (nombre.trim() === "" || opinion.trim() === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }
    
    let nuevaOpinion = document.createElement("div");
    nuevaOpinion.classList.add("opinion");
    nuevaOpinion.innerHTML = `<strong>${nombre}:</strong> <p>${opinion}</p>`;
    
    document.getElementById("listaOpiniones").appendChild(nuevaOpinion);
    
    document.getElementById("nombre").value = "";
    document.getElementById("opinion").value = "";
    
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, opinion })
        });
        let data = await response.json();
        console.log("Datos enviados:", data);
    } catch (error) {
        console.error("Error al enviar la opinión:", error);
    }
}
