<!DOCTYPE html>

<?php 
include_once "mysql.php";
        session_start();
        if(!isset($_SESSION["username"])){
        header("Location: login.html");
        exit;
        }  
?>

<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Wallet</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="main_style.css">
        <link rel="stylesheet" href="wallet.css">
        <link rel="stylesheet" href="fonts.css">
        <link rel="stylesheet" href="https://use.typekit.net/otq7guv.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    </head>
    
    <body>

        <div id="navbarWrapper">

            <span id="leftNav">
                <a class="navbarItem navbarItemActive brevia_reg pointer">Wallet</a>
                <a class="navbarItem brevia_reg pointer">Liquidity</a>
            </span>

            <span id="rightNav">
                <div id="accountName" class="bilo_bold">AccountName</div>
                <form action="logout.php">
                <button class="logoutBTN pointer lowerInformation bilo_light" type="submit">logout</button>
                </form>
                <div id="profilePicture"></div>
            </span>

        </div>

        <div id="contentWrapper">

            <div id="walletWrapper">

                <div class="listEntry">
                    <span class="coinName bilo_light">CFX</span>
                    <span class="value bilo_light">420€</span>
                </div>

                <div class="listEntry">
                    <span class="coinName bilo_light">CFX</span>
                    <span class="value bilo_light">420€</span>
                </div>

                <div class="listEntry">
                    <span class="coinName bilo_light">CFX</span>
                    <span class="value bilo_light">420€</span>
                </div>

                <div class="listEntry">
                    <span class="coinName bilo_light">CFX</span>
                    <span class="value bilo_light">420€</span>
                </div>

                <div class="listEntry">
                    <span class="coinName bilo_light">CFX</span>
                    <span class="value bilo_light">420€</span>
                </div>
                
                <div id="walletSpacer" class="spacer"></div>
                <span class="lowerInformation roboto_thin_italic">That's all?</span>

            </div>



        </div>

        <script src="main_script.js" async defer></script>
        
    </body>
</html>