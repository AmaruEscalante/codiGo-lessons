var myContainer = document.querySelector('.container');

myContainer.style.color = "#ED20FF";
myContainer.style.opacity = 0.5;

myContainer.style.borderRadius = "20px";

//
myContainer.style.borderRadius = "20px";

myContainer.classList.add("brightness");

myContainer.classList.remove("brightness");

//setInterval ejecuta una funcion cada x tiempo de forma repetitiva
window.setInterval(function() {
    myContainer.classList.toggle("brightness");
}, 500);

