'use strict';


eventsApp.filter("durations", function(){
	
	return function(duration){
		switch (duration){
			case 1:
				return 'Half a hour';
			case 2:
				return "1 Hour";
			case 3:
				return "1 and Half a hour";
			case 4:
				return "2 Hours";
		}
	}
});

