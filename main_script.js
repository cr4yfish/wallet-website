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

async function getTime() {

    var clockElement = document.getElementById("clock");
    var counter = 1;

    for (let i = 0; i < counter; i++) {
        var currentDate = new Date();
        if (currentDate.getSeconds() < 10) {
            var seconds = "0" + currentDate.getSeconds();
        } else {
            var seconds = currentDate.getSeconds();
        }
        let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + seconds;
        clockElement.textContent = time + " Uhr";
        counter++;
        await sleep(1000);
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


async function moonScraper() {

    if (localStorage.getItem("totalBalance") == null ) {
        var url = "https://app.scrapingbee.com/api/v1/?api_key=96ATE988JKEB0EWSQN25237HZCHO5M4Y3AMFWASLZ3NWQU8UAZGR9PD6BOX3ELBUUMKYBTJNXGWHZX9O&url=https%3A%2F%2Fmoonswap.fi%2Fanalytics%2Faccount%2Fcfx%3Aaajevc03t7dcwh6627xg72p6bpkzhv0u3a8fy1uz8n&wait=16000&block_ads=false&block_resources=false";

        var xhr = new XMLHttpRequest();
        
        xhr.open("GET", url);
        xhr.responseType = "document";
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseXML);
    
                var uncleanedTotalBalance = xhr.responseXML.querySelectorAll(".css-1khrv57");
                console.log(uncleanedTotalBalance);

                var totalBalanceElement = document.getElementById("totalBalance");
    
                totalBalanceElement.textContent = uncleanedTotalBalance[0].innerText;
                localStorage.setItem("totalBalance", uncleanedTotalBalance[0].innerText);
           }};
        
        xhr.send();
    } else {
        var totalBalance = localStorage.getItem("totalBalance");
        var totalBalanceElement = document.getElementById("totalBalance");
        console.log("Used cached Result.")

        totalBalanceElement.textContent = totalBalance;
    }



}