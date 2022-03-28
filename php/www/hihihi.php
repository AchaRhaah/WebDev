<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="hihihi.php" method="post">
        <input type="text" placeholder="grade">
        <input type="submit">
    </form>
    <?php
        $grade = $_POST["grade"];
        switch($grade){
            case "A":
                echo "you did great";
                break;
        }
    ?>
</body>
</html>