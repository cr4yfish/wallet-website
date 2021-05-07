function sleep(ms) {
    
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkSite() {

    if (localStorage.getItem("loggedIn") == false) {
        window.open("login.php", "_self");
    } else if(localStorage.getItem("loggedIn") == true){
        window.open("wallet.html", "_self");
    } else {
        await sleep(3000);
        window.open("login.php", "_self");
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
        if (currentDate.getMinutes() < 10) {
            var minutes = "0" + currentDate.getMinutes();
        } else {
            var minutes = currentDate.getMinutes();
        }
        if (currentDate.getHours() < 10) {
            var hours = "0" + currentDate.getHours();
        } else {
            var hours = currentDate.getHours();
        }
        let time = hours + ":" + minutes + ":" + seconds;
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
    button.setAttribute("onclick", "RegisterPopUp();")

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
    form_control.setAttribute("action", "loginProcess.php")

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


function RegisterPopUp() {

    localStorage.setItem("triggerPopup", "true");

}

async function checkPopup(x) {

    var popupWrapper = document.createElement("div");
    popupWrapper.setAttribute("id", "registerPopup");

    var icon = document.createElement("div");
    icon.setAttribute("id", "checkIcon");

    var closeIcon = document.createElement("div");
    closeIcon.setAttribute("class", "closeIcon pointer")
    closeIcon.setAttribute("onclick", "checkPopup(true);")

    var popupText = document.createElement("span");
    popupText.setAttribute("class", "bilo_light");
    popupText.textContent = "Account created!"

    if (x != true) {

        if (localStorage.getItem("triggerPopup") == "true") {

            console.log("x = true!");
    
            popupWrapper.appendChild(icon);
            popupWrapper.appendChild(popupText);
            popupWrapper.appendChild(closeIcon);
            
            var body = document.getElementById("body");
            body.prepend(popupWrapper);
    
            // reset
            // localStorage.removeItem("triggerPopup");
        }
    
    } else {

        console.log("x false");
        document.getElementById("registerPopup").style.opacity = "0";
        await sleep(500);
        document.getElementById("registerPopup").style.display = "none";
        localStorage.removeItem("triggerPopup");
    }
}

// backend

var currentUser;
var share;

async function getUser() {
    
    var accountName = document.getElementById("accountName").textContent.toString().toLowerCase();
    var allowedUsers = ["aitor", 0 ,"anil", 34.48 , "efe", 34.48 , "hannes", 11.49 , "manuel", 19.54];
    
    for(i = 0; i < allowedUsers.length; i++) {
        var current = allowedUsers[i].toString().toLowerCase();
        if(accountName === current) {
            console.log("Found user");
            currentUser = allowedUsers[i].toString();
            share = allowedUsers[i+1];
        }
    }
}

function calcPersonalProfit(x) {
    var initInvest = 174;

    var totalProfit = parseInt(x.match(/\d/g).join(''), 10);
    var PersonalProfit = ((totalProfit/100)-initInvest) * (share/100);
    console.log("User: ", currentUser);
    console.log("Share: ", share.toString(), "%");
    console.log("PersonalProfit: $", PersonalProfit.toFixed(2).toString());

    var personalProfitElement = document.getElementById("personalBalance");
    personalProfitElement.textContent = "$" + PersonalProfit.toFixed(2).toString();
}

async function moonScraper() {

    if (localStorage.getItem("totalBalance") == null ) {

        var url = "https://app.scrapingbee.com/api/v1/?api_key=E4TV3H9N8M9HL5VK3ZH7YYAY7TCHZAFZO6FAK80F0907H9LIQV83PJPOTKB1YFEEYJG9SJ9Y7PS2UR0F&url=https%3A%2F%2Fmoonswap.fi%2Fanalytics%2Faccount%2Fcfx%3Aaajevc03t7dcwh6627xg72p6bpkzhv0u3a8fy1uz8n&wait=20000&block_ads=false&block_resources=false";

        var xhr = new XMLHttpRequest();
        
        xhr.open("GET", url);
        xhr.responseType = "document";
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
    

            // get total Balance
                var uncleanedTotalBalance = xhr.responseXML.querySelectorAll(".css-1khrv57");

                var totalBalanceElement = document.getElementById("totalBalance");

                totalBalanceElement.textContent = uncleanedTotalBalance[0].innerText;
                localStorage.setItem("totalBalance", uncleanedTotalBalance[0].innerText);

                calcPersonalProfit(localStorage.getItem("totalBalance"));

            // get liquid positions

                var uncleanedPositions = xhr.responseXML.querySelectorAll(".sc-cTjmhe a .sc-iwsKbI div");
                
                var uncleanedLiquidity = xhr.responseXML.querySelectorAll("#body-wrapper > div > div.sc-dxZgTM.gOoTDu > div > div.sc-bIqbHp.eGOmvQ > div:nth-child(5) > div > div.sc-jqIZGH.eenAcb.css-1yh09yi div div.sc-jMMfwr.fUxnPS div:nth-child(3)");


                console.log("Positions: ", uncleanedPositions);
                console.log("liquidity: ", uncleanedLiquidity);

                console.log("Amount of positions: " + uncleanedLiquidity.length);

                var pairNameArray = [];
                var pairValueArray = [];
                var pairAmountArray = [];

                for (i = 0; i < uncleanedLiquidity.length-1; i++)  {

                    var cleaner = uncleanedLiquidity[i].innerText.toString().replace("$", "").split(".");
                    var cleaner1Index = cleaner[1].toString()
                    var cleaner2 = cleaner1Index.substring(0, cleaner1Index.length - 1);
                    var cleanedLiquidity = cleaner[0]+ "." + cleaner2;

                    //var cleanedLiquidity = parseInt(uncleanedLiquidity[i].innerText.match(/\d/g).join(''), 10);

                    var pairName = uncleanedPositions[i].innerText;
                    var pairAmount = "value";
                    var pairValue = cleanedLiquidity;

                    console.log("Pair Name: ", pairName);
                    console.log("Pair Value: ", pairValue);

                    pairNameArray.push(pairName);
                    pairValueArray.push(pairValue);
                    pairAmountArray.push(pairAmount);

                    drawLiquidity(pairName, pairAmount, pairValue);
                }

                localStorage.setItem("pairNameArray", pairNameArray);
                localStorage.setItem("pairValueArray", pairValueArray);
                localStorage.setItem("pairAmountArray", pairAmountArray);
           }};
        
        xhr.send();
        
    } else {

        console.log("Used cached Result.")
        console.log("------------")

        var totalBalance = localStorage.getItem("totalBalance");
        var totalBalanceElement = document.getElementById("totalBalance");
        
        totalBalanceElement.textContent = totalBalance;

        calcPersonalProfit(totalBalance);

        var pairNameString = localStorage.getItem("pairNameArray");
        var pairValueString = localStorage.getItem("pairValueArray");
        var pairAmountString = localStorage.getItem("pairAmountArray");

        var pairNameArray = pairNameString.split(",");
        var pairValueArray = pairValueString.split(",");
        var pairAmountArray = pairAmountString.split(",");

        console.log("----------")

        for (i = 0; i < pairNameArray.length; i++)  {

            console.log("Pair Name: ", pairNameArray[i]);
            console.log("Pair Value: ", pairValueArray[i]);
            console.log("Pair Value: ", pairAmountArray[i]);
            console.log("----------")

            drawLiquidity(pairNameArray[i], pairAmountArray[i], pairValueArray[i]);
        }
    }
}

// liquidity
function drawLiquidity(pairName, pairAmount, pairValue) {

        // get parent element
        var walletCard = document.getElementById("positions");

        // create all element
        var pairWrapperElement = document.createElement("div");
        pairWrapperElement.setAttribute("class", "pairWrapper");

        var pairNameElement = document.createElement("span");
        pairNameElement.setAttribute("class", "pairName bilo_bold");
        pairNameElement.textContent = pairName;

        var pairDetailsElement = document.createElement("div");
        pairDetailsElement.setAttribute("class", "pairDetails");

        /* var pairAmountElement = document.createElement("span");
        pairAmountElement.setAttribute("class", "pairAmount bilo_bold");
        pairAmountElement.textContent = pairAmount; */

        var pairValueElement = document.createElement("span");
        pairValueElement.setAttribute("class", "pairValue bilo_bold"); 
        pairValueElement.textContent = "$" + pairValue;

        // attach them
        pairDetailsElement.appendChild(pairValueElement);
        // pairDetailsElement.appendChild(pairAmountElement);

        pairWrapperElement.appendChild(pairNameElement);
        pairWrapperElement.appendChild(pairDetailsElement);

        walletCard.appendChild(pairWrapperElement);
}

// on page laod, primarily using cached results
async function refresh() {
    loadingbar();
    console.log("Refreshing Prices..");
    moonScraper();
}

// when "refresh" is clicked, removes local results and gets new
async function forceRefresh() {

    var pairWrappers = document.getElementsByClassName("pairWrapper");
    for (i = 0; i < pairWrappers.length;) {
        pairWrappers[i].remove();
    }
    

    localStorage.removeItem("pairAmountArray");
    localStorage.removeItem("pairValueArray");
    localStorage.removeItem("pairNameArray");
    localStorage.removeItem("totalBalance");

    loadingbar();
    console.log("Refreshing..");
    moonScraper();
}

async function loadingbar() {

    if (localStorage.getItem("totalBalance") == null ) {
        var refreshPopup = document.getElementById("refreshPopup");
        var loadingBar = document.getElementById("loadingBar");
    
        refreshPopup.style.display = "block";
        loadingBar.style.animation = "load 30s normal forwards";
        refreshPopup.style.opacity = "1";
        
        await sleep(30000);
    
        // turn off
        refreshPopup.style.opacity = "0";
        await sleep(1000);
        refreshPopup.style.display = "none";
        loadingBar.style.animation = "none";
    }
}