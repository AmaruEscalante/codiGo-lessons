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
            fetch(`${URL}productos`, configuracion)
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
                    <span>${tarea.nombre_tarea}</span>
                </td>
                <td>
                    <span class="btn btn-success btn-custom">${tarea.urgencia_tarea}</span>
                </td>
                <td>
                    <span>${tarea.prioridad_tarea}</span>
                </td>
                <td>
                    <span>${tarea.fecha_tarea}</span>
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

getTareas();