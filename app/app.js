(function(){

	/*CLIENT ID	94f991d47b36477986f220d397b9a12b*/

	/*CLIENT SECRET	2be13ae9006049368473689c7a2fd083*/

	angular.module('app', ['ngAnimate'])

		.controller('SearchController', SearchController);

		function SearchController($scope, $http) {
			$scope.puppies = "whoa";

			$scope.submit = function() {
				$http({
					url: 'https://api.instagram.com/v1/tags/' + $scope.data.tag + '/media/recent',
					method: 'jsonp',
					params: {
						callback: 'JSON_CALLBACK',
						client_id: '94f991d47b36477986f220d397b9a12b'
					}
				})
				.success(searchSuccess)
				.error(searchError);
			};

			function searchSuccess(response) {
				$scope.photos = response.data;
				console.log(response.data);
			}

			function searchError(response) {
				console.log(response);
			}

		}


})();