(function(){

	angular.module('app', ['ngAnimate'])

		.controller('SearchController', SearchController);

		SearchController.$inject['$scope','$http'];

		function SearchController($scope, $http) {

			$scope.submit = function() {
				$scope.photos = '';
				$scope.loading = true;
				$scope.lastTerm = $scope.data.tag;
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

			$scope.nextPage = function() {
				$http({
					url: $scope.pagination,
					method: 'jsonp',
					params: {
						callback: 'JSON_CALLBACK',
						client_id: '94f991d47b36477986f220d397b9a12b'
					}
				})
				.success(searchSuccess)
				.error(searchError);
			}

			function searchSuccess(response) {
				$scope.error = false;
				$scope.loading = false;
				$scope.data.tag = '';
				$scope.photos = response.data;
				$scope.pagination = response.pagination.next_url || false;
				$scope.searchForm.$setPristine();
			}

			function searchError(response) {
				$scope.loading = false;
				$scope.error = true;
			}

		}

})();