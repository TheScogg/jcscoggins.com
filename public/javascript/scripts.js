$(document).ready(function (){
  // Toggle 'My Account' and 'Logout' options when clicking username in navbar
    $(".username").click(function () {
      $(".userDropdown").slideToggle();
    });

    // Toggle navbar dropdown elements
    $(".navigationBar a.navButton").click(function (event) {

        /* Find corresponding .dropdown list for any button click with dropdown menu */
          var dropdown = "." + $(this).attr("href").substr(1) + "Dropdown";
        $(dropdown).siblings().hide();
        $(dropdown).toggle("slide", {direction:"left"});

        // Check to see if nav button has a dropdown or not - hacky, but it works.
        if ($("html").find(dropdown).length > 0) {
            event.preventDefault();
        }
    });

    // Dynamically Color Icons
    function iconColor ($icon, navLists) {

        // console.log(navLists);
        var navColorArray = ["#C23B22","#FFB347","#FDFD96","#03C03C","#779ECB","#B19CD9"];
        var navIndex;

        for (var i = 0; i < navLists.length; i++) {
            // Search through all font-awesome icon classes
            if ($(navLists[i]).find("i").attr("class").split(' ')[1] === $icon.attr("class").split(' ')[1]) {navIndex = i};
            $icon.css("color", navColorArray[i]);
            $icon.find("span").css("color", "white");
        }

        $icon.css("color", navColorArray[navIndex % navColorArray.length]);
    }

  // Color navbar icons when hovering over navbar sections
    $(".navigationBar li").hover(
        function () {
            // If class contains fa-home, fa-spinner, etc...
            // Assign particular icon to variable
            var $icon = $(this).find("i");
            // console.log($icon)
            iconColor($icon, $(".navigationBar").children());
        },
        function () {
            $(this).find("i").css("color", "white");
        }
    );

    // Color navbar icons automatically on mobile
    console.log($(window).width());
    if ($(window).width() <= 768) {
        var $icon = $(".navigationBar li").find("i");

            for (var i = 0; i < $icon.length; i ++) {
            //Find a way to send the icons over one at a time, instead of as a group
        }

        iconColor($icon, $(".navigationBar").children());
        console.log($icon);
    }


    console.log($("a").attr("href"));

    $(".carousel").carousel({
        interval:2000
    })

});
