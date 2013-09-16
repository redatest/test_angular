'use strict';

eventsApp.controller("EditEventController",
	function EditEventController($scope){
		
		// newEventForm is name of the form
					
			$scope.saveEvent = function(event, newEventForm){
				if(newEventForm.$valid){  
					window.alert("event "+ event.name + ' saved');
					console.log("clicked");
				}
			};
		
		
		$scope.cancelEvent = function(){
			window.location = 'NewEvent.html';
		};
	}
);
