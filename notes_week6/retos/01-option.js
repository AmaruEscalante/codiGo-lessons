
let arr = [];

const input = document.getElementById("input");

const button = document.getElementById("button");

button.addEventListener("click", function(){
    console.log(input.value);
    arr.push(input.value);
    console.log(arr);
    alert(`El elemento: "${input.value}" ha sido añadido`);
})



