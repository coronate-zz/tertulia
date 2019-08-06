function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
        
            .then(result => {
                const user = result.user;     
 				window.alert("You have successfully subscribed");
            })  
}


function emailLogin() {
	const email = document.getElementById("email-popup").value;
	console.log(email);
	const password = document.getElementById("password-popup").value;
	console.log(password);


	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  console.log(error)
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
		})
};


