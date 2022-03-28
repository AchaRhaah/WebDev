<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="associativeArrays.php" method="post">
        <input type="text" placeholder="Name" name="name">
        <input type="submit">
    </form>
    <!-- associative arrays are arrays in key value pairs -->
    <?php
        $grades = array("Jim"=>"A+", "Pam"=>"B-", "Oscar"=>"C+");
        // echo $grades["Pam"];
        // $grades["Jim"] = "F"; 
        echo $grades[$_POST["name"]];
        // echo $_POST["name"]
    ?>
</body>
</html>