$(document).ready(function($) {
	//calendar
	var btnCalendar = $('#calendar-btn');
	var calendarMod = $('#calendar-modal');
	var calendar = $('#calendar_table');
		btnCalendar.click(function() {
			calendarMod.toggle();
			calendar.toggle('fast');
		});	
		calendarMod.click(function() {
			calendarMod.hide();
			calendar.hide('fast');
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