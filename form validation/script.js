const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === "") {
        setErrorFor(username, "Username can't be blank")
    } else {
        setSuccessFor(username)
    }

    if (emailValue === "") {
        setErrorFor(email, "Email can't be blank")
    } else if (!isMailValid(emailValue)) {
        setErrorFor(email, "Email is not Valid.!")
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password can't be blank")
    } else {
        setSuccessFor(password)
    }

    if (confirmPasswordValue === "") {
        setErrorFor(confirmPassword, "Password can't be blank")
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "Password doesn't match")
    }
    else {
        setSuccessFor(confirmPassword)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.className = "form-control error"
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isMailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}