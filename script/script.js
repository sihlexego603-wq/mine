$(document).ready(function(){
  $("nav a").click(function(e){
    e.preventDefault();

    // Remove active from all links
    $("nav a").removeClass("active");

    // Add active to the clicked link
    $(this).addClass("active");

    // Smooth scroll to section
    const target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 800);
  });
 // Scroll-spy effect
  $(window).on("scroll", function(){
    const scrollPos = $(document).scrollTop();

    $(".nav-links a").each(function(){
      const section = $($(this).attr("href"));
      if(section.position().top <= scrollPos + 100 &&
         section.position().top + section.height() > scrollPos + 100){
        $(".nav-links a").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});
$("button").hover(
        function() {
            $(this).css("background-color", "#ffe0b2"); 
        },
        function() {
            $(this).css("background-color", "");
        }
    );
    $("#third").click(function(){
  $(".projectCard").fadeOut().fadeIn();
});