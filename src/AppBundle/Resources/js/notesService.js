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