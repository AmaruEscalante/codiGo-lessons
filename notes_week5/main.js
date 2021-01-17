// document.querySelector("button")
// .onclick = function(){
//     alert('Hola Mundo GAAA')
// }

// let nombre = "Sebastian";

// console.log(`Nombre ${nombre}`)
// console.error("un error xd");
// console.warn("un warning xd");

// console.dir(document)

// let url = document.baseURI

// console.log(url)

// function count(){
//     let count = 0;
//     return function x(){
//         count = count + 1;
//         return count;
//     }
// }

// counter = count()

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(count())

function SetName(name){
    let result;
    try {
        if (name.length < 4) throw "short";
        if (name.length > 15) throw "large";
        result = `The name ${name} is correct`
    } catch (error) { // executed if there is an error
        if (error == "short") {
                console.log("The name is too short");
        } else if (error == "large") {
                console.log("The name is too large");
        }
    } finally { // Is always executed
            console.log("finally");
            console.log(result);
    }
}

let names = prompt("Enter your name");
SetName(names);