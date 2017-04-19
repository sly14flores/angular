angular.module('phonebook',[]).factory('appService',function($http) {
	
	function appService() { // class
		
		var self = this;
		
		self.required = ['name','contact'];		
		
		self.edit = function(scope,row) {
			
			$http({
			  method: 'POST',
			  url: 'handlers/edit.php',
			  data: {id: row.id}
			}).then(function mySucces(response) {
				
				scope.contact = response.data;
				
			}, function myError(response) {
				 
			  // error
				
			});					
			
		};
		
		self.del = function(scope,row) {
			
			$http({
			  method: 'POST',
			  url: 'handlers/del.php',
			  data: {id: [row.id]}
			}).then(function mySucces(response) {
				
				self.list(scope);				
				
			}, function myError(response) {
				 
			  // error
				
			});					
			
		};	
		
		self.save = function(scope) {

			if (scope.formHolder.frmContact.$invalid) {
				
				var valid = true;
				
				angular.forEach(self.required,function(item,i) {
					if (scope.contact[item] == '') {
						scope.formHolder.frmContact[item].$invalid = true;
						scope.formHolder.frmContact[item].$touched = true;
						valid = false;
					}
				});
				
				if (!valid) return;
			}

			angular.forEach(self.required,function(item,i) {
				scope.formHolder.frmContact[item].$invalid = false;
				scope.formHolder.frmContact[item].$touched = false;
			});			
			
			$http({
			  method: 'POST',
			  url: 'handlers/contact.php',
			  data: scope.contact
			}).then(function mySucces(response) {
				
				angular.copy(scope.bcontact,scope.contact);
				
				self.list(scope);
				
			}, function myError(response) {
				 
			  // error
				
			});				
			
		};
		
		self.list = function(scope) {
			
			$http({
			  method: 'POST',
			  url: 'handlers/list.php'
			}).then(function mySucces(response) {
				
				scope.contacts = response.data;
				
			}, function myError(response) {
				 
			  // error
				
			});				
			
		};

	};
	
	return new appService();
	
});