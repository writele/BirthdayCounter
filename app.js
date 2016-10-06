// Get user input from HTML page
// Do something with that input
// Attach output to HTML page

$(document).ready(function () {
    function getDays() {
        var month = $("#month").val();
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
        var diffDays = Math.round(Math.abs((today.getTime() - birthday.getTime())/(oneDay)));
    }

    $("#getDays").click(getDays);


});