$(document).ready(function () {


    const firebaseConfig = {
   apiKey: "AIzaSyDDaikwzv9DT-ed61YjIlS-u1BXypwf9Nc",
   authDomain: "miniso-4af5e.firebaseapp.com",
   projectId: "miniso-4af5e",
   storageBucket: "miniso-4af5e.appspot.com",
   messagingSenderId: "728490442088",
   appId: "1:728490442088:web:ee305648259d660f7feadd",
   measurementId: "G-22NMTJNP46"
 };

   // Initialize Firebase
   const app = firebase.initializeApp(firebaseConfig);
   console.log(app);
});

//****** Registrar Usuarios ******
//Seleccionando el boton registrar
$("#btn-registrar").click(function () {
   //Capturar el email y el password
   let email = $("#email").val();
   let password = $("#password").val();
   // Swal.fire(
   //     'Datos registrado',
   //     'success')

   //Metodo de firebase que registra usuarios
   firebase.auth().createUserWithEmailAndPassword(email, password)
       .then((userCredential) => {
           // Signed in
           var user = userCredential.user;
           Swal.fire(
               'Datos registrado',
               'success')

       })
       .catch((error) => {
           var errorCode = error.code;
           var errorMessage = error.message;
           // ..);

           Swal.fire({
               icon: 'error',
               title: 'hubo un error',
               text: 'Tus datos no han sido registrados!',

           })
       });

})

//Ingresar con nuestro correo registrado
$("#btn-iniciar").click(function () {

   let email = $("#email").val();
   let password = $("#password").val();

   firebase.auth().signInWithEmailAndPassword(email, password)
       .then((userCredential) => {
           // Signed in
           // alert("ingresaste");

           Swal.fire({
               title: 'ingresaste',
               width: 600,
               padding: '3em',
               color: '#9DEDF5',
               background: '#fff',
               backdrop: `
                 rgba(0,0,123,0.4)
                 url("img/img4.png")
                 left top
                 no-repeat `  ,
               confirmButtonText: 'ok',
               allowOutsideClik: true //permite cerrar la alerta haciendo click fuera del 
           }).then((result) => {
               if (result.isConfirmed) { window.location.href = 'pagina-principal.html'; }
           })
       })


       .catch((error) => {
           var errorCode = error.code;
           var errorMessage = error.message;
           // alert("contraseña incorrecta");

           Swal.fire({
               title: 'la contraseña que ingresaste es incorrecta',
               width: 600,
               padding: '3em',
               color: '#9DEDF5',
               background: '#fff',
               backdrop: `
                 rgba(0,0,123,0.4)
                 url("img/img3.png")
                 left top
                 no-repeat`
           })
       });
})






//cerrar sesion

$("#Salir").click(function () {

   firebase.auth().signOut().then(() => {
       // Sign-out successful.
       window.location.href = 'index.html'

   })

})

$("#Cerrar").click(function () {

   firebase.auth().signOut().then(() => {
       // Sign-out successful.
       window.location.href = 'pagina-principal.html'

   })

});