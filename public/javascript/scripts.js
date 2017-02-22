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
      $(".userDropdown").toggle();
    })



});
