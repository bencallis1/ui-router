angular.module('routerApp',['ui.router'])
    .config(["$locationProvider", function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);