function displayDay() {
    console.log("this function will display the day of the week");
    //can I put grab the date from an online calendar?
    var todayDate = new Date();
    var myDay = todayDate.getDay();
    // console.log(myDay);
    var weekDay;
    if (myDay === 0) {
        weekDay = "Sunday";
    } else if (myDay === 1) {
        weekDay = "Monday";
    } else if (myDay === 2) {
        weekDay = "Tuesday";
    } else if (myDay === 3) {
        weekDay = "Wednesday";
    } else if (myDay === 4) {
        weekDay = "Thursday";
    } else if (myDay === 5) {
        weekDay = "Friday";
    } else if (myDay === 6) {
        weekDay = "Sunday";
    }
    var dateSet = $("#today");
    $("#today").text(weekDay);
}
function loadEvents() {
    console.log("~~~~~~~~~~~~~~~~~~~~");
    console.log("this needs to load the event-name div text from local storage");
    console.log("this needs to display event-name text");
    console.log("should this change colors?");
    myDate = new Date();
    myHour = myDate.getHours();
    myHour = parseInt(myHour);
    // console.log("myHour is " + myHour);

    // this creates a loop for each event-name
    $(".event-name").each(function (i) {
        //iterates 12 times. check


        //load local storate data
        // $(this).text("test" + i);
        //load from local storage under name (eventName+i)
        var loadMe = localStorage.getItem("eventName"+i);
        this.textContent = loadMe;


        //append




        //sets color
        if (myHour > (i + 7)) {
            $(this).css("background-color", "grey");
        } if (myHour < (i + 7)) {
            $(this).css("background-color", "green");
        } if (myHour === (i + 7)) {
            $(this).css("background-color", "red");
        }
    });

}

function initCalendar() {
    displayDay();
    loadEvents();


}
function saveEvent() {
    console.log("this should save event names");
    //need to figure out how to select the desired .event-name div
    //prev()
    // console.log(this);
    // console.log(event.target);
    // console.log($(event.target));
    // console.log($(event.target).prev("div"));
    // .prev());
    // var saveMe = $(event.target).prev("div");
    // console.log(saveMe);
    // console.log("------------");
    // console.log($(".eight"));
    // JSON.stringify(saveMe);
    // console.log(saveMe);
    // console.log(saveMe.textContent);
    //...I guess it might be easier just to save everything?

    $(".event-name").each(function (i) {
        //
        // console.log(this.textContent);
        //I do not know how to console.log this with jQuery
        // console.log($(this).attr(text));  does not work


            

    localStorage.setItem("eventName"+i, this.textContent);
                // 
 
    });
}



// *************************MAINAPP*****
$(document).ready(initCalendar());
$(document).ready($(".edit-btn").on("click", function () {
    saveEvent();
    loadEvents();

}));