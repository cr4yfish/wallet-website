function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function checkSite() {
    if (localStorage.getItem("loggedIn") == false) {
        window.open("login.html", "_self");
    } else if(localStorage.getItem("loggedIn") == true){
        window.open("wallet.html", "_self");
    } else {
        await sleep(5000);
        window.open("login.html", "_self");
    }
}

