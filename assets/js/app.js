$(document).ready(function() {
    $('#home').parallax("50%", 0.1);
    $('#section1').parallax("50%", 0.1);
    $('#section2').parallax("50%", 0.4);
    $('#section3').parallax("50%", 0.3);


    $("a[href*=#]").click(function(e) {
        e.preventDefault();
        var link = "#" + this.href.split("#")[1];
        $.scrollTo(link, 800);
    });


});