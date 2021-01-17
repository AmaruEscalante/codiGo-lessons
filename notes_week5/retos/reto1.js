let L = null;
let PG = null;
while(true){
    try {
        L = prompt("Ingrese la cantidad de litros entregados");
        PG = prompt("Ingrese el precio por galon en S/.")
        if(isNaN(L) || isNaN(PG)){
            throw "not number"
        }
    } catch(error){
        if (error == "not number"){
            window.alert("Los valores deben ser numericos")
        }
    } finally {
        if(L === null || PG === null){
            window.alert("Ingresa todos los valores para continuar")
        } else{
            let TG = parseFloat(L) / 3.785;
            let GA = TG * PG;
            window.alert(`La ganacia del día fue S./${GA.toFixed(2)}`)
            break;
        }
    }
}

