$(document).ready(function($) {
    $('.slick-example').slick({
	infinite: false,
	slidesToShow: 9,
	slidesToScroll: 2,
	responsive: [
		{
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 6,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 9,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 6,
	      }
	    }
    ]
});
});