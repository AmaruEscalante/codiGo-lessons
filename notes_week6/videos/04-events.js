const button = document.querySelector("button")

function hello(){
    alert(`Hola`);
}

function bye(){
    alert(`Bye`);
}

// button.onmouseout = hello;

button.addEventListener('mouseover', hello);
button.addEventListener('mouseout', bye);

button.addEventListener('click', function(){
    console.log("click 1");
})

button.addEventListener('click', function(){
    console.log("click 2");
})