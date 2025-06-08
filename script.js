console.log("hola mundo");
//elementos del formulario variables
var input_nombrecompleto = document.getElementById("nombre");
var input_email= document.getElementById("email");
var botonEnviar = document.getElementById("boton_enviar");
// elementos
var formulario = document.getElementById("formulario");
var feedback = document.getElementById("feedback");

console.log(input_nombrecompleto);
console.log(input_email);
console.log(boton_enviar);



// crear funcion de enviar el formulario
botonEnviar.addEventListener("click",enviarFormulario);
    
   function enviarFormulario(event){
    event.preventDefault();
   console.log("hemos hecho click");
  //console.log("!!");
  // valores de lo input 
   var valor_nombrecompleto = input_nombrecompleto.value;
   var valor_email = input_email.value;

   console.log(valor_nombrecompleto);
   console.log(valor_email);

// actualizar texto
  document.getElementById("nombrecompleto-placeholder").innerText = valor_nombrecompleto;
  document.getElementById("correoelectronico-placeholder").innerText = valor_email;

           // cambiar visibilidad
  formulario.classList.add("oculto");
  feedback.classList.remove("oculto");         
    
} 


 

 
 
 
 