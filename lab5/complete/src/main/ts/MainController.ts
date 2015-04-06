/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="WebAppScope.ts"/>
/// <reference path="Application.ts"/>
/// <reference path="SimpleUser.ts"/>

module tutorial.webapp {
    export class MainController {
        static $inject = ['$scope'];

        constructor($scope:WebAppScope) {
            var users:User[] = [];
            var testUser1:User = new SimpleUser("kai", "kai@toedter.com", "Kai Toedter");
            users.push(testUser1)
            var testUser2:User = new SimpleUser("john", "john@doe.com", "John Doe");
            users.push(testUser2)
            var testUser3:User = new SimpleUser("jane", "jane@doe.com", "Jane Doe");
            users.push(testUser3)
            $scope.users = users;
        }
    }
}

tutorial.webapp.controllers.controller('tutorial.webapp.mainController', tutorial.webapp.MainController);
