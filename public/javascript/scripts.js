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

    function navColor () {
        var $icon = ($(this).children());
        console.log($icon);

        if ($icon.hasClass("fa-home")){
            $($icon).css("color", "cyan");
        } else if ($icon.hasClass("fa-spinner")) {
            $($icon).css("color", "magenta");
        } else if ($icon.hasClass("fa-music")) {
            $($icon).css("color", "yellow");
        } else if ($icon.hasClass("fa-envelope")) {
            $($icon).css("color", "orange");
        }
    }

  // Color navbar icons when hovering over navbar sections
    $(".nav li a").hover(
        function () {
            // If class contains fa-home, fa-spinner, etc...
            // Assign particular icon to variable
            var $icon = ($(this).children());
            console.log($icon);

            if ($icon.hasClass("fa-home")){
                $($icon).css("color", "cyan");
            } else if ($icon.hasClass("fa-spinner")) {
                $($icon).css("color", "magenta");
            } else if ($icon.hasClass("fa-music")) {
                $($icon).css("color", "yellow");
            } else if ($icon.hasClass("fa-envelope")) {
                $($icon).css("color", "orange");
            }
        },
        function () {
            // Assign particular icon to variable.
            // Try to DRY this with a function.
            var $icon = ($(this).children());
            console.log($icon);

            $icon.css("color", "white");
        }
    );

    //Attempt to automatically assign colors to links in proper order
    links = ($(".nav li").children());
    for (link in links) {

    }
});
