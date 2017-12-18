$(document).ready(function() {
    if (window.location.pathname === '/articles/') {
        $('#articlesLink').addClass('navActiveLink');
    } else if (window.location.pathname === '/writers/') {
        $('#writersLink').addClass('navActiveLink');
    } else if (window.location.pathname === '/about/') {
        $('#aboutLink').addClass('navActiveLink');
    }
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= $('#header').offset().top + $('#header').height()) {
            $('#navHeader').show();
            $('#navHeader').addClass('navHeaderShow');
            $('#navHeader').removeClass('navHeaderHide');
            $('#navbar').addClass('navbarFixed');
            $('#body').addClass('bodyNavbarFixed');
        } else {
            $('#navHeader').removeClass('navHeaderShow');
            $('#navHeader').addClass('navHeaderHide');
            $('#navbar').removeClass('navbarFixed');
            $('#body').removeClass('bodyNavbarFixed');
        }
    });
});