const form1 = document.getElementById("formLogin1");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPass = document.getElementById("userPass");
let btnLogin1 = document.getElementById("submitLogin1")

form1.addEventListener("submit", (e)=>{
    
    e.preventDefault();

    validateLogin() 

    
    
})

//Regex para la validacion

const emailRegex1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

const passRegex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const validateLogin =()=>{

    const user = userName.value.trim()//sacamos espacios en los extremos
    const mail = userEmail.value.trim();
    const pass = userPass.value.trim();

    //-------------------json

     let getNombre = JSON.parse( localStorage.getItem("usuario"))

    console.log(getNombre.user)

    //------Comprobacion

    if(user !== getNombre.user){

        swal("El usuario no es valido")

    } else if (pass !== getNombre.pass){

        swal("La contraseña no es valida");

    } else if(mail !== getNombre.mail){

        swal("El mail no es validos")

    }else if(user == getNombre.user && pass == getNombre.pass && mail == getNombre.mail) {

        window.location.href="index.html"

    }
  //-------------comprobaciones

    if(user === ""){

        let message ="El user no puede estar vacio";

        inputError1(userName, message)

    }else if(user.length < 2 || user.length > 30){  //comparacion or
        
            let message = "El nombre de usuario debe tener entre 2 y 30 caracteres"
            inputError1(userName,message )
    }else{

        inputSuccess1(userName)
    }

    if(mail === ""){
        let message = "El mail no puede estar vacio";
        inputError1(userEmail, message)

    }else if(!emailRegex1.test(mail)){  //test de regex regexObj.test(cadena) sirve para true o false
        let message="El mail no es valido";
        inputError1(userEmail, message);
    }else{
        inputSuccess1(userEmail)
    }

    if(pass === ""){
        let message = "El password no puede estar vacio";
        inputError1(userPass, message)

    }else if(!passRegex1.test(pass)){  
        
        let message="El password no es valido. Debe tener 1 mayuscula 1 miniscula , numeros y al menos 8 caracteres";
        inputError1(userPass, message);

    }else{
        inputSuccess1(userPass)
    }
    }

    const inputSuccess1 = (input)=>{

        const inputPadre = input.parentElement
        const small = inputPadre.querySelector("small")
        inputPadre.classList.add("success")
        inputPadre.classList.remove("error")
        small.innerHTML = "";
        
    }
    
    const inputError1 = (input, message)=>{
    
        const inputPadre = input.parentElement
    
        const small = inputPadre.querySelector("small")
        inputPadre.classList.add("error")
        inputPadre.classList.remove("success")
        small.innerHTML = message;
        small.classList.add("error")
        
    }

    