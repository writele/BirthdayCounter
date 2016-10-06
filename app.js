// Get user input from HTML page
// Do something with that input
// Attach output to HTML page 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

$(document).ready(function () {
    function getDays() {
        var month = $("#month").val() - 1;
        var day = $("#day").val();

        if (month > 11 || month < 0 || day < 0 || day > 31) {
            return;
        }

        var today = new Date();
        today.setHours(0, 0, 0, 0)

        if (month >= today.getMonth() && day >= today.getDay()) {
            var year = new Date().getFullYear();
        }
        else {
            var year = new Date().getFullYear() + 1;
        }

        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var birthday = new Date(year, month, day);

        var output = Math.round(Math.abs((today.getTime() - birthday.getTime()) / (oneDay)));

        console.log(output);
        console.log(birthday);
        console.log(today);
        $("#output").empty();
        $("#output").append("<h3>There are " + output + " days left until your birthday!</h3>");
    }

    $("#getDays").click(getDays);


});