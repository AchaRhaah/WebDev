<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $friends = array("Salome", "Sonia", "Edwin", "Randy");
    // echo $friends[1];
    $friends[2] = "Alexia";
    echo $friends[2];
    $friends[10] = 400;
    echo $friends[10];
    // length of array
     echo count($friends);

    ?>
</body>
</html>