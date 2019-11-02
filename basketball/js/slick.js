$(document).ready(function($) {
    $('.slick-example').slick({
	infinite: false,
	slidesToShow: 10,
	slidesToScroll: 2,
	responsive: [
		{
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 8,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 10,
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