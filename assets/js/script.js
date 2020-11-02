var ids = ["#7", "#8", "#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"] 
var hour = index + 7;
console.log()
var index = 0;

// current time and format
var currentTime = moment().subtract(12, "hours").format("H");
console.log(currentTime);


// display current date at the top of the page
var now = moment().format("[Today is] dddd, MMMM D, YYYY");
var $displayDate = $("#currentDay");
$displayDate.text(now);

// save tasks with saveBtn
$(".saveBtn").on("click", function() {
    $("input[type='text']").each(function(){
        
        var id = $(this).attr("id");
        var value = $(this).val();
        
        localStorage.setItem(id, value);
    });
});

// load tasks from localStorage
$("#7").val(localStorage.getItem("7"));
$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#1").val(localStorage.getItem("1"));
$("#2").val(localStorage.getItem("2"));
$("#3").val(localStorage.getItem("3"));
$("#4").val(localStorage.getItem("4"));
$("#5").val(localStorage.getItem("5"));

$("input").each(function(index) {
    console.log(index + 7 + $(this).text());
    if (index + 7 === currentTime) {
        $(this).addClass("present");
    }
  });