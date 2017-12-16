$(window).on('load', function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= $('#header').offset().top + $('#header').height()) {
            $('#navHeader').show();
            $('#navbar').addClass('navbarFixed');
            $('#body').addClass('bodyNavbarFixed');
        } else {
            $('#navHeader').hide();
            $('#navbar').removeClass('navbarFixed');
            $('#body').removeClass('bodyNavbarFixed');
        }
    });
});

$(document).ready(function() {
    if (window.location.pathname === '/articles/') {
        $('#articlesLink').addClass('navActiveLink');
    } else if (window.location.pathname === '/writers/') {
        $('#writersLink').addClass('navActiveLink');
    } else if (window.location.pathname === '/about/') {
        $('#aboutLink').addClass('navActiveLink');
    }
});