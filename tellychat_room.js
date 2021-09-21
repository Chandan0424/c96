


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
    document.getElementById("user").innerHTML="Welcome "+username+"!";

function addRoom(){
    roomName=document.getElementById("roomname").value;
    localStorage.setItem("roomName",roomName);
    firebase.database().ref("/").child(roomName).update({
        purpose:"adding room name",
        name:roomName
  })
    window.location="tellychat_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log(Room_names);
    row="<div class='room_Name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>"
    document.getElementById("output").innerHTML+=row;
   });});}
getData();

function redirectToRoomName(Name){
   console.log(Name);
   localStorage.setItem("roomName",Name);
   window.location="tellychat_page.html"
}

function logout(){
   localStorage.removeItem("username");
   localStorage.removeItem("roomName");
   window.location="index.html"
}