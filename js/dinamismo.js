const linkInicio=JSON.parse('[{"Titulo":"Comidas Principales"},{"Titulo":"Postres"},{"Titulo":"Bebidas"},{"Titulo":"Acerca de nosotros"}]')

let link=document.querySelectorAll('a')
console.log(linkInicio);

function mostrarLinkInicio() {
    for (let index = 0; index < linkInicio.length; index++) {
        let elemento=linkInicio[index]
        link[index].innerText=elemento.Titulo
    
        
    }
}
mostrarLinkInicio()

let menu=document.querySelectorAll('.contenedorMenu1 div')
console.log(menu);
