function logout()
{
    localStorage.removeItem("username"); 
    localStorage.removeItem("roomname"); 
    window.location ="kwitter_room.html"; 
}

function addroom() {
     room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update({  purpose : "adding room name"    });
   localStorage.setitem("room_name", room_name);
     window_location = "kwitter_room.html"; 
    }

    
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

<div>
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem(room_name, name);
window_location= "kwitter_page.html";
}




    



</div>
//End code
});});}
getData(); 

function logout()
{
    localStorage.removeItem("username"); 
    localStorage.removeItem("roomname"); 
    window.location ="index.html"; 
}