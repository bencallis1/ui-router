angular.module('routerApp')
    .config(function($stateProvider, $urlRouterProvider) {
        //This is a catch all for our routes

        $urlRouterProvider.otherwise("/");

            //We need to configure our routes here

            $stateProvider
                .state('home', {
                        url: "/",
                        templateUrl: "views/home.html"
                })
                .state('contact' ,{
                        url:"/contact",
                        templateUrl:"views/contact.html"
                })
                .state('studio' ,{
                    url:"/studio",
                    templateUrl:"views/studio.html"
                })
                // We will need to pull params from the url here and populate the view based off that param
                .state('projects' ,{
                    url:"/projects/",
                    templateUrl:"views/projects.html",
                    controller: "mainCtrl"

                })
                .state('details' ,{
                    url:"/details/:id",
                    templateUrl:"views/projectDetails.html",
                    controller: "detailsCtrl"

                })

                .state('pricing' ,{
                    url:"/pricing",
                    templateUrl:"views/pricing.html"
                })

});









