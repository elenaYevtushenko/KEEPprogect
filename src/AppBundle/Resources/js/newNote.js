(function(){
	angular.module('app')
		.directive('newNote', function()
		{
			return {
				templateUrl: "view/newNote.html"
			};
		});
})();