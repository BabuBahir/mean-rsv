angular.module('BuildingApp',[])
    .controller('MainCtrl',function ($scope,$http,$document) {
 
 	//setting values from mongo ejs
 	$scope.masonaryNameGJ =($document[0].getElementById('gjName').value);
 	$scope.masonaryNameEN =($document[0].getElementById('enName').value);
 	$scope.masonaryNameHI =($document[0].getElementById('hiName').value);

	$scope.form_validate =function(){		 
		$http({
		method : "POST",
		url : "/test" ,
		data:({"NameEN":$scope.masonaryNameEN,"NameHI":$scope.masonaryNameHI,"NameGJ":$scope.masonaryNameGJ})
		}).then(function mySucces(response) {
		   //$scope.myWelcome = response.data;
		}, function myError(response) {
		  $scope.myWelcome = response.statusText;
		});	 
	};

});