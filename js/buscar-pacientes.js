//buscar-pacientes.js
var botonBuscar = document.querySelector("#buscar pacientes");
botonBuscar.addEventListener("click",function(){
   console.log("Buscando pacientes...");
  var xhr = new  XMLHttpRequest;
 xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
 xhr.addEventListener("load",function(){
     var respuesta = xhr.responseText;
     var pacientes = JSON.parse(respuesta);
     pacientes.forEach(function(paciente) {
         addicionarPacienteEnLaTabla(paciente);
         console.log(paciente);
     });
 })
  xhr.send();



});