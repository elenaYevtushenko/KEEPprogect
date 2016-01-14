
(function(){
	angular.module('app')
		.controller('IndexController', function($scope, NotesService)
		{
			$scope.notes = NotesService.getNotes();
		});
})();