// Get user input from HTML page
// Do something with that input
// Attach output to HTML page 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

$(document).ready(function () {
    function getDays() {
        var month = $("#month").val() - 1;
        var day = $("#day").val();

        // Get difference in days between future birthday date and today
        var today;
        var birthday;
        var year = new Date().getFullYear();

        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var today = new Date();
        var birthday = new Date(year,month,day);

        console.log("Today is " + today);
        console.log("Birthday entered is " + birthday);
        var output = Math.round(Math.abs((today.getTime() - birthday.getTime()) / (oneDay)));

        console.log(output);
    }

    $("#getDays").click(getDays);


});