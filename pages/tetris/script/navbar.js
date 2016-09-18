//# require jquery.js

function main(){

  var navbar = $("nav");
  var offsetTop = navbar.offset().top - navbar.height() + $(window).height();

  function fixNavBar(){
    var offset = $(this).scrollTop();

    if(offsetTop < offset){
      navbar.addClass("fixed");
      navTitle("show");
    } else {
      navbar.removeClass("fixed");
      navTitle("hide");
    };
  };

  function navTitle(action){
    var title = $(".heading-container");
    if(action == "show"){
      title.removeClass("closed");
    } else if(action == "hide"){
      title.addClass("closed");
    };
  };

  function scrollToElem(){
    event.preventDefault();
    var $href = $(event.target).attr("href");
    console.log($href);
    var target = $($href);
    console.log(target.offset().top);
    $('html, body').animate({
      scrollTop: target.offset().top - 10
    }, 1000);
  };

  $("ul a").click(scrollToElem);

  $(window).scroll(fixNavBar);
  $(document).ready(fixNavBar);
};

$(document).ready(main);
