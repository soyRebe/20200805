/*var pais="España";
var continente="Europa";
var pais_y_continente = pais + ' ' + continente;


//concatenar dos variables
console.log(pais_y_continente);
alert(pais_y_continente);
*/

/***** Operadores 
var numero1= 8;
var numero2= 12;
var operacion = numero1 + numero2;

console.log(operacion);
//alert(operacion);

var numero_falso ="33";
//console.log(numero_falso + 7 )// solo junta  da 337 porque es un string , si quiero sumarlo.
console.log(Number(numero_falso) + 7);

/********** confirmar ***/
 function miFuncion(){
    var elegir = confirm('salir de la página');
    if(elegir==true){
        location.href = "index.html";
    }
    else {
        alert('Seguis en la web');
    }
}




/******comprobar edad ****/

function miFuncion2() {
    var edad =parseInt(prompt("escribe tu edad","15"));
    var nombre =(prompt("escribe tu nombre","Rebe"));
    
    if (edad <= 15 || (edad >= 60)) {
        alert(nombre + " " + "por tu edad de " + " " + edad + " " + "no puedes operar");
        
        //anidacion if
        if (edad >= 18) {
           
            alert(nombre + " " + "es mayor de edad porque tiene" + " " + edad + " " + "años");
            // elseif 
        } else if (edad >= 25) {
           
            alert(nombre + " " + "felicitaciones, por tu edad de " + " " + edad + " " + " puedes reservar");
        }
    
    } else {
       
        alert(nombre + " " + "felicitaciones, por tu edad de " + " " + edad + " " + " puedes reservar");
    }
    
    }

    
