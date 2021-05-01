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
    
    <body onload="getTime();moonScraper();">

        <div id="contentWrapper">

            <div class="grid-container">

                <div class="header walletCard">

                    <div id="leftNav">
                        <span class="unselectable navbarItem bilo_bold" id="clock"></span>
                    </div>
        
                    <span id="rightNav">
                        <div id="accountName" class="bilo_bold">AccountName</div>
                        <form action="logout.php">
                        <button class="logoutBTN pointer lowerInformation bilo_light" type="submit">logout</button>
                        </form>
                        <div id="profilePicture"></div>
                    </span>

                </div>

                
                <div class="walletCard totalBalance unselectable">
                    <span class="bilo_bold lowerInformation">Total Balance</span>
                    <span id="totalBalance" class="moneyText bilo_bold">420€</span>
                </div>

                <div class="walletCard personalBalance unselectable">
                    <span class="bilo_bold lowerInformation">Personal Balance</span>
                    <span id="personalBalance" class="moneyText bilo_bold">420€</span>
                </div>

                <div class="walletCard liquidity">
                    <span class="lowerInformation bilo_bold">Liquidity</span>

                    <div class="pairWrapper">
                        <span class="pairName bilo_bold">CFX/cUSDT</span>
                        <div class="pairDetails">
                            <span class="pairAmount bilo_bold">420MLP</span>
                            <span class="pairValue bilo_bold">420€</span>
                        </div>  
                    </div>

                    <div class="pairWrapper">
                        <span class="pairName bilo_bold">CFX/cUSDT</span>
                        <div class="pairDetails">
                            <span class="pairAmount bilo_bold">420MLP</span>
                            <span class="pairValue bilo_bold">420€</span>
                        </div>  
                    </div>
                    
                    <div class="pairWrapper">
                        <span class="pairName bilo_bold">CFX/cUSDT</span>
                        <div class="pairDetails">
                            <span class="pairAmount bilo_bold">420MLP</span>
                            <span class="pairValue bilo_bold">420€</span>
                        </div>  
                    </div>
                    
                    <div class="pairWrapper">
                        <span class="pairName bilo_bold">CFX/cUSDT</span>
                        <div class="pairDetails">
                            <span class="pairAmount bilo_bold">420MLP</span>
                            <span class="pairValue bilo_bold">420€</span>
                        </div>  
                    </div>


                </div>

                <div class="walletCard wallet">
                    <span class="lowerInformation bilo_bold">Wallet</span>

                    <div class="pairWrapper">
                        <span class="pairName bilo_bold">CFX</span>
                        <div class="pairDetails">
                            <span class="pairAmount bilo_bold">420CFX</span>
                            <span class="pairValue bilo_bold">420€</span>
                        </div>  
                    </div>

                    <div class="pairWrapper">
                        <span class="pairName bilo_bold">CFX</span>
                        <div class="pairDetails">
                            <span class="pairAmount bilo_bold">420CFX</span>
                            <span class="pairValue bilo_bold">420€</span>
                        </div>  
                    </div>

                    <div class="pairWrapper">
                        <span class="pairName bilo_bold">CFX</span>
                        <div class="pairDetails">
                            <span class="pairAmount bilo_bold">420CFX</span>
                            <span class="pairValue bilo_bold">420€</span>
                        </div>  
                    </div>

                    <div class="pairWrapper">
                        <span class="pairName bilo_bold">CFX</span>
                        <div class="pairDetails">
                            <span class="pairAmount bilo_bold">420CFX</span>
                            <span class="pairValue bilo_bold">420€</span>
                        </div>  
                    </div>

                </div>

                <div class="walletCard balanceGraph">
                    <span class="lowerInformation bilo_bold">Balance Graph</span>
                </div>
              </div>


        </div>

        <script src="main_script.js" async defer></script>
        
    </body>
</html>