const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArhFuYjRaOBASOd-9RqwicXN6urIpv-z4",
    authDomain: "auth-user-cfcae.firebaseapp.com",
    projectId: "auth-user-cfcae",
    storageBucket: "auth-user-cfcae.appspot.com",
    messagingSenderId: "462614529382",
    appId: "1:462614529382:web:00aca6909aa97d2e21f4a7"
});
const db = firebaseApp.firestore()
const auth = firebaseApp.auth();
const signUp = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {

            document.write('submit')
            console.log(result);
        })
        .catch((error) => {
            alert(error.code)
            alert(error.message)
        });

};
