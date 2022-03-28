<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="calculator.php">
        <input type="text" placeholder="num1" name="num1">
        <input type="text" placeholder="num2" name="num2">
        <input type="text" name="op">
        <input type="submit">
    </form>
    <?php
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        $op = $_POST["op"]

        echo $num1;
        echo $num2;
     ?>
</body>
</html>