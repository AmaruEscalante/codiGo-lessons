function iterate(item){
    console.log("item", item);
}

// Cannot be iterated with forEach
var item = document.getElementsByTagName('li');
// console.log("hola");
// console.log(item);
// To iterate you should convert it to Array
Array.from(item).forEach(iterate(li));

// Can be iterated with the method forEach
document.querySelectorAll("li").forEach(function(li){
    console.log("li", li);
})