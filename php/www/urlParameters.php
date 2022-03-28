<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="urlParameters.php" method="get" >
        <input type="text" placeholder="name" name="name"><br>
        <input type="submit">
    </form>
    <form action="urlParameters.php" method="post" >
        <input type="text" placeholder="name1" name="name1"><br>
        <input type="submit">
    </form>
    <?php
    echo $_GET["name"]; 
    echo $_POST["name1"]; 
    ?>
</body>
</html>