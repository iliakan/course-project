jQuery(function() {
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
});