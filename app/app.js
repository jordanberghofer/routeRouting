"use strict";

const app = angular.module("route", ["ngRoute"]);

app.confir($routeProvider => {

    $routeProvider
    .when('/', {
        templateUrl: '/partials/h1.html',
        controller: 'h1Ctrl'
    })
    .when('/h2', {
        templateUrl: '/partials/h2.html',
        controller: 'h2Ctrl'
    })
    .otherwise('/');
});