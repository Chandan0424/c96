const firebaseConfig = {
      apiKey: "AIzaSyDYLgjje871TKJSGABX94mMS7icUQSMeUU",
      authDomain: "kwitter2-0-22b3f.firebaseapp.com",
      databaseURL: "https://kwitter2-0-22b3f-default-rtdb.firebaseio.com",
      projectId: "kwitter2-0-22b3f",
      storageBucket: "kwitter2-0-22b3f.appspot.com",
      messagingSenderId: "753464457067",
      appId: "1:753464457067:web:d6f8be65567140c43cfe2e",
      measurementId: "G-G2TFFQGS5P"
    };
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
    roomName=localStorage.getItem("roomName");

    function Send(){
          msg=document.getElementById("msginput").value;
          firebase.database().ref(roomName).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msginput").value="";
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("msg").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logOut(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
      window.location="index.html"
}


