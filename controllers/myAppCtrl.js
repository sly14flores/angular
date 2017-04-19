var app = angular.module('myApp',['phonebook']);

app.controller('myAppCtrl',function($http,$scope,appService) {
	
	$scope.formHolder = {};
	
	$scope.contact = { // basic form
		id: 0,
		name: '',
		contact: ''
	};
	
	$scope.bcontact = { // basic form
		id: 0,
		name: '',
		contact: ''
	};			

	$scope.contacts = []; // for tabular
	
	$scope.save = function() {
		appService.save($scope);
	};
	
	$scope.edit = function(row) {
		appService.edit($scope,row);
	};
	
	$scope.del = function(row) {
		appService.del($scope,row);
	};
	
	appService.list($scope);

});