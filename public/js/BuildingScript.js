angular.module('BuildingApp',[])
    .controller('MainCtrl',function ($scope,$http,$document) {
 
 	//setting values from mongo ejs
 	$scope.masonaryNameGJ =$document[0].getElementById('gjName').value;
 	$scope.masonaryNameEN =$document[0].getElementById('enName').value;
 	$scope.masonaryNameHI =$document[0].getElementById('hiName').value;

 	$scope.masonaryDescEN =$document[0].getElementById('enDesc').value; 	 
 	$scope.masonaryDescGJ =$document[0].getElementById('gjDesc').value; 	 
 	$scope.masonaryDescHI =$document[0].getElementById('hiDesc').value; 	 

	$scope.form_validate =function(){	    	 
		$http({
		method : "POST",
		url : "/test" ,
		async : false,
		data:({"NameEN":$scope.masonaryNameEN,"NameHI":$scope.masonaryNameHI,"NameGJ":$scope.masonaryNameGJ ,"DescEN":$scope.masonaryDescEN , "DescHI":$scope.masonaryDescHI  , "DescGJ":$scope.masonaryDescGJ})
		}).then(function mySucces(response) {

		   //$scope.myWelcome = response.data;
		}, function myError(response) {
		  $scope.myWelcome = response.statusText;
		});	 
	};

	$scope.Delete_img = function(img_id){
		alert("Delete the image "+img_id);
		$http({
		method : "POST",
		url : "/Delete_img" ,
		async : false,
		data:({"image_id":img_id})
		}).then(function mySucces(response) {			 
		   //$scope.myWelcome = response.data; 
		    document.getElementById(img_id).style.display = 'none';
		}, function myError(response) {
		  $scope.myWelcome = response.statusText;
		});	 
	};

});