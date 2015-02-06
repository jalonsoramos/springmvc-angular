var app = angular.module('films', [ "ngResource" ]);

app.controller('FilmsController', [ '$scope', '$http',
                                     
	function($scope, $http) {
		$scope.getFilms = function() {
			$http.get('/films').success(function(data) {
				$scope.films = data;
			});
		}
		
		$scope.addFilm = function() {
			$http.post('/films', 
				{
					title : $scope.title,
					year : $scope.year,
					director : $scope.director
				}
			).success(function(data) {
				$scope.msg = 'Pelicula creada correctamente';
				$scope.getFilms();
			}).error(function(data) {
				$scope.msg = 'Se ha producido un error';
			});
		}
} ]);