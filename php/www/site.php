<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <form action="site.php" method="get">
        <input type="text" placeholder="Name" name="name">
        <input type="submit">
    </form>
    <?php
        // **Variables
        // $characterName = "John";
        // $age = 35;

        // echo ("there was a girl named $characterName <br>");
        // echo ("she was $age years old <br>");
        // echo ("She liked the name $characterName<br>");
        // echo ("but dint like being $age <br>");
        // echo("hello world");
        // echo "<h1>Me</h1>";
        // **Datatypes
        // //  1.string
        // $phrase = "this variable has a string datatype";
        // // 2.integers
        // $age = 30;
        // $gpa = 20.4;
        // // 3. booleans
        // $isMale = false;
        // echo $phrase;
        // // **strings
        // $phrase = "Acha Rha'ah";
        // echo $phrase[0];
        // echo "<br>";
        // echo str_replace("Rha'ah", "Na'ah", $phrase);
        // echo "<br>";
        // echo substr($phrase, 1, 6);
        // // echo $phase;
        // **Getting user input
        echo $_GET["name"];

    ?>

</body>
</html>