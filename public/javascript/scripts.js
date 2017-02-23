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

    function iconColor ($icon, navLists) {
        console.log(navLists);
        //console.log($icon.attr("class").split(' ')[1]);
        var navListsArray = [];
        var navColorArray = ["cyan","magenta","yellow","black"];
        var navIndex;
        console.log($icon);

        for (var i = 0; i < navLists.length; i++) {
            // Search through all font-awesome icon classes
            if ($(navLists[i]).find("i").attr("class").split(' ')[1] === $icon.attr("class").split(' ')[1]) {navIndex = i};
            $icon.css("color", navColorArray[i]);
        }

        $icon.css("color", navColorArray[navIndex % navColorArray.length]);
        console.log(navIndex);

        //if ($icon.hasClass("fa-home")){
        //    $icon.css("color", "cyan");
        //} else if ($icon.hasClass("fa-spinner")) {
        //    $icon.css("color", "magenta");
        //} else if ($icon.hasClass("fa-music")) {
        //    $icon.css("color", "yellow");
        //} else if ($icon.hasClass("fa-envelope")) {
        //    $icon.css("color", "orange");
        //}
    }

  // Color navbar icons when hovering over navbar sections
    $(".nav li").hover(
        function () {
            // If class contains fa-home, fa-spinner, etc...
            // Assign particular icon to variable
            var $icon = $(this).find("i");
            iconColor($icon, $(".nav").children());
        },
        function () {
            // Assign particular icon to variable.
            // Try to DRY this with a function.
            var $icon = ($(this).children());
            //console.log($icon);

            //$(this).css("color", "white");
            $(this).find("i").css("color", "white");

        }
    );

    //Attempt to automatically assign colors to links in proper order
    links = ($(".nav li").children());
    for (link in links) {

    }
});
