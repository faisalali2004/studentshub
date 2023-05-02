// Add a listener for window resize events
$(window).on('resize', function() {
    // Check the window width and adjust the layout accordingly
    if ($(window).width() < 768) {
        // Switch the navigation from horizontal to vertical
        $('nav').addClass('vertical');
    } else {
        // Switch the navigation back to horizontal
        $('nav').removeClass('vertical');
    }
});

// Add a listener for document ready events
$(document).ready(function() {
    // Check the window width and adjust the layout accordingly
    if ($(window).width() < 768) {
        // Switch the navigation from horizontal to vertical
        $('nav').addClass('vertical');
    } else {
        // Switch the navigation back to horizontal
        $('nav').removeClass('vertical');
    }
});
$(document).ready(function() {
    $('.sidebar-toggle').click(function() {
      $('.sidebar').toggleClass('active');
    });
  });
  