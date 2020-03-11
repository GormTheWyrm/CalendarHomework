console.log("test");
// divs; hour, event-name, edit-div, edit-btn
//timeblock is row div
//#today should display todays date

//getDay method returns 0-6 with sunday as 0!
//is get hour 0-24?


function displayDate() {
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

    
    function setHours() {
        //should use .getHours() to set background colors of event-name (div)
    }


    // ***************** MAINAPP **************************
    //function to adjust color of active element... 
    //avtivation or can do thru timeclock directly?

    //displays todays date on top- not working yet
    $(document).ready(displayDate());
    $(document).ready(setHours());

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



        // MAIN APP************
        //call function here