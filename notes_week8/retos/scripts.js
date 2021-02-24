const URL = 'https://602db0c896eaad00176dcb64.mockapi.io/api/v0/'

class Tarea {
    constructor(nombre,  prioridad, urgencia, duracion){
      this.nombre = nombre
      this.prioridad = prioridad
      this.urgencia = urgencia
      this.duracion = duracion
    }
  }

class todoApp {

    obtenerTareas(){
        return new Promise((resolve, reject)=>{
            fetch(`${URL}tareas`)
            .then(respuesta => {
              return respuesta.json() //obtengo el JSON con los datos de la petición
            })
            .then(misTareas => {
              resolve(misTareas)
            })
            .catch(error => reject(error))
          })
    }

    agregarTarea(objTarea){
        return new Promise((resolve, reject) => {
            let configuracion = {
              method:"POST",
              body:JSON.stringify(objTarea), //lo tengo que convertir antes a JSON (texto)
              headers:{"Content-type":"application/json"}
            }
            fetch(`${URL}tareas`, configuracion)
            .then(respuesta => {
              return respuesta.json()
            })
            .then(tareaCreada => {
              resolve(tareaCreada)
            })
            .catch(error => reject(error))
          })
        }
}

class Interface {
    imprimirTareas(arregloTareas){
        const contenido = document.getElementById("todos")

        let estadoContenido = arregloTareas.map((tarea) => {

            let rowTarea = 
            `<tr>
                <td>
                    <input type="checkbox">
                    <span>${tarea.nombre}</span>
                </td>
                <td>
                    <span class="btn btn-success btn-custom">${tarea.urgencia}</span>
                </td>
                <td>
                    <span>${tarea.prioridad}</span>
                </td>
                <td>
                    <span>${tarea.fecha}</span>
                </td>
            </tr>`
            return rowTarea
        })

        let htmlContenido = estadoContenido.join('')
        contenido.innerHTML = htmlContenido
    }
}

let app = new todoApp();
let interface = new Interface();
// var btndatos = document.getElementById("boton");
let getTareas = () => {
    app.obtenerTareas()
    .then(tareas => {
        // console.log(tareas);
        interface.imprimirTareas(tareas);
    })
    .catch(error => console.log(error));
}

let updateTareas = (task) => {
    app.agregarTarea(task) 
    .then()
}

getTareas();

// MODAL ACTIONS

let Modal = document.getElementById('Modal')
const modal = new bootstrap.Modal(Modal);

Modal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    let button = event.relatedTarget
    let parent = button.parentNode;
    let input = parent.childNodes[1];
    if(input.value) {
        console.log(input);

        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        let modalTitle = Modal.querySelector('.modal-title')
        // let modalBodyInput = Modal.querySelector('.modal-body input')

        modalTitle.textContent = `Nueva Tarea: ${input.value}`;
        // modalBodyInput.value = recipient
    } else{
        // event.preventDefault();
        console.log("no hay valor");
    }
})



// get input from modal form and create a new object

createbutton = document.getElementById("create-task");

createbutton.addEventListener('click', (event)=>{
    console.log("sasdfasd");
    nombre = document.getElementById("nueva-tarea");
    let form = document.getElementById("formcreartarea")

    task = new Tarea(nombre.value,
                    form['prioridad'].value,
                    form['urgencia'].value,
                    form['duracion'].value);

    console.log(task);

    app.agregarTarea(task)
    .then(tareaCreada => {
        form.reset()
        getTareas()
        modal.hide()
    })
    .catch(error => console.log(error));
})