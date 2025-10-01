$(document).ready(function() {

    // Smooth scrolling
    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Navbar shrink
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('#mainNav').addClass('navbar-scrolled');
        } else {
            $('#mainNav').removeClass('navbar-scrolled');
        }
    });

    // Scroll animations
    function checkAnimation() {
        var $window = $(window);
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $('.animate-item').each(function() {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('is-visible');
            } else {
                // Optional: remove class if you want animation to repeat
                // $element.removeClass('is-visible'); 
            }
        });
    }

    $(window).on('scroll resize', checkAnimation);
    $(window).trigger('scroll');

    // Contact form validation
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        var form = this;
        
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Simulate AJAX submission
            $(this).hide();
            $('#successMessage').removeClass('d-none');
        }
        
        $(form).addClass('was-validated');
    });

});
