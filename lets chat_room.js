
const firebaseConfig = {
      apiKey: "AIzaSyDZBr6bN91MoarZLXKGW9TP4KQGJYJu9PU",
      authDomain: "kwitter-35dbb.firebaseapp.com",
      databaseURL: "https://kwitter-35dbb-default-rtdb.firebaseio.com",
      projectId: "kwitter-35dbb",
      storageBucket: "kwitter-35dbb.appspot.com",
      messagingSenderId: "319165445320",
      appId: "1:319165445320:web:c0fb543c31a445428161fd"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //start code
      //End code
      });});}
getData();
