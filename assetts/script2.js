function displayDay() {
    //can I put grab the date from an online calendar?
    var todayDate = new Date();
    var myDay = todayDate.getDay();

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
        weekDay = "Saturday";
    }
    var dateSet = $("#today");
    $("#today").text(weekDay);
}
function loadEvents() {
    myDate = new Date();
    myHour = myDate.getHours();
    myHour = parseInt(myHour);

    // this creates a loop for each event-name
    $(".event-name").each(function (i) {
        //iterates 12 times. 

        //WHAT TO DO IF NO LOCAL STORAGE YET?   
        // try{
        //     localStorage.getItem("eventName" + i);
        // }
        // catch (e){
        //     localStorage.setItem("eventName" + i, " ");
        // }
        //was supposed to catch error with microsoft edge


        //load from local storage under name (eventName+i)
        var loadMe = localStorage.getItem("eventName" + i);
        this.textContent = loadMe;

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


    $(".event-name").each(function (i) {

        localStorage.setItem("eventName" + i, this.textContent);

    });
}



// *************************MAINAPP*****
$(document).ready(initCalendar());
$(document).ready($(".edit-btn").on("click", function () {
    saveEvent();
    loadEvents();

}));



//Current bug and desirable future implementations;
//mysterious microsoft Edge error
//make save button save specific hour instead of all of them
//save data upon hitting "enter"