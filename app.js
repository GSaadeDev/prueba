let encriptarA= /a/gi;
let encriptarE= /e/gi;
let encriptarI= /i/gi;
let encriptarO= /o/gi;
let encriptarU= /u/gi;

let desencriptarA= /ai/gi;
let desencriptarE= /enter/gi;
let desencriptarI= /imes/gi;
let desencriptarO= /ober/gi;
let desencriptarU= /ufat/gi;

var pantalla2= document.getElementById('resultado');
    pantalla2.style.display = 'none';
var pantalla1= document.getElementById('contenido_inicial');
    pantalla1.style.display = 'flex';
var pantalla11= document.getElementById('contenido_inicial2');
    pantalla11.style.display = 'flex';


function cambioPantallas(){
    pantalla2.style.display = 'flex';
    pantalla1.style.display = 'none';
    pantalla11.style.display = 'none';
}


function encriptarTexto(){
    const botonCopiar = document.getElementById('boton_copiar');
    var textoUsuario = document.getElementById('texto_usuario').value;//obteniendo el texto enviado
    const parrafo_respuesta= document.getElementById('texto_Respuesta');//variable para almacenar la respuesta
    parrafo_respuesta.textContent= '';//inicializando la respuesta en 0
    console.log(textoUsuario);//verificando los datos de entrada

    

    let encriptamientoTexto = textoUsuario.replace(encriptarE,'enter') //Bloque de encriptacion utilizando "replace" en orden especifico
    .replace(encriptarI, 'imes')
    .replace(encriptarO, 'ober')
    .replace(encriptarA, 'ai')
    .replace(encriptarU, 'ufat');
    
    console.log(encriptamientoTexto); //verificando en la consola la respuesta adecuada

    parrafo_respuesta.textContent = encriptamientoTexto; //Imprimiendo la respuesta

    cambioPantallas();

    botonCopiar.addEventListener('click', function(){
            const texto = parrafo_respuesta.textContent; //guarda en una variable el texto
            navigator.clipboard.writeText(texto)    //lo envia al portapapeles del usuario
    });
}

function desencriptarTexto(){
    const botonCopiar = document.getElementById('boton_copiar');
    var texto_usuario = document.getElementById('texto_usuario').value; //obteniendo el texto enviado
    const parrafo_respuesta= document.getElementById('texto_Respuesta'); //variable para almacenar la respuesta
    parrafo_respuesta.textContent= ''; //inicializando la respuesta en 0
    console.log(texto_usuario); //verificando los datos de entrada

    let desencriptamientoTexto= texto_usuario.replace(desencriptarA,'a') //Bloque de desencriptacion utilizando"replace"
    .replace(desencriptarE,'e')
    .replace(desencriptarI,'i')
    .replace(desencriptarO,'o')
    .replace(desencriptarU,'u');

    console.log(desencriptamientoTexto);

    parrafo_respuesta.textContent = desencriptamientoTexto;
    
    cambioPantallas();

    botonCopiar.addEventListener('click', function(){
        const texto = parrafo_respuesta.textContent; //guarda en una variable el texto
        navigator.clipboard.writeText(texto)    //lo envia al portapapeles del usuario
    });
}



