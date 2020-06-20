// variable for moment() method.

// var moment =moment();

// variables for on save button click
var event;
var time;


// Display current day and time at the top of timetable,
// we import moment() method to format this.

console.log(moment().format("dddd, MMMM Do"));

$("#currentDay").text(moment().format("dddd, MMMM Do"));


// functions

// We use color code for each hour to reflect the time session is in the past,the present, or in the future
// color is changed by current time of the day
// We use red to reflect current hour, and gray for the past, and green for the future.

// Once the page is totally loaded, call both colorChange and renderEvent function.
$(document).ready(function () {
  colorChange();
  renderEvent();
});

// function works on text area color changing
function colorChange() {
  var currentTime = moment().hours();
  
  console.log("Current Time" + currentTime);

  
  $(".input").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    console.log(timeTest);

    if (currentTime > timeTest) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentTime < timeTest) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
}


// once the save button clicked, the event info with matched time should be stored in localStorage.
$(".saveBtn").click(function () {
  event = $(this).siblings(".input").val();
  console.log(event);
  time = $(this).siblings(".hour").text();
  console.log(time);
  localStorage.setItem(time, JSON.stringify(event));

  colorChange();
  renderEvent();
});

// renderEvent function can make the user input be displayed in text field 
function renderEvent() {
  var saveEvent_9am = JSON.parse(localStorage.getItem("9:00 am"));
  $("#9").val("");
  $("#9").val(saveEvent_9am);

  var saveEvent_10am = JSON.parse(localStorage.getItem("10:00 am"));
  $("#10").val("");
  $("#10").val(saveEvent_10am);

  var saveEvent_11am = JSON.parse(localStorage.getItem("11:00 am"));
  $("#11").val("");
  $("#11").val(saveEvent_11am);

  var saveWords12pm = JSON.parse(localStorage.getItem("12:00 pm"));
  $("#12").val("");
  $("#12").val(saveWords12pm);

  var saveEvent_1pm = JSON.parse(localStorage.getItem("1:00 pm"));
  $("#13").val("");
  $("#13").val( saveEvent_1pm);

  var saveEvent_2pm = JSON.parse(localStorage.getItem("2:00 pm"));
  $("#14").val("");
  $("#14").val(saveEvent_2pm);

  var saveEvent_3pm = JSON.parse(localStorage.getItem("3:00 pm"));
  $("#15").val("");
  $("#15").val(saveEvent_3pm);

  var saveEvent_4pm = JSON.parse(localStorage.getItem("4:00 pm"));
  $("#16").val("");
  $("#16").val(saveEvent_4pm);

  var saveEvent_5pm = JSON.parse(localStorage.getItem("5:00 pm"));
  $("#17").val("");
  $("#17").val(saveEvent_5pm);
}
