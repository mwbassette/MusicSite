$(document).ready(function() {
     $("h1").css("color", "red");
});

console.log($("h1").css("color"));

$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").hasClass("margin-50");
$("h1").text("Good Bye");
$("button").html("<em>Yo, What's Good?</em>")
console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");
$("h1").click(function() {
    $("h1").css("color", "purple");
})

$("button").click(function() {
    $("h1").hide();
});
$("button").click(function() {
    $("h1").show();
});
$("button").click(function() {
    $("h1").fadeToggle();
});
$("button").on("click", function() {
    $("h1").animate({opacity: 0.5}) /*numeric values only */
});
$("button").click(function() {
    $("h1").slideToggle();
});



$(document).keydown(function(event) {
    $("h1").text(event.key);
});


$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});
$("h1").on("mouseout", function() {
    $("h1").css("color", "yellow");
});


$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
// $("button").remove();