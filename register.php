<?php 
if(isset($_POST["submit"])) {
    require("mysql.php");
    $stmt = $mysql->prepare("SELECT * FROM accounts WHERE USERNAME = :user"); // check username
    $stmt->bindParam(":user", $_POST["username"]);
    $stmt->execute();
    $count = $stmt->rowCount();
    if($count == 0) {
        // username frei

        // user anlegen
        $stmt = $mysql->prepare("INSERT INTO accounts (USERNAME, PASSWORD) VALUES (:user, :password)");
        $stmt->bindParam(":user", $_POST["username"]);
        $hash = password_hash($_POST["password"], PASSWORD_BCRYPT);
        $stmt->bindParam(":password", $hash);
        $stmt->execute();
        header("Location: login.php");
        exit;

    } else {
        header("");
        echo "Username already taken";
        exit;
    }
}
?>