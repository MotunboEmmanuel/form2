const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyAOmgVtpbY_OwU-W679brHwnE2AYPjMlZw",
  authDomain: "edfan-52d8f.firebaseapp.com",
  databaseURL: "https://edfan-52d8f-default-rtdb.firebaseio.com",
  projectId: "edfan-52d8f",
  storageBucket: "edfan-52d8f.appspot.com",
  messagingSenderId: "260990769303",
  appId: "1:260990769303:web:d4d558d3019f28690571d2"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var edfanDB = firebase.database().ref("student database");

document.getElementById("student database").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var surname = getElementVal("surname");
  var firstname = getElementVal("firstname");
  var lastname = getElementVal("lastname");
  var emailid = getElementVal("emailid");
  var studentid = getElementVal("studentid");

  saveMessages(surname, firstname, lastname, emailid, studentid);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("student database").reset();
}

const saveMessages = ( surname, firstname, lastname, emailid, studentid) => {
  var newContactForm = edfanDB.push();

  newContactForm.set({
    surname: surname,
    firstname: firstname,
    lastname: lastname,
    emailid: emailid,
    studentid: studentid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
