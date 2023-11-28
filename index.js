//document es el acceso al body

//al colocar el innerHTML me elimina los 4 divs que hay dentro del seccion y escriba otro contenido.

//getElementById para id
//getElementsByClassName para clases
//getElementsByTagsName para elementos html
//querySelector funciona para seleccionar cualquier primer elemento de algo
//en caso de tener varios divs debo usar el querySelectorAll y entre corchetes declarar cual es el que quiero utilizar


//algunas veces puedo encontrarme con elementos dentro de elementos, como por ejemplo un div dentro de un div, ej, caja1 caja2. si quiero acceder a caja2 seria algo asi document.querySelector(".caja1 .caja2")
//document.getElementsByClassName("caja1")[0].getElementsByClassName("caja2")[0].innerHTML para este no es necesario poner el punto de la clase

//LOS GETELEMENTS FUNCIONAN EN NAVEGADORES VIEJOS
//QUERYSELECTOR ES MUCHO MAS VELOZ A NIVEL RENDIMIENTO.
//innerHTML con el += añade contenido sin borrar el anterior
//con length me dice el numero de elementos que hay
