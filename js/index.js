const d = document,
w = window;
let title = document.getElementById('title');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const botonParaSubir = document.querySelector("button");
const nombreUsuario = document.getElementById("usuario");
const tituloCard = document.querySelector(".h2Img");





w.addEventListener('scroll', e =>{
    let value = w.scrollY; 
    title.style.marginTop = value * .7 + 'px';
    nav.classList.toggle('active', window.scrollY > 0);
    logo.classList.toggle('active', window.scrollY > 0);

});
// agregar eventos

botonParaSubir.addEventListener("click", ()=>{

    window.scrollTo(0, 0);
    
});

// saludo

logo.addEventListener("click", saludo)

function saludo(){
    alert("Bienvenido a Aldea Glamping")
}

//logueo evento

nombreUsuario.addEventListener("input", errorNombre)

function errorNombre(){
    if(isNaN(nombreUsuario.value)){
        nombreUsuario.style.color="black"
    }else{
        nombreUsuario.style.color="red"
    }
}

//card evento

tituloCard.addEventListener("mousemove", removerTitulo)

function removerTitulo(){
    
for (let i = 0; i<tituloCard.length; i++) {
   tituloCard.classList.remove("hidden");
   tituloCard.classList.add("hidden");
}
}













