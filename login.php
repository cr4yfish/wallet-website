<?php 

    include_once "mysql.php";
?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Index</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="main_style.css">
        <link rel="stylesheet" href="login.css">  
        <link rel="stylesheet" href="fonts.css">
        <link rel="stylesheet" href="https://use.typekit.net/otq7guv.css">
    </head>
<body id="body" class="checkerBackground" onload="checkPopup();">
    
<div id="loginCard" class="card unselectable">

    <h1 id="login_header" class="headerText bilo_light">Login</h1>

    <form action="loginProcess.php" method="POST" id="form_control">

        <div id="loginWrapper">
            
            <div class="loginInputWrapper">
                <label for="username" class="loginHeaderSmall bilo_thin">Username</label>
                <input autocomplete="off" type="text" id="username" name="username" class="login_input" placeholder="Enter your Username" required>
            </div>

            <div class="loginInputWrapper">
                <label for="password" class="loginHeaderSmall bilo_thin">Password</label>
                <input autocomplete="off" type="password" id="password" name="password" class="login_input" placeholder="Enter your Password" required>
            </div>

            <button type="submit" id="login_submit" name="submit" class="btn bilo_bold">Login</button>

            <a id="loginBTN" onclick="createNewAccount();" class="lowerInformation bilo_light pointer">Create new account</a>

        </div>
    </form>
</div>
    
    <script src="main_script.js" async defer></script>
</body>
</html>