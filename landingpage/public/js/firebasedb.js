
/*
const db = firebase.firestore();
// Reference the document
//const myPost = db.collection('products').doc('CGl2Obsqagfm1DguguLS');
// Listen to realtime changes 
//myPost.onSnapshot(doc => {
//  const data = doc.data();
//})

function dbSaveContactForm() {

	// Add a new document in collection "alldata"
	DocumentReference ref = db.collection("my_collection").document();
	String myId = ref.getId();

	db.collection("alldata").doc("myId").set({
	    name: "Alejandro",
	    email: "acpronadn@gmai.com",
	    date_of_post: "USA",
	    message: "firstPost"
	})

	.then(function() {
	    console.log("Document successfully written!");
	})
	.catch(function(error) {
	    console.error("Error writing document: ", error);
	});


};
*/
