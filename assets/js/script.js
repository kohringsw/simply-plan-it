var now = moment().format("[Today is] dddd, MMMM D, YYYY.");
var ids = ["#7, #8, #9, #10, #11, #12, #1, #2, #3, #4, #5"];

var $displayDate = $("#currentDay");
$displayDate.text(now);

$(".saveBtn").on("click", function() {
    $("input[type='text']").each(function(){
        
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
        
    });
});

