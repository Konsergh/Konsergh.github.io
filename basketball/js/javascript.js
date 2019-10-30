$(document).ready(function($) {
	//calendar
	var btnCalendar = $('#calendar-btn');
	var calendar = $('#calendar-modal');
	var calendarMod = $('#calendar');
		btnCalendar.click(function(event) {
			calendar.toggle();
		});	
	/////////===DATE===////////
	function addZero(i) {
	    if (i < 10) {
	        i = "0" + i;
	    }
	    return i;
	}
	function getActualDate() {
	    var d = new Date();
	    var day = addZero(d.getDate());
	    var month = addZero(d.getMonth()+1);
	    var year = addZero(d.getFullYear());
	    return day + "." + month + "." + year;
	}
	$(btnCalendar).val(getActualDate());

	// more-teams
	var teams = $('.more-teams');
	var more = $('.more');
	more.click(function(event) {
			teams.slideToggle(300);
		});	

});