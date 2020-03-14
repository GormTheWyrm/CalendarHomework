//https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content


// divs; hour, event-name, edit-div, edit-btn
//timeblock is row div
//#today should display todays date

//getDay method returns 0-6 with sunday as 0!
//is get hour 0-24?





function displayDay() {
    console.log("this function will display the date");
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






//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function setColors() {
    //should  set background colors of event-name (div)
    console.log("this function will display the colors based on time");
    //FIXME
    var myDate = new Date();
    var currentHour = myDate.getHours();
    currentHour = parseInt(currentHour);
    // console.log(myDate);
    console.log(currentHour);
    // changeColors();
    //change background color of ids less than currentHour...
    var hour7 = $("#seven");
    var hour8 = $("#eight");
    var hour9 = $("#nine");
    var hour10 = $("#ten");
    var hour11 = $("#eleven");
    var hour12 = $("#twelve");
    var hour1 = $("#one");
    var hour2 = $("#two");
    var hour3 = $("#three");
    var hour4 = $("#four");
    var hour5 = $("#five");
    var lastHour = $("#six");


    

    //set all to grey
    //.timeblock
    $(".timeblock").css("background-color", "lightgrey");

    if (currentHour < 7) {
        $(".timeblock").css("background-color", "green");      

    } else if (currentHour === 7) {
        $("#seven").css("background-color", "red");
        $("#eight").css("background-color", "green");
        $("#nine").css("background-color", "green");
        $("#ten").css("background-color", "green");
        $("#eleven").css("background-color", "green");
        $("#twelve").css("background-color", "green");
        $("#one").css("background-color", "green");
        $("#two").css("background-color", "green");
        $("#three").css("background-color", "green");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");

    } else if (currentHour === 8) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "red");
        $("#nine").css("background-color", "green");
        $("#ten").css("background-color", "green");
        $("#eleven").css("background-color", "green");
        $("#twelve").css("background-color", "green");
        $("#one").css("background-color", "green");
        $("#two").css("background-color", "green");
        $("#three").css("background-color", "green");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 9) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "red");
        $("#ten").css("background-color", "green");
        $("#eleven").css("background-color", "green");
        $("#twelve").css("background-color", "green");
        $("#one").css("background-color", "green");
        $("#two").css("background-color", "green");
        $("#three").css("background-color", "green");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 10) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "red");
        $("#eleven").css("background-color", "green");
        $("#twelve").css("background-color", "green");
        $("#one").css("background-color", "green");
        $("#two").css("background-color", "green");
        $("#three").css("background-color", "green");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 11) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "red");
        $("#twelve").css("background-color", "green");
        $("#one").css("background-color", "green");
        $("#two").css("background-color", "green");
        $("#three").css("background-color", "green");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 12) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "grey");
        $("#twelve").css("background-color", "red");
        $("#one").css("background-color", "green");
        $("#two").css("background-color", "green");
        $("#three").css("background-color", "green");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 13) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "grey");
        $("#twelve").css("background-color", "grey");
        $("#one").css("background-color", "red");
        $("#two").css("background-color", "green");
        $("#three").css("background-color", "green");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 14) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "grey");
        $("#twelve").css("background-color", "grey");
        $("#one").css("background-color", "grey");
        $("#two").css("background-color", "red");
        $("#three").css("background-color", "green");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 15) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "grey");
        $("#twelve").css("background-color", "grey");
        $("#one").css("background-color", "grey");
        $("#two").css("background-color", "grey");
        $("#three").css("background-color", "red");
        $("#four").css("background-color", "green");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 16) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "grey");
        $("#twelve").css("background-color", "grey");
        $("#one").css("background-color", "grey");
        $("#two").css("background-color", "grey");
        $("#three").css("background-color", "grey");
        $("#four").css("background-color", "red");
        $("#five").css("background-color", "green");
        $("#six").css("background-color", "green");
    } else if (currentHour === 17) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "grey");
        $("#twelve").css("background-color", "grey");
        $("#one").css("background-color", "grey");
        $("#two").css("background-color", "grey");
        $("#three").css("background-color", "grey");
        $("#four").css("background-color", "grey");
        $("#five").css("background-color", "red");
        $("#six").css("background-color", "green");

    } else if (currentHour === 18) {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "grey");
        $("#twelve").css("background-color", "grey");
        $("#one").css("background-color", "grey");
        $("#two").css("background-color", "grey");
        $("#three").css("background-color", "grey");
        $("#four").css("background-color", "grey");
        $("#five").css("background-color", "grey");
        $("#six").css("background-color", "green");
    } else {
        $("#seven").css("background-color", "grey");
        $("#eight").css("background-color", "grey");
        $("#nine").css("background-color", "grey");
        $("#ten").css("background-color", "grey");
        $("#eleven").css("background-color", "grey");
        $("#twelve").css("background-color", "grey");
        $("#one").css("background-color", "grey");
        $("#two").css("background-color", "grey");
        $("#three").css("background-color", "grey");
        $("#four").css("background-color", "grey");
        $("#five").css("background-color", "grey");
        $("#six").css("background-color", "grey");
        
    }
}

function saveEvents(){
    console.log("this function will save events");
    //might need to set up some sort of event to trigger the eventname region...
    //and remove stop propagation?

    console.log(this.$("event-name"));
    
    }

function upDateEvent() {

    //may also delete them? need to figure out how writing
    //perhaps this function, maybe call another function- to save to local storage...
    //first save event to local
    saveEvents();
    //will save div text to local...

    //now update page
    loadEvents();

}
// function upDateTime(){
//     console.log("this function will refresh...");
//     //may not implement this... was going to have system periodically reload events and check the hour...
// }
function loadEvents() {
    //sets day of the week at the top
    displayDay();
    setColors();

    //main function that loads page...
    //first load content for each event (from local storage)
    //then get time (hours)
    //then set background colors based on time

    //should this reset day of the week?



}






// ***************** MAINAPP **************************



$(document).ready(loadEvents());        //main function that ses up page
//should get data from local storage and display it as events...
//currently empty
//should call another function that udpates colors based on time


$(document).ready($(".edit-btn").on("click", function () {
    //function that saves data
    upDateEvent();
}));








     //   
    //function to adjust color of active element... 
    //avtivation or can do thru timeclock directly?

    //need a function to load saved events





    // $(document).ready(upDateTime());
        //this should update app every 20 minutes... ask if thats a good idea

//add ready method to change each event-name div background color based on time
//add event listener to all edit-btn
//which saves what is written to the local storage






    // hour, event-name, edit-div as 3 main compenents within timeblock (all classes)
    //timeblocks have unique IDs; time of day in letters (seven, eight, one, etc)
        //events should add span to time block. Hopefully that allows for multiple events to appear on the timeblock
        //not sure how to edit multiple events...will likely 
        //...need to find a way to allow users to choose spans...
        //edit is now a button class


//add span upon submit?


