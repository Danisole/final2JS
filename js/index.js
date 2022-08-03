let title = document.getElementById('title');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');


window.addEventListener('scroll', e =>{
    let value = window.scrollY; 
    title.style.marginTop = value * .7 + 'px';
    nav.classList.toggle('active', window.scrollY > 0);
    logo.classList.toggle('active', window.scrollY > 0);
});

// const servicios = [];

// let cantidad = 3;

// do{
//     let entrada = prompt("elija 3 opciones de servicios:\ndesayuno\nservicio de limpieza\nvista al lago\nmedia pension\nestacionamiento\nwifi")

//     const serviciosContac = servicios.push(entrada.toLowerCase()) 
   

//     console.log(servicios.length)

// }while(servicios.length != cantidad)

// alert(`usted selecciono los siguientes servicios:\n${servicios.join("\n")}`)



let nombre = [];

let tuNombre = prompt("ingrese su nombre")

let ingreseNombre = nombre.push(tuNombre.toLocaleUpperCase())

alert(`Hola bienvenido ${nombre} a la pagina de reservas`)




// const carpas = [
//     {nombre: "carpa1", camas: 2, desayuno:true, precio: 2000},
//     {nombre: "carpa2", camas: 4, desayuno:true, precio: 2890},
//     {nombre: "carpa3", camas: 3, desayuno:true, precio: 2400},
//     {nombre: "cabaña", camas: 6, desayuno:true, precio: 4000},
// ];

// let precioLimite = parseInt(prompt("Bienvenidos! ingrese la cantidad de camas que necesita"))

// let buscarPrecio = carpas.find((el) => el.camas == precioLimite)

//     if(buscarPrecio){
        
//     alert(`segun su busqueda de camas disponemos de la habitacion ${buscarPrecio.nombre}`)

//     }else{

//         alert ("no hay coincidencias para su busqueda")
        
//     }








