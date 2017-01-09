angular.module('BuildingApp',[])
    .controller('MainCtrl', function ($scope,$http) {

	$scope.form_validate =function(){
		console.log($scope.masonaryNameEN);
		$http({
		method : "POST",
		url : "/test" ,
		data:({"NameEN":$scope.masonaryNameEN,"NameHI":$scope.masonaryNameHI,"NameGJ":$scope.masonaryNameGJ})
		}).then(function mySucces(response) {
		  $scope.myWelcome = response.data;
		}, function myError(response) {
		  $scope.myWelcome = response.statusText;
		});	 
	};

});