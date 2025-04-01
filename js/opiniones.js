document.getElementById("opinionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const opinionText = document.getElementById("opinion").value;
    if (opinionText.trim() !== "") {
        const opinionItem = document.createElement("p");
        opinionItem.textContent = opinionText;
        document.getElementById("opiniones-lista").appendChild(opinionItem);
        document.getElementById("opinion").value = "";
    }
});
