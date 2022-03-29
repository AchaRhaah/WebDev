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
        class Book {
            var $author;
            var $pages;

            function __construct(){
                echo "New book created!";
            }
        }
        $book1 = new Book();
        $book1->title = "HArry Potter";
        $book1->author = "JK Rowling";
        $book1->pages = 400;

        $book2 = new Book();
        $book2->title = "Rediscovering the kingdom";
        $book2->author = "Myles Munroe";
        $book2->pages = 700;

        echo $book1->author;
        echo "<br>";
        echo $book2->author;
    ?>

</body>
</html>