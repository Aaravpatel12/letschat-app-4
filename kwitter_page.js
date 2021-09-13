//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDsPtuk0Yp7werjjOGtgMUlmGSccu8rXIg",
      authDomain: "kwitter-d34db.firebaseapp.com",
      databaseURL: "https://kwitter-d34db-default-rtdb.firebaseio.com",
      projectId: "kwitter-d34db",
      storageBucket: "kwitter-d34db.appspot.com",
      messagingSenderId: "501729417847",
      appId: "1:501729417847:web:cde4502fed9b1488518472",
      measurementId: "G-GRY7CYQ57Z"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
