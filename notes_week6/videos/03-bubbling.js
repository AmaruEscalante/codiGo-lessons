cont1 = document.getElementById("cont1");
cont2 = document.getElementById("cont2");
para = document.getElementById("para");

function hola(type){
    alert(`the type is ${type}`);
}

// para.addEventListener("click", hola("paragraph"))

cont2.addEventListener("click", function(e){
    alert(`this is the cont2`);
    e.stopPropagation();
});

// cont3.addEventListener("whatever")