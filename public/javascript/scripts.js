$(document).ready(function (){
    // Check if being accessed from phone
    var isMobile = false;

  // Toggle 'My Account' and 'Logout' options when clicking username in navbar
    $(".username").click(function () {
      $(".userDropdown").slideToggle();
    });

    // Toggle navbar dropdown elements
    $(".navButton").on("click", function (event) {

        /* Find corresponding .dropdown list for any button click with dropdown menu */
          var dropdown = "." + $(this).attr("href").substr(1) + "Dropdown";
        $(dropdown).siblings().hide();
        $(dropdown).toggle("slide", {direction:"left"});
        // Check to see if nav button has a dropdown or not - hacky, but it works.
        if ($("html").find(dropdown).length > 0) {
            event.preventDefault();
        }
    });

    // Slide submenus back in when you click outside element
    $(window).click(function() {
        //Hide the menus if visible
        var dropdownChildren = $(".dropdown").children();
        $(dropdownChildren.filter(":visible")).toggle("slide", {direction:"left"});
        // $(dropdown).toggle("slide", {direction:"left"});
    });

    // Prevent code from further up the DOM propagating to this specific element
    $('.navButton').click(function(event){
        event.stopPropagation();
    });

    // Dynamically Color Icons
    function iconColor ($icon, navLists) {
        // console.log(navLists);
        var navColorArray = ["#C23B22","#FFB347","#FDFD96","#03C03C","#779ECB","#B19CD9"];
        var navIndex;

        if (isMobile) {
            $(".navigationBar").css({"background-color" : "#3a3a3a", "border-radius" : "10px"});
        }

        for (var i = 0; i < navLists.length; i++) {
            // Search through all font-awesome icon classes
            if ($(navLists[i]).find("i").attr("class").split(' ')[1] === $icon.attr("class").split(' ')[1]) {navIndex = i};
            $icon.css("color", navColorArray[i]);
            $icon.find("span").css("color", "white");
        }

        console.log("navIndex : " + navIndex);
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
            if (!isMobile) {$(this).find("i").css("color", "white");}

        }
    );

    // Color navbar icons automatically on mobile
    if ($(window).width() <= 768) {
        isMobile = true;

        // Array to hold individual icon elements so they can be pushed over individually to iconColor function
        var $icon = $(".navigationBar li").find("i");

        for (var i = 0 ; i < $icon.length; i++) {
            console.log($($icon[i]));
            console.log($(".navigationBar").children());
            iconColor($($icon[i]), $(".navigationBar").children());
        }

        var thisPage = ($(location).attr("href"));
        console.log(thisPage);
    }


    // console.log($("a").attr("href"));

    $(".carousel").carousel({
        interval:2000
    })

});
