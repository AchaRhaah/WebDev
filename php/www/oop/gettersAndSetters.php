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
        class Movie {
            public $title;
            private $rating;

            function __construct($title, $rating){
                $this->rating = $rating;
                $this->title = $title;
            }

            function getRating(){
                return $this->rating;
            }

            function setRating($rating){
                $this->rating = $rating;
                 
            }
        }
        $avengers = new Movie("avengers", "PG-13");
        echo $avengers->getRatings();
        echo $avengers->setRating("dog");
        
    ?>
</body>
</html>