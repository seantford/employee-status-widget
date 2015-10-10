$(document).ready(function(){
	var url = "employees.json";
	$.getJSON(url, function(response) { //no data to send, no data argument
		var statusHTML = '<ul class="bulleted">';
		$.each(response, function(index, employee){
			if (employee.inoffice === true) {
				statusHTML+= '<li class="in">';
			} else {
				statusHTML += '<li class="out">';
			}
			statusHTML += employee.name + '</li>';
		});
		statusHTML += '</ul>';
		$('#employeeList').html(statusHTML);
	}); //end getJSON
}); //end ready