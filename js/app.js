var app =  angular.module('CallibrationSystem', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/createRequest', {
            controller: "CreateRequestController",
            templateUrl: "view/CreateRequestForm.html"
        })
        .when('/checkRequest', {
            controller: "CheckRequestController",
            templateUrl: "view/checkRequest.html"
        })
        .when('/', {
            controller: "HomeController",
            templateUrl: "view/home.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});