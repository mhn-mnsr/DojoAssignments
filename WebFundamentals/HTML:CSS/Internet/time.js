var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if (HOUR < 9 && MINUTE > 30){
    console.log("It's almost 9", PERIOD, "in the morning")
}

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if(HOUR === 7 && MINUTE < 30){
    console.log("It's just", HOUR, PERIOD, "in the evening");
}