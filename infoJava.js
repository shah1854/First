// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvZd2AKleaKdzfCuTnJo69v0lvGlOb3gk",
    authDomain: "first-project-b8daa.firebaseapp.com",
    databaseURL: "https://first-project-b8daa-default-rtdb.firebaseio.com",
    projectId: "first-project-b8daa",
    storageBucket: "first-project-b8daa.appspot.com",
    messagingSenderId: "1019083194060",
    appId: "1:1019083194060:web:9a67fa7f9b09688924cc69",
    measurementId: "G-SPPQTFWZNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

document.body.onload = () => {
    get(ref(db, "/users")).then(snapshot => {
        const {...data} = snapshot.val();
        let x  = Object.values(data).filter((user) => user.email === sessionStorage.getItem("email"));
        let user = x[0];
        document.getElementById("emailInfo").value = user.email;
        document.getElementById("passwordInfo").value = user.password;
        document.getElementById("nameInfo").value = user.username;
        document.getElementById("IDInfo").value = user.id;
        document.getElementById("yearInfo").value = user.school;
    })

}


document.getElementById('updateInfo').onclick = function() {
    console.log("updating");

    let email, password, name, ID, yearInSchool;

    email = document.getElementById('emailInfo').value;
    password = document.getElementById('passwordInfo').value;
    name = document.getElementById('nameInfo').value;
    ID = document.getElementById('IDInfo').value;
    yearInSchool = document.getElementById('yearInfo').value;

    firebase.database().ref('/user' + ID).update({
        email: email,
        password: password,
        username:

    });
}