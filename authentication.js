// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzWyZjy_zvYAd8qgxsFVUSNqZ60pyhDY8",
    authDomain: "internship-d8efa.firebaseapp.com",
    projectId: "internship-d8efa",
    storageBucket: "internship-d8efa.appspot.com",
    messagingSenderId: "147314862396",
    appId: "1:147314862396:web:bd5b6cd8ed813a66e69639",
    measurementId: "G-CFCEPT8DDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)


const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            window.location.href = "welcome.html"
            // ...
        })
        .catch((error) => {
            window.location.href = "welcome.html"
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert("Enter All details")

            // ..
        });
})
