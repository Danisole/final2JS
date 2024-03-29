const d = document,
w = window;
const title = document.getElementById('title');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const botonParaSubir = document.querySelector("button");
const nombreUsuario = document.getElementById("usuario");
const contenedor = document.getElementById("contenedorCarpas");
const eliminar = document.getElementById("btnEliminar")
const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarritoReservas = document.querySelector("#items");
const contenedorFooterCarrito = document.getElementById("footer");
//variable donde vamos a guardar los elementos 
const carpaArray = [];
let stockCarrito = [];


// carpas constructor

class Carpas{
    constructor(id, nombre, precio, personas, imag){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.personas = parseInt(personas);
        this.imag = imag

    }

}


//carrito constructor

class StockCarrito{

    constructor(producto, cantidad){
        this.producto = producto,
        this.cantidad = cantidad

    }
};

//variable donde vamos a guardar los elementos 


// carga de carpas

function CargarCarpas(){

    carpaArray.push(new Carpas(1, "Carpa Sirirí", 2500, 4,"./assets/pexels-cottonbro-5358920.jpg"));
    carpaArray.push(new Carpas(2, "Carpa Calandria", 2000, 2,"./assets/carpa3.jpg"));
    carpaArray.push(new Carpas(3, "Carpa Muitú", 3200, 3, "./assets/navDesplegada2.jpg"));
    carpaArray.push(new Carpas(4, "Cabaña Ipacaá", 4800, 6, "./assets/cabaña.jpg"));
}

CargarCarpas();
dibujarCatalogoProductos()

//----------------------------------------------------------------------------------//

//localstorage setear productos (usada como base de datos)

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}

for (const carpa of carpaArray){
    guardarLocal(carpa.id, JSON.stringify(carpaArray)) //almacena en el local

}

const busquedaLocalS = JSON.parse(localStorage.getItem(1));

console.log(busquedaLocalS);

//buscardor en el dom

let inputBuscador2 = document.querySelector(".inputBuscador2");
let inputBuscador3 = document.querySelector(".inputBuscador3");
let inputBuscador4 = document.querySelector(".inputBuscador4");
let inputBuscador6 = document.querySelector(".inputBuscador6");
let contBtn =document.querySelector(".btn-group")


contBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    function mostrarRecomendado(){

        if(e.target.classList.contains("inputBuscador2")){

            let findLocalStorage = busquedaLocalS.find(elemento =>{return  elemento.personas == 2})

            swal(`Tu mejor opción es ${findLocalStorage.nombre}`);
        }
        if(e.target.classList.contains("inputBuscador3")){

            let findLocalStorage = busquedaLocalS.find(elemento =>{return  elemento.personas == 3})

            swal(`Tu mejor opción es ${findLocalStorage.nombre}`);
        }
        if(e.target.classList.contains("inputBuscador4")){

            let findLocalStorage = busquedaLocalS.find(elemento =>{return  elemento.personas == 4})

            swal(`Tu mejor opción es ${findLocalStorage.nombre}`);

        }else if(e.target.classList.contains("inputBuscador6")){

            let findLocalStorage = busquedaLocalS.find(elemento =>{return  elemento.personas == 6})

            swal(`Tu mejor opción es ${findLocalStorage.nombre}`);

        }

    }
    mostrarRecomendado()

    
})


contBtn.innerHTML= `
<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
<label class=" inputBuscador2 btn btn-outline-primary" for="btnradio1">2 personas</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
<label class=" inputBuscador3 btn btn-outline-primary" for="btnradio2">3 personas</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
<label class="inputBuscador4 btn btn-outline-primary" for="btnradio3">4 personas</label>

<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
<label class="inputBuscador6 btn btn-outline-primary" for="btnradio3">6 personas</label>
`
//-------------------------------------------------------------------------------------//

function dibujarCatalogoProductos(){
    contenedorProductos.innerHTML = "";

    carpaArray.forEach(
        (producto) =>{
            let carta = crearCard(producto);
            contenedorProductos.append(carta);

        }
    )
};

function crearCard(producto){

    //boton

    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success d-grid gap-2 col-6 mx-auto";
    botonAgregar.innerText = "Reservar";

    //cuerpo carta
    
    let cuerpoCard = document.createElement("div");
    cuerpoCard.className = "card-body";
    cuerpoCard.innerHTML =`
    <h5 class="d-flex justify-content-center">${producto.nombre}</h5>
    <p class="d-flex justify-content-center">Precio $ ${producto.precio}</p>
    <p class="d-flex justify-content-center">Capacidad ${producto.personas} personas</p>
    `;
    cuerpoCard.append(botonAgregar)


    //imagen
    let imagen = document.createElement("img");
    imagen.src = producto.imag;
    imagen.className = "card-img-top h-3";
    imagen.alt = producto.nombre;

    // carta

    let carta = document.createElement("div");
    carta.className = "card m-2 p-3 mb-5 mt-3";
    carta.style = "width: 40rem";
    carta.append(imagen);
    carta.append(cuerpoCard);

    // evento del boton

    botonAgregar.onclick = (e) =>{

        

        stockCarrito.push(new StockCarrito(producto, 1));

        dibujarCarrito();

        swal({
            title: "¡Producto Agregado!",
            text: `La ${producto.nombre} fue agregada al carrito de reservas`,
            icon: "success",
            buttons:{
                cerrar:{
                    text: "Cerrar",
                    value: false
                },
                carrito:{
                    text: "Ir al carrito",
                    value: true
                }
            }
        }).then((irACarrito) =>{

            if(irACarrito){

                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                const modalToggle = document.querySelector('#toggleMyModal');
                myModal.show(modalToggle);
                
            }
        });

        
    }

    return carta

    
}

function dibujarCarrito(){

    contenedorCarritoReservas.innerHTML = "";

    let totalCarrito = 0;
    let totalCantidad = 0;
    let totalProducto = 1;

    stockCarrito.forEach(
        (elemento) => {


            //agregar numero al boton Reservas
        
        const modalToggle = document.querySelector('#toggleMyModal');

        modalToggle.innerHTML=`<span class="badge text-bg-secondary">Reservas  <i class="fas fa-shopping-cart"> </i></span>`
       
        totalProducto+=totalCantidad
        totalCantidad+=elemento.cantidad


        //crear el renglon con los datos a reservar

            let renglonCarrito = document.createElement("tr");
            renglonCarrito.classList.add("renglonCarrito");
            

            renglonCarrito.innerHTML = `
            <td>${elemento.producto.id}</td>
            <td>${elemento.producto.nombre}</td>
            <td id="cantidad-producto-${elemento.producto.id}">${elemento.cantidad}</td>
            <td>${elemento.producto.precio}</td>
            <td>${elemento.producto.precio*elemento.cantidad}</td>
            <td>
            <button class="btn btnEliminar btn-light" id="btn${elemento.producto.id}">
            <i class="fas fa-trash"></i>
            </button>
            </td>

            `;
            totalCarrito+=elemento.producto.precio*elemento.cantidad;
            contenedorCarritoReservas.append(renglonCarrito);

            
            //-----------------------Dont touch-------------//

            // let inputCantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);

            
            // inputCantidadProductos.addEventListener("change", (e)=>{
            //     let nuevaCantidad = e.target.value;
            //     elemento.cantidad = nuevaCantidad;

                

            //     dibujarCarrito();
            // })

            //Boton eliminar

            let borrarProducto = document.getElementById(`btn${elemento.producto.id}`);
            
            borrarProducto.addEventListener("click", (e)=>{

                renglonCarrito.remove()
                

                let calcularTotal = parseInt(totalCarrito-=elemento.producto.precio)
                console.log(calcularTotal)
                let calcularCantidad = parseInt(totalCantidad-=elemento.cantidad)


                if(calcularTotal !== 0){

                    contenedorFooterCarrito.innerHTML=(`<th scope="row" colspan="5">Total de la reserva $ ${calcularTotal}, ${calcularCantidad} carpas reservadas</th>`)
                    swal(`Eliminaste ${elemento.producto.nombre} del carrito`)
                    modalToggle.innerHTML=`<span class="badge text-bg-secondary">Reservas  <i class="fas fa-shopping-cart"> ${calcularCantidad}</i></span>`
                    

                }else{
                    contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
                    modalToggle.innerHTML=`Reservas  <i class="fas fa-shopping-cart"></i>`
                    swal(`Eliminaste ${elemento.producto.nombre} del carrito`)
                    stockCarrito=[];
                    dibujarCarrito();
                    
                }

                
            })

            //Vaciar Carrito total

            let vaciarCarritoTotal = document.getElementById("modalFooterEmpty");

            vaciarCarritoTotal.addEventListener("click", (e)=>{
                
                stockCarrito=[];
                dibujarCarrito();
                modalToggle.innerHTML=`Reservas  <i class="fas fa-shopping-cart"></i>`
                swal("El carrtito ha sido vaciado con exito")
            })

        
        }
    );

  

    if(stockCarrito.length == 0){

        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;
    
    }else{
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Total de la reserva $ ${totalCarrito}, ${totalCantidad} carpas reservadas</th>`
    };


    

    //confirmacion de la reserva
    const reservarCarrito = document.querySelector("#modalFooterReserv");

    reservarCarrito.addEventListener("click", (e)=>{

//librerias sweet alert

        if(stockCarrito.length !== 0){

            const modalToggle = document.querySelector('#toggleMyModal');

            swal({
                title: "Esta seguro que desea confirmar tu reservación",
                text: "Una vez confirmada se realizara el cobro de la estadía",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {

                if (willDelete) {
                swal("¡Felicitaciones! Tu reserva ha sido confirmada, revisa tu casilla de mensajes para mas informacion", {
                    icon: "success",
                });
                
                stockCarrito=[];
                dibujarCarrito();
                modalToggle.innerHTML=`Reservas  <i class="fas fa-shopping-cart"></i>`
                } else {
                swal("Puedes seguir con tu proceso cuando quieras");
                } 
                
            });
        }else{
            
            contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`;

        }
    });  
 };   


