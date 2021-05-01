function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function checkSite() {
    if (localStorage.getItem("loggedIn") == false) {
        window.open("login.html", "_self");
    } else if(localStorage.getItem("loggedIn") == true){
        window.open("wallet.html", "_self");
    } else {
        await sleep(3000);
        window.open("login.html", "_self");
    }
}


function createNewAccount() {

    // change php file
    var form_control = document.getElementById("form_control");
    form_control.setAttribute("action", "register.php")

    // change button text
    var button = document.getElementById("login_submit");
    button.textContent = "Register";

    // change lowerInformation Text 
    var loginInstead = document.getElementById("loginBTN");
    loginInstead.textContent ="Login instead";
    loginInstead.setAttribute("onclick", "loginInstead();")

    // change placeholer text
    var placeholderUsername = document.getElementById("username");
    placeholderUsername.setAttribute("placeholder", "Create new Username");

    var placeholderPassword = document.getElementById("password");
    placeholderPassword.setAttribute("placeholder", "Create new Password");

    // change header text
    var loginHeader = document.getElementById("login_header");
    loginHeader.textContent = "Register";
}

function loginInstead() {
    // change php file
    var form_control = document.getElementById("form_control");
    form_control.setAttribute("action", "login.php")

    // change button text
    var button = document.getElementById("login_submit");
    button.textContent = "Login";

    // change lowerInformation Text 
    var loginInstead = document.getElementById("loginBTN");
    loginInstead.textContent ="Register";
    loginInstead.setAttribute("onclick", "createNewAccount();")

    // change placeholer text
    var placeholderUsername = document.getElementById("username");
    placeholderUsername.setAttribute("placeholder", "Enter your Username");

    var placeholderPassword = document.getElementById("password");
    placeholderPassword.setAttribute("placeholder", "Enter your Password");

    // change header text
    var loginHeader = document.getElementById("login_header");
    loginHeader.textContent = "Login";
}