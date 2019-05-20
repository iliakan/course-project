jQuery(function() {
    // modal
    $(document).on('show.bs.modal', function(event) {
        if (!event.relatedTarget) {
            $('.modal')
                .not(event.target)
                .modal('hide');
        }
        if ($(event.relatedTarget).parents('.modal').length > 0) {
            $(event.relatedTarget)
                .parents('.modal')
                .modal('hide');
        }
        $('html').addClass('no-scroll');
    });

    $(document).on('shown.bs.modal', function() {
        if ($('body').hasClass('modal-open') == false) {
            $('body').addClass('modal-open');
        }
    });

    $(document).on('hide.bs.modal', function() {
        $('html').removeClass('no-scroll');
    });

    // sidebar
    $('.sidebar .dropdown-toggle').on('click', function (e) {
        var $el = $(this).children('.dropdown-toggle');
        var $parent = $el.offsetParent('.dropdown-menu');
        var $backdrop = $('.backdrop');

        if ($parent.hasClass('show')) {
            $parent.removeClass('show');
            $backdrop.removeClass('show');
        } else {
            $parent.addClass('show');
            $backdrop.addClass('show');
        }
        e.preventDefault();
        // e.stopPropagation();
    });

    $('.backdrop').on('click', function() {
        $(this).removeClass('show');
    });

    $('.sidebar .dropdown-item').on('click', function() {
        $('.backdrop').removeClass('show');
    });

    $('.sidebar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });
});