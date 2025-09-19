const firebaseConfig = {
  apiKey: "AIzaSyBRXLd4inpmGdpNJUjTWZhZWTHzBLkyesM",
  authDomain: "encontro-verde.firebaseapp.com",
  databaseURL: "https://encontro-verde-default-rtdb.firebaseio.com",
  projectId: "encontro-verde",
  storageBucket: "encontro-verde.firebasestorage.app",
  messagingSenderId: "79154234735",
  appId: "1:79154234735:web:98c82924a7d83a5abe949a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    objetivo : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;

      //console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id='"+roomNames+"' onclick='redirectToRoomName(this.id)' > #"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}


getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
