﻿// Get user input from HTML page
// Do something with that input
// Attach output to HTML page

$(document).ready(function () {
    function getDays() {
        var month = $("#month").val();
        var day = $("#day").val();

        console.log(month);
        console.log(day);
    }

    $("#getDays").click(getDays);


});