var projects = [
    {
        id:'1',
        name: "project1"
    },
    {
        id:'2',
        name: "project1"
    },
    {
        id:'3',
        name: "project1"
    },
    {
        id:'4',
        name: "project1"
    }
];





angular.module('routerApp').service('mainService',function(){

    this.getRecentProjects = function(id) {
       for(var i = 0; i < projects.length; i++) {
           if(projects[i].id === id) {
               return projects[i];
           }

        }



}

});