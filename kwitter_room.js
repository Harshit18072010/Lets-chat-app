 
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room name - " + room_names);
     row = "<div class='room_name' id="+room_names+ "onclick='redirectToRoomName(this.id)' >#"+room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
      });});}
getData();
function addRoom()
{
      Room_name = document.getElementById("room_name").ariaValueMax;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });     

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html";
}

function send()
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
      });

      document.getElementById("msg").value ="";

}