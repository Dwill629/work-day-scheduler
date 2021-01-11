// varible to display todays current date //
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () {
    // click listener for the saveBtn 
    $(".saveBtn").on("click", function () {
        // to grab the values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // to save all text in your local storage input for the each time
        localStorage.setItem(time, text);
    })

})