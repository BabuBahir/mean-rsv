angular.module('BuildingApp',[])
    .controller('MainCtrl', function ($scope,$http) {

	$scope.form_validate =function(){
		$http({
		method : "POST",
		url : "/test" ,
		data:({"user":"NANANA"})
		}).then(function mySucces(response) {
		  $scope.myWelcome = response.data;
		}, function myError(response) {
		  $scope.myWelcome = response.statusText;
		});	 
	};

});