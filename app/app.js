(function(){

	angular.module('app', ['ngAnimate'])

		.controller('SearchController', SearchController);

		function SearchController($scope) {
			$scope.puppies = "whoa";
		}



})();