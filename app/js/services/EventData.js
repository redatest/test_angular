//  usually the data is retirived via ajax
// using the $http, makes it via http .


eventsApp.factory("eventData", function($http, $log){
		return{
			getEvent: function(successcb){
				$http({method:'GET', url:'/data/event/data.json', headers: {'Content-Type': 'application/x-www-form-urlencoded'} }).
				success( function(data, status, headers, config){
					successcb(data);
				}).
				error(function(data, status, headers, config){
					$log.warn(data, status, header, config);
				});
			}
		};
});
