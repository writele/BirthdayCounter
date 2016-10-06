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

        var today = new Date();
        /// Problem: year should be next year if the month entered has already happened

        // if month hasn't happened
        // if birthday month >= current month
        if (month >= today.getMonth()) {
            var year = new Date().getFullYear();
        }
        else {
            var year = new Date().getFullYear() + 1;
        }

        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var birthday = new Date(year, month, day);

        var output = Math.round(Math.abs((today.getTime() - birthday.getTime()) / (oneDay)));
        console.log(output);

    }

    $("#getDays").click(getDays);


});