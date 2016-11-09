var app = angular.module("testApp",['720kb.tooltips']);

app.controller("mainCtrl",['$scope','dataService',function($scope, dataService){
	$scope.dropDownData = dataService.getData();
	$scope.selected ={};
	
}])