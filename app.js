(function(){
	angular.module('app', ['templates']);
})();

(function(){
	angular.module('app')
		.controller('IndexController', function($scope, NotesService)
		{
			$scope.notes = NotesService.getNotes();
		});
})();
(function(){
	angular.module('app')
		.directive('navigation', function()
		{
			return {
				templateUrl: "view/navigation.html"
			};
		});
})();
(function(){
	angular.module('app')
		.directive('note', function()
		{
			return {
				templateUrl: "view/note.html"
			};
		});
})();
(function(){
	angular.module('app')
		.factory('NotesService', function()
		{
			var notes = [
				{title: 'Welcome to KEEProject', text: 'Note 1 text'},
				{title: 'Welcome to KEEProject', text: 'Note 2 text'},
				{title: 'Welcome to KEEProject', text: 'Note 3 text'}
			];

			return {getNotes: getNotes};

			function getNotes()
			{
				return notes;
			}

		});
})();