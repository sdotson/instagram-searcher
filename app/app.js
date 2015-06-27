(function(){

	/*CLIENT ID	94f991d47b36477986f220d397b9a12b*/

	/*CLIENT SECRET	2be13ae9006049368473689c7a2fd083*/

	angular.module('app', ['ngAnimate'])

		.controller('SearchController', SearchController);

		function SearchController($scope, $http) {
			$scope.puppies = "whoa";

			$scope.submit = function() {
				$scope.photos = '';
				$scope.loading = true;
				$http({
					url: 'https://api.instagram.com/v1/tags/' + encodeURI($scope.data.tag) + '/media/recent',
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
				$scope.error = false;
				$scope.photos = response.data;
				$scope.loading = false;
			}

			function searchError(response) {
				$scope.loading = false;
				$scope.error = true;
				console.log(response);
			}

		}


})();