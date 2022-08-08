$(document).ready(function () {
  $("#popular-courses,#new-courses").slick({
    dots: false,
    loop: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  // Mobile Menu Click
  $(".mobile-navbar").removeClass("hidden");
  $(".mobile-navbar").hide();

  $(".mobile-menu-icon").on("click", function () {
    $(".mobile-navbar").toggle("slide");
    $("#toggle-icon").toggleClass("fa-times");
  });

  $(window).click(function () {
    $(".mobile-navbar").hide("slide");
    $(".mobile-navbar").addClass("hidden");
    $("#toggle-icon").addclass("fa-bars-staggered");
    $("#toggle-icon").removeClass("fa-times");
  });

  $(".mobile-menu-icon").on("click", function (event) {
    event.stopPropagation();
  });

  $(".mobile-navbar").on("click", function (event) {
    event.stopPropagation();
  });

  // scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll-to-top").addClass("fixed");
      $("#scroll-to-top").removeClass("hidden");
    } else {
      $("#scroll-to-top").removeClass("fixed");
      $("#scroll-to-top").addClass("hidden");
    }
  });

  // *************collapse
  $(".collapse-button").click(function(e) {
    const parent = $(this).children(":nth-child(2)");
    if (parent.children().hasClass("fa-chevron-down")) {
      parent.children().removeClass("fa-chevron-down");
      parent.children().addClass("fa-chevron-up");
    } else {
      parent.children().addClass("fa-chevron-down");
      parent.children().removeClass("fa-chevron-up");
    }
    $(this).next().slideToggle('slow');
  });
});
