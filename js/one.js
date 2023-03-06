/* PRIMERA ENTREGA
Alexander Garcia / Comision javascript 39470

CONTENIDO:
1. Variables
2. Funciones
3. Condicionales (if-else-switch)
4. Ciclo While
5. Sentencias PROMPT - CONFIRM - ALERT
*/

//Variables Globales
let valorAnillo = ""
let reanudar = true

//Constante
const avisoPrincipal = "Ingresa el numero del anillo que quieres consultar"

//Primera Funcion para estructurar la logica
function consultaCliente(){
    let seleccionCliente = prompt(avisoPrincipal).trim()
//condicional if
if (seleccionCliente !== "1" && seleccionCliente !== "2" && seleccionCliente !== "3" && seleccionCliente !== "4" && seleccionCliente !== "5" && seleccionCliente !== "6" && seleccionCliente !== "7" && seleccionCliente !== "8") {
    alert("🔴 Por favor ingresa un numero valido")
}else{
    switch(seleccionCliente){
        case "1":
            valorAnillo = "El valor del anillo 1 es de $2500 dollares"
            break
        case "2":
            valorAnillo = "El valor del anillo 2 es de $3500 dollares"
            break
        case "3":
            valorAnillo = "El valor del anillo 3 es de $1500 dollares"
            break
        case "4":
            valorAnillo = "El valor del anillo 4 es de $2000 dollares"
            break
        case "5":
            valorAnillo = "El valor del anillo 5 es de $3200 dollares"
            break
        case "6":
            valorAnillo = "El valor del anillo 6 es de $1000 dollares"
            break
        case "7":
            valorAnillo = "El valor del anillo 7 es de $5000 dollares"
            break
        case "8":
            valorAnillo = "El valor del anillo 8 es de $2800 dollares"
            break
            default:
    }
    alert(valorAnillo)
}
}

// Segunda Funcion

function valorOtroAnillo(){
    //ciclo While
    while(reanudar){
        consultaCliente()
        reanudar = confirm("Te gustaria saber el valor de otro anillo?")
    }
}
