<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="madlibs.php" method="get">
        <input type="text" name="color" placeholder="color">
        <input type="text" name="pluralNoun" placeholder="plural noun">
        <input type="text" name="celebrity" placeholder="celebrity">
        <input type="submit">
    </form>

    <?php
        $color = $_GET["color"];
        $celebrity = $_GET["celebrity"];
        $pn = $_GET["pluralNoun"];

        echo "roses are $color<br>";
        echo "$pn are blue<br>";
        echo "I love $celebrity<br>";
    ?>
</body>
</html>