$(document).ready(function (){
  // Toggle 'My Account' and 'Logout' options when clicking username in navbar
    $(".username").click(function () {
      $(".userDropdown").slideToggle();
    });

    // Dynamically Color Icons
    function iconColor ($icon, navLists) {
        var navColorArray = ["red","orange","yellow","green","blue","purple"];
        var navIndex;

        for (var i = 0; i < navLists.length; i++) {
            // Search through all font-awesome icon classes
            if ($(navLists[i]).find("i").attr("class").split(' ')[1] === $icon.attr("class").split(' ')[1]) {navIndex = i};
            $icon.css("color", navColorArray[i]);
        }

        $icon.css("color", navColorArray[navIndex % navColorArray.length]);
    }

  // Color navbar icons when hovering over navbar sections
    $(".nav li").hover(
        function () {
            // If class contains fa-home, fa-spinner, etc...
            // Assign particular icon to variable
            var $icon = $(this).find("i");
            console.log($icon)
            iconColor($icon, $(".nav").children());
        },
        function () {
            $(this).find("i").css("color", "white");
        }
    );

    console.log($("a").attr("href"));

    $('.carousel').carousel({
        interval:2000
    })

});
