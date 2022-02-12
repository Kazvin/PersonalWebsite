
//target date to countdown to
var setDate = new Date('2050-01-01T00:00:00');
// console.log('Date set to: ' + setDate);

var currentDate;



export function countdown() {
    currentDate = new Date();


    var time = (setDate.getTime() - currentDate.getTime());
    var seconds = Math.floor(time/1000)%60;
    var minutes = Math.floor(time/60/1000 % 60);
    var hours = Math.floor(time/1000/3600 % 24);
    var days = Math.floor(time/3600/24/1000);

    

    // console.log('days, hours, minutes, seconds', days, hours, minutes, seconds);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var totalSeconds = Math.floor(time/1000);
    var totalMinutes = Math.floor(time/60/1000);
    var totalHours = Math.floor(time/1000/3600);

    document.getElementById("tseconds").innerHTML = totalSeconds;
    document.getElementById("tminutes").innerHTML = totalMinutes;
    document.getElementById("thours").innerHTML = totalHours;
}

export function changeDate() {
    var newDate = document.getElementById("Date").value;
    console.log("newDate: ", newDate);
    setDate = new Date(newDate+"T00:00:00");
}

countdown();



setInterval(countdown, 1000);


