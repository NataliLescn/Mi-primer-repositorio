//CAPTURAR
const main = document.querySelector(".principal");

//CREAR
const section = document.createElement("section");/*  = <section></section> */
const h3 = document.createElement("h3");/*  = <h3></h3> */
const text = document.createTextNode("texto desde JS"); /* = "texto desde JS"  */
//INSERTAR      

main.appendChild(section);
section.appendChild(h3);
h3.appendChild(text)

/* 1) EVENTO ONLOAD
ONLOAD
El evento onLoad es un evento que permite que todo el
script se ejecute cuando se haya cargado por completo
el objeto document dentro del objeto window. */

window.onload = ()=>{
    alert("el documento está listo");
    }

/* 2)EVENTO ONCLICK
ONCLICK
El evento onclick nos permite ejecutar una acción
cuando se haga click sobre el elemento al cual le
estamos aplicando la propiedad */
const btn = document.querySelector(".btn")
btn.onclick = ()=>{
alert("¡hiciste click!");
}