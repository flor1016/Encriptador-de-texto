var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();//evita q que cuando hago click carge la pagina de nuevo.
    var cuadroTexto = document.querySelector("#input-texto");
    var texto = cuadroTexto.value;
    checkTextoUsuario(texto);
    var textoEncriptado = encriptar(texto);
    document.getElementById("msg").value=textoEncriptado;
    limpiarCampo(cuadroTexto);
    return;
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var cuadroTexto = document.querySelector("#input-texto");
    var texto = cuadroTexto.value;
    checkTextoUsuario(texto);
    var textoDesencriptado = desencriptar(texto);
    console.log(textoDesencriptado);
    document.getElementById("msg").value=textoDesencriptado;
    limpiarCampo(cuadroTexto);  
    return;
});

var botonCopy = document.querySelector("#btn-copy");
botonCopy.addEventListener("click",function(event){
    event.preventDefault();
    var cuadroTexto = document.querySelector("#msg");
    var texto = cuadroTexto.value;
    checkTextoUsuario(texto);
    copy();
    limpiarCampo(cuadroTexto);
        
    return;
});

function checkTextoUsuario(texto){
    if (texto.length==0){
        alert("Debe introducir un mensaje.");
        return false;
    } else{    
        for(var i=0;i<texto.length;i++){
            var textoAscii= texto.charCodeAt(i);
            if(textoAscii<96 || textoAscii>122 ){
                if(textoAscii!=32){
                    alert("No se puede introducir texto en mayuscula, caracteres especiales o numeros. Por favor intentelo de nuevo.");
                    return false;
                }
            }                              
                           
        }
    }    
}

function encriptar(texto){
   var textoEncriptado = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
   return textoEncriptado;   
}

function desencriptar(texto){
    var textoDesencriptado = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
   return textoDesencriptado;
}

function copy(){
    var textCopy = document.getElementById("msg");//es igual que el document.querySelector("#msg");
    textCopy.select(); //selecciona el texto
    document.execCommand("copy");//copio el texto.
}

function limpiarCampo(cuadroTexto){
    cuadroTexto.value="";
}

/*
 Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/