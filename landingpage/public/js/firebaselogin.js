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


	//SAVE INFO IN DATA BASE
    const db = firebase.firestore();
    ref = db.collection("alldata").document();
    myId = ref.getId();
    console.log("TESTING DB")
    console.log(myId)

    db.collection("alldata").doc("test2").set({
        name: " ",
        email: email,
        subject: " ",
        date_of_post: " ",
        message: " "
    })

    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });


	//CREATE NEW USER
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  console.log(error)
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
		})	




};


