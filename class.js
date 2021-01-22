console.log("Javascript cargado")


var firebaseConfig = {
    apiKey: "AIzaSyAAhJcvXfadygL73JgQwWBNjQVtbdALojs",
    authDomain: "gatalan-b424b.firebaseapp.com",
    projectId: "gatalan-b424b",
    storageBucket: "gatalan-b424b.appspot.com",
    messagingSenderId: "752285636111",
    appId: "1:752285636111:web:6031b385cc3486b68eb57a"
  };

  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();


function Agregar_gatos(){

	db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}


function Registrar_usuario(){

  	var email = document.getElementById("emailNuevoUsuario").value
  	var nombre = document.getElementById("nombreNuevoUsuario").value
  	var password= document.getElementById("contraseniaNuevoUsuario").value

  	if(email == "" || email == null){
  		alert("El email no puede estar vacio")
  	}else{
  		  db.collection("usuarios").add({

    Email: email,
    Contrasenia: password,
    Nombre: nombre
})
.then(function(docRef) {
    alert("El usuario se agrego correctamente")
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

  	}

  	

 }

function subir_gato(){
	// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name            // true
mountainsRef.fullPath === mountainImagesRef.fullPath    // false
}