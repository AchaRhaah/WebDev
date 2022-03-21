// $("h1").css("color", "red");

// click events
// $("button").click(function(){
//     $("h1").css("color", "orange");
// });
// keypress events
$("input").keypress(function(event){
    // alert(event.key);
})

// challenge
$("input").keypress(function(event){
    $("h1").text(event.key);
})
// instead of using keypress or click you can use the "on" function

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});

// adding and removing elements with jquery
$("h1").before("<button>created</button>")
$("h1").after("<button>created</button>")
// **before()
// **after()
// **prepend()
// **append()
// **remove()

// website animations with JQuery
$("button").click(function(){
    //$("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeIn();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideToggle(); //good for dropdowns

    // **To customise animations, use "animate() function"
    $("h1").animate({opacity: 0.5});
});
  

