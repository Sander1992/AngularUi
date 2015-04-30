app.controller('CreateRequestController', ['$scope',  '$http', function($scope, $http ) {

    $scope.send = function() {
        console.log($scope.measurementFormData);
        var response = $http.post('/createRequest', $scope.measurementFormData);
        console.log($scope.measurementFormData);
        response.success(function(data, status, headers, config) {
            $scope.codeDetail = data.code;
            $scope.showSuccess = true;
        });
        response.error(function(data, status, headers, config) {
            $scope.showError = true;
        });
    };

}]);