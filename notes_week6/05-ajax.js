var btndatos = document.getElementById("boton");

btndatos.addEventListener("click", function(){
    //vamos a configurar nuestro assitente que va a enviar la peticion y va a esperar su respuesta

    var assistant = new XMLHttpRequest();

    //este asistente va a tener sus propios eventos
    assistant.addEventListener("readystatechange", function(){

        //readyState, me va a indicar cual es estado de mi petecion, va del 1 al 4
        switch(assitant.readyState){
            case 1:
                console.log("OPEN", assistant.readyState);//conf
                break;
            case 2:
                console.log("SEND", assistant.readyState)//enviando
                break;
            case 3:
                console.log("DATA, esperando", assistant.readyState);
                break;
            case 4:
                console.log("YA RECIBI LA RPT ", assitant.readyState);
                break;
            default:
                console.log("sucedio un reror");
                break;
        }

    })

})
// aca finaliza el readystatechange

// open hace la configuracion del envio, a donde y como
assitant.open("GET", )