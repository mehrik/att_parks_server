var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/partials/login.html'
    })
})