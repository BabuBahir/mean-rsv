angular.module('langapp',[])
    .controller('MainCtrl', function ($scope,$window) {

 $scope.prop = {
    "type": "select",      
    "value": "Select Language", 
    "values": ["Select Language","English", "Gujarati", "Hindi"] 
  };

$scope.updatePath = function(path){
	console.log(path);
	$window.location.href = '/3';
};

});