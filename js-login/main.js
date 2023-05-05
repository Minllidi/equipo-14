const botonRegistrarse = document.getElementById("signUp");
const botonIniciarSesion = document.getElementById("signIn");
const main = document.getElementById("main");


botonRegistrarse.addEventListener('click',()=>{
     main.classList.add("right-panel-active");
});

botonIniciarSesion.addEventListener('click',()=>{
    main.classList.remove("right-panel-active");
});


$(document).ready(function () { 

  const firebaseConfig = {
  apiKey: "AIzaSyCfSED4fK3x1r5DZGpg2vMxzrUiO_FUkP0",
  authDomain: "reallogin-14f62.firebaseapp.com",
  projectId: "reallogin-14f62",
  storageBucket: "reallogin-14f62.appspot.com",
  messagingSenderId: "307418827913",
  appId: "1:307418827913:web:b88920e794f2c2e57b0a58",
  measurementId: "G-EQPXT7ESHB"
};

     
     // Initialize Firebase 
     const app = firebase.initializeApp(firebaseConfig); 
     console.log(app); 
  
  
     //Registrar Usuario en Firebase 
     $("#crear").click(function (e) { 
         e.preventDefault(); //evitar que se recargue 
         var regCorreo = $("#regCorreo").val(); 
         var regPass = $("#regPass").val(); 

       var correon = $("#nom").val(); 
       
         console.log(regCorreo, regPass); 
  
         firebase.auth().createUserWithEmailAndPassword(regCorreo, regPass) 
             .then((userCredential) => { 
                 window.location.href = "index.html"; 
             }) 
             .catch((error) => { 
                 var errorCode = error.code; 
                 var errorMessage = error.message; 
  
                 console.log(errorCode, errorMessage); 
             }); 
     }); 
  
  
     //INCIAR SESION 
     $("#inicio").click(function (e) { 
         e.preventDefault(); //evitar que se recargue 
         var correo2 = $("#iniCorreo").val(); 
         var contra2 = $("#iniPass").val(); 
       
  
         console.log(correo2, contra2); 
  
         firebase.auth().signInWithEmailAndPassword(correo2, contra2) 
             .then((userCredential) => { 
                 window.location.href = "home.html"; 
             }) 
             .catch((error) => { 
                 var errorCode = error.code; 
                 var errorMessage = error.message; 
                 console.log("ERROR - YA NO QUIERO VIVIR", errorCode, errorMessage); 
             }); 
     }) 
  
     // CERRAR SESION 
     $("#cerrar").click(function () { 
         firebase.auth().signOut().then(() => { 
             window.location.href = "index.html"; 
         }).catch((error) => { 
             // An error happened. 
         }); 
     }) 
  
 });