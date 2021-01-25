let text = document.querySelector("#input");
let btn = document.querySelector("#btn");
let list = document.getElementById("list");
let check = document.getElementsByClassName("check");

let tasks = [];

btn.addEventListener('click', ()=>{
    let task = text.value;
    if(task === ""){
        alert(`La tarea no puede estar vacía`);
    } else{
        let li = document.createElement("li")
        li.innerHTML = `${task}<input class="check" type=checkbox>`;
        list.insertBefore(li, list.childNodes[0]);
        tasks.push(task)
    }
})

const ul = document.querySelector("ul");
let li = document.getElementsByTagName("li");

// li.addEventListener("click", (e)=>{
//     console.log(e.target);
//     e.stopPropagation();
// })

ul.addEventListener("click", (e)=>{
    if (e.target.tagName == "INPUT"){
        // console.log(e.target.parentNode);
        e.target.parentNode.classList.toggle("done")
    }
    // console.log(e.target);
})