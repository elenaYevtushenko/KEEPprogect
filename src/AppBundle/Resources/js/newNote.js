(function(){
	angular.module('app')
		.directive('newNote', function()
		{
			return {
				templateUrl: "newNote.html"
			};
		});
})();