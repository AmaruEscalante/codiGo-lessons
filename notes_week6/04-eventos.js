var myButton = document.getElementsByTagName("button");

console.log(myButton);

// myButton[0].addEventListener("click", function(event){
//     console.log(event);
//     alert("Haz clickeado");
// })

var mylink = document.getElementById("link");

console.log(mylink);

mylink.addEventListener("click", function(event){
    event.preventDefault();
    console.log("pause el evento");
})

inputtexto = document.getElementById("textin");

butonsend = document.getElementById("but");

butonsend.addEventListener("click", function(){
    console.log(inputtexto.value);
})

inputtexto.addEventListener("keyup", function(){
    console.log(inputtexto.value);
})