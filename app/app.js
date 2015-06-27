(function(){

	/*CLIENT ID	94f991d47b36477986f220d397b9a12b*/

	/*CLIENT SECRET	2be13ae9006049368473689c7a2fd083*/

	angular.module('app', ['ngAnimate'])

		.controller('SearchController', SearchController);

		function SearchController($scope) {
			$scope.puppies = "whoa";
		}


})();