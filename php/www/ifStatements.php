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
        $a = 3;
        $b = 7;
        function getMax($num1, $num2){
            if($num1 > $num2){
                return true;
            }
            else{
                return false;
            }
        }
        // echo getMax(1,4);
        if(getMax(9, 4)){
            echo "you are smart";
        }
        else{
            echo "you are pretty";
        }
    ?>
</body>
</html>