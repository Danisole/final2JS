const d = document,
w = window;
let title = document.getElementById('title');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const botonParaSubir = document.querySelector("button");
const nombreUsuario = document.getElementById("usuario");
const contenedorCarpas = document.getElementById("contenedorCarpas");


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

//carrito evento

//carpas array

const carpaArray = [];

class Carpas{
    constructor(id, nombre, precio, personas){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.personas = personas
    }
}

carpaArray.push(new Carpas(1, "Carpa Sirirí", 2500, 4));
carpaArray.push(new Carpas(2, "Carpa Calandria", 2000, 2));
carpaArray.push(new Carpas(3, "Carpa Muitú", 3200, 3));
carpaArray.push(new Carpas(4, "Cabaña Ipacaá", 4800, 6));


console.log(carpaArray);


//agregar las cards para establecer las carpas



carpaArray.forEach((carpa)=>{

    const div = d.createElement("div");
    div.classList.add("carpasCard");

    div.innerHTML +=`
        <h3>${carpa.nombre}</h3>
        <p>${carpa.precio}</p>
        <p>${carpa.personas}</p>
        <button id="button${carpa.id}>Contratar</button>
    `;
    contenedorCarpas.appendChild(div)
})



let filtrarCarpas = parseInt(prompt("ingrese cantidad de personas"))

let buscarCarpas = carpaArray.find(persona =>persona.personas == filtrarCarpas)

alert(`segun su busqueda disponemos de la ${buscarCarpas.nombre}`)


















