(function(){
	angular.module('app')
		.directive('note', function()
		{
			return {
				templateUrl: "view/note.html"
			};
		});
})();