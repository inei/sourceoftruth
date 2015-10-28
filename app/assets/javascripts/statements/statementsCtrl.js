angular.module('sourceOfTruth')
	.controller('StatementsCtrl', [
		'$scope',
		'$stateParams',
		'statementsFactory',
		function ($scope, $stateParams, statementsFactory)
		{
			$scope.statement = statementsFactory.specificStatement($stateParams.id);
			// $scope.statement = statementsFactory.get({id: $stateParams.id}, function (data)
			// {
			// 	console.log(data);
			// });
		}
	]);