var firebaseConfig = {
	apiKey: "AIzaSyA9qu9iXThvc8hrVAcmBfi3MBv1B65RD3Q",
	authDomain: "laicp-power.firebaseapp.com",
	databaseURL: "https://laicp-power-default-rtdb.firebaseio.com",
	projectId: "laicp-power",
	storageBucket: "laicp-power.appspot.com",
	messagingSenderId: "899974741800",
	appId: "1:899974741800:web:c58d8fb4d5a98f526e9a1d",
	measurementId: "G-Y7089NJDVZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});