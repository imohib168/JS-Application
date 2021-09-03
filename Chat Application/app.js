// Signup using Email
let signup = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "") {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                alert("Signup Successfull");
                location.href = "chat.html";
            })

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                alert(errorMessage);
            });
    } else {
        alert("Please Enter your Email.")
    }
}

// Signup with Google
let signupWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        alert("Signup Successfull");
        location.href = "chat.html";
    }).catch(function (error) {
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        alert(errorMessage);
    });
}


// Signout User
let signout = () => {
    firebase.auth().signOut().then(function () {
        alert("Sign-out successful.")
        location.href = "index.html"
    }).catch(function (error) {
        alert("An error happened.")
    });

}


// TODO 
// signin page and link with firebase
// facebook authentication