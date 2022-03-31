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
    class Student{
        var $name;
        var $major;
        var $gpa;

        function __construct($name, $major, $gpa){
            $this->name = $name;
            $this->major = $major;
            $this->gpa = $gpa;
        }
        function hasHonors(){
            if($this->gpa >= 3.5){
                echo "true";
            }
            else{
                echo "false";  
            }
        }
    }
    $student1 = new Student("Jim", "agriculture", 3.2);
    $student2 = new Student("Acha", "computer Engineering", 3.8);
    echo $student2->name;
    echo "<br>";
    echo $student1->hasHonors();
    ?>
</body>
</html>