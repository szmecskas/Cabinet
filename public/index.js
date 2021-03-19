      // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDVevaJb6Uzysx0X6DGmc5PN3bpI6q-SHs",
    authDomain: "moga-dental-clinic.firebaseapp.com",
    databaseURL: "https://moga-dental-clinic.firebaseio.com",
    projectId: "moga-dental-clinic",
    storageBucket: "moga-dental-clinic.appspot.com",
    messagingSenderId: "337039284793",
    appId: "1:337039284793:web:25a6d55994e6d14add0be8",
    measurementId: "G-WK0SKHVNV2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;
    
      
    function signUp(){
        var email=document.getElementById("email").value;
        var pass=document.getElementById("password").value;
        
        const promise=firebase.auth().createUserWithEmailAndPassword(email,pass);
        promise.catch(e=>alert(e.message));  
        alert("signed up");
    }
      
    function signIn(){
        var email=document.getElementById("email").value;
        var pass=document.getElementById("password").value;
        
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorCode + errorMessage);
      });
    }
      



