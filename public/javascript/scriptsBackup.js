$(document).ready(function (){
    // ul(data-role='list-view')
    //   li
    //     a(href='/myAccount') My Account
    //     a(href='/logout') Log Out\

    // $("p").toggle(
    //     function(){$("p").css({"color": "red"});},
    //     function(){$("p").css({"color": "blue"});},
    //     function(){$("p").css({"color": "green"});
    // });

    // Toggle 'My Account' and 'Logout' options when clicking username in navbar
    $(".username").click(function () {
        $(".userDropdown").slideToggle();
    });

    function navColor ($something) {
        //console.log($something);
        //$($something).css("color", "cyan");

    }

    // Color navbar icons when hovering over navbar sections
    $(".nav li a").hover(
        function () {
            // If class contains fa-home, fa-spinner, etc...
            // Assign particular icon to variable

            navColor($(this));

            if ($(this).children().hasClass("fa-home")){
                $(this).css("color", "cyan");
                $(this).children().css("color", "cyan");
            } else if ($(this).children().hasClass("fa-spinner")) {
                $(this).css("color", "magenta");
                $(this).children().css("color", "magenta");

            } else if ($(this).children().hasClass("fa-music")) {
                $(this).css("color", "yellow");
                $(this).children().css("color", "yellow");

            } else if ($(this).children().hasClass("fa-envelope")) {
                $(this).css("color", "orange");
                $(this).children().css("color", "orange");

            }
        },
        function () {
            // Assign particular icon to variable.
            // Try to DRY this with a function.
            var $icon = ($(this).children());
            //console.log($icon);

            $(this).css("color", "white");
            $(this).children().css("color", "white");

        }
    );

    //Attempt to automatically assign colors to links in proper order
    links = ($(".nav li").children());
    for (link in links) {

    }
});
