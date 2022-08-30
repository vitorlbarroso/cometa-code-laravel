$('.my-slick').each( function() {
    var slick = $(this),
    item =  $(this).data('item');

    slick.slick({
        slidesToShow: item,
        responsive: [
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
});