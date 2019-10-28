$(document).ready(function($) {
	var btnCalendar = $('#calendar-btn');
	var calendar = $('#calendar-modal');
	btnCalendar.click(function(event) {
		calendar.toggle();
	});
});