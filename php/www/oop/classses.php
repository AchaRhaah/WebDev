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
            var $title;    

            function __construct($atitle, $aAuthor, $aPages){
                // echo "New book created!";
                $this->title = $atitle;
                $this->author = $aAuthor;
                $this->pages = $aPages;
            }
        }
        $book1 = new Book("Harry Potter", "JK Rolings", 400);
        
        $book2 = new Book("Think and Grow rich", "Napoleon Hills", 500);
        
        echo $book1->author;
        echo "<br>";
        echo $book2->author;
    ?>

</body>
</html>