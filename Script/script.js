"use strict";
let btnInicio=document.getElementById('btninicio');
btnInicio.addEventListener('click',()=>{ inicial();});

let btnProductos=document.getElementById('btnProductos');
btnProductos.addEventListener('click',()=>{productos();});

let btnContacto=document.getElementById('btncontacto');
btnContacto.addEventListener('click',()=>{contacto();});


function inicial(){
        
         window.location.href='./index.html'

  }
function productos(){
    
         window.location.href='./Productos1.html';
  }
function contacto(){
       
         window.location.href='./contacto.html';
  }