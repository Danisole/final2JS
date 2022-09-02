const form = document.getElementById("formLogin");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const password2 = document.getElementById("pass2");
let btnLogin = document.getElementsByClassName("submitLogin")


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    //Utilizacion de operador ternario

    validate() 
    
})

//Regex para la validacion

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const validate =()=>{
    const user = username.value.trim()//sacamos espacios en los extremos
    const mail = email.value.trim();
    const pass = password.value.trim();
    const pass2 = password2.value.trim();


    //comprobaciones

    if(user === ""){
        let message ="El user no puede estar vacio";

        inputError(username, message)

    }else if(user.length < 2 || user.length > 30){  //comparacion or
        
            let message = "El nombre de usuario debe tener entre 2 y 30 caracteres"
            inputError(username,message )
    }else{

        inputSuccess(username)
    }

    if(mail === ""){
        let message = "El mail no puede estar vacio";
        inputError(email, message)

    }else if(!emailRegex.test(mail)){  //test de regex regexObj.test(cadena) sirve para true o false
        let message="El mail no es valido";
        inputError(email, message);
    }else{
        inputSuccess(email)
    }

    if(pass === ""){
        let message = "El password no puede estar vacio";
        inputError(pass, message)

    }else if(!passRegex.test(pass)){  
        
        let message="El password no es valido. Debe tener 1 mayuscula 1 miniscula , numeros y al menos 8 caracteres";
        inputError(password, message);

    }else{
        inputSuccess(password)
    }

    if(pass2 === ""){
        let message = "El password no puede estar vacio";
        inputError(password2, message)

    }else if(pass2 !== pass){  
        
        let message="Los password no coinciden";
        inputError(password2, message);

    }else{
        inputSuccess(password2)
    }

};

const inputSuccess = (input)=>{

    const inputPadre = input.parentElement
    const small = inputPadre.querySelector("small")
    inputPadre.classList.add("success")
    inputPadre.classList.remove("error")
    small.innerHTML = "";
    
}

const inputError = (input, message)=>{

    const inputPadre = input.parentElement

    const small = inputPadre.querySelector("small")
    inputPadre.classList.add("error")
    inputPadre.classList.remove("success")
    small.innerHTML = message;
    small.classList.add("error")
    
}



//api rest

const containerHolidays = document.getElementById("apiHolidays")
const botonInput = document.getElementById("btnTrad")
const feriadosInput = document.getElementById("feriadosInput")


let pais = prompt("ingrese pais")
let año = 2022
let mes = prompt("ingrese mes")

const displayInfo = (data) =>{

    const infoInput = ()=>{
        for(i=0; i<=data.response.holidays.length;i++){
        console.log(data.response.holidays[i].name)
        console.log(data.response.holidays[i].date.datetime.day)
        }
        
    }
   infoInput()
}


const diasFeriados = async(pais, año, mes)=>{

    let apiKey = "e67bf66973834fc2bd09d7570a9cdb0871111b34"
    let api = `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=${pais}&month=${mes}&year=${año}`

    const response = await fetch(api)
    const data  = await response.json()
   // const err = console.log(err)  chequearlo

    displayInfo(data)
   
}
diasFeriados(pais, año, mes);


// botonInput.addEventListener("submit", (e)=>{
//     e.preventDefault()
    
// })











