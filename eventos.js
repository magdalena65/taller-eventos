document.addEventListener("DOMContentLoaded", () => {
    const divboton = document.querySelector("#boton button");
    
    divboton.addEventListener("click", () => {
        divboton.stopPropagation();
        alert("Hola! Soy el div");
    });
})
