//fetch(endpoint)
fetch("https://reqres.in/api/users?page=2")
.then((response)=>{
    return response.json
})

.then((misusuarios) => {
    console.log(misusuarios);
})