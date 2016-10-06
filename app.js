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

        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(2008,01,12);
        var secondDate = new Date(2008,01,22);

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    }

    $("#getDays").click(getDays);


});