//Api------------
const containerHolidays = document.getElementById("apiHolidays")
const containerApi = document.getElementById("containerApi")
const searchCity = document.getElementById("searchCity")
const searchInputMes = document.getElementById("searchInputMes")
const searchInputCiudad = document.getElementById("searchInputCiudad")
const feriadosOn = document.getElementById("feriadosOn")
const feriadosInput = document.getElementById("feriadosInput")

//-------------------------api rest-----------------------------//

let pais = "ar" 
let mes = 5 //prompt("ingrese mes")
let posicion = 0


function cargarPais(){
    fetch('dataApiPaises.json')
        .then(response => response.json())
        .then(paises => {
            paises.forEach(pais =>{
                
                searchInputCiudad.innerHTML+=`
                    
                    <option value="${pais.iso2}">${pais.nombre}</option>
                
                `;

            });
        })

}
cargarPais();

function cargarMeses(){
    fetch('dataApi.json')
        .then(response => response.json())
        .then(meses => {
            meses.forEach(mes =>{
                
                searchInputMes.innerHTML+=`
                    
                    <option value="${mes.id}">${mes.mes}</option>
                
                `;

                
            });
        })
}
cargarMeses();



const displayInfo = (data) =>{

        const infoInput = ()=>{

            

            for(i=0; i<=data.response.holidays.length;i++){
            let dataName = data.response.holidays[i].name
            let dataDate = data.response.holidays[i].date.datetime.day
            let dataCountry =data.response.holidays[i].country.name
            

            feriadosOn.innerHTML+=`
            <table class="table table-bordered" id="table">
                    <thead>
                    <tr>
                        
                        <th style="width: 300px" scope="col">Nombre</th>
                        <th style="width: 300px" scope="col">Dia</th>
                        <th style="width: 300px" scope="col">Pais</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        
                        <td style="width: 300px" scope="row">${dataName}</td>
                        <td style="width: 300px" scope="row">${dataDate}</td>
                        <td style="width: 300px" scope="row" >${dataCountry}</td>
                    </tr>
                    </tbody>
            </table>
            `
            }  
            
        }

        infoInput()

        

}


const diasFeriados = async(pais, mes)=>{
 

    let apiKey = "8a4e725b331e93f1c68e1a931924cb79019a97ae"
    let api = `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=${pais}&month=${mes}&year=2022`

    const response = await fetch(api)
    const data  = await response.json()

    displayInfo(data) 

}


searchCity.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(searchInputCiudad.value)
    // console.log(searchInputMes.value)
    feriadosOn.innerHTML=""
    diasFeriados(searchInputCiudad.value, searchInputMes.value)
    
} )

