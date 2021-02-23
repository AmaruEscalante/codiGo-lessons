console.log("1. Juguemos monopolio");
console.log("2. Toca Arcal comunal");

let pedirPizza = async () => {
    // return "llego la pizza";
    throw "el rappi ze comio la pizza"
}



let perdiryjugar = async () => {
    try {
        let ans = await pedirPizza();
        console.log(ans);
        console.log("se acabo el juego");
    } catch (error) {
        console.log(error);
    }
}


perdiryjugar().then( () => {
    console.log("despues de la promesa");
})