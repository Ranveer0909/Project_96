
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC-Y5mskec2EkHqCuxPKrV9IuRCAmobIGo",
    authDomain: "kwitter-aa96d.firebaseapp.com",
    databaseURL: "https://kwitter-aa96d-default-rtdb.firebaseio.com",
    projectId: "kwitter-aa96d",
    storageBucket: "kwitter-aa96d.appspot.com",
    messagingSenderId: "526924180941",
    appId: "1:526924180941:web:b32f46db675b3fb6e92884",
    measurementId: "G-T7EZQHWFS4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room_name -"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}