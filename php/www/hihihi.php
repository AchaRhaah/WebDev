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
        <input type="text" name="grade" placeholder="grade">
        <input type="submit">
    </form>
    <?php
        $grades = $_POST["grade"];
        switch($grades){
            case "A":
                echo "you did amazing";
                break;
            case "B":
                echo "you did well";
                break;
            case "C":
                echo "you did good";
                break;
            default:
                echo "invalid grade";
        }
    ?>
</body>
</html>