/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="WebAppScope.ts"/>
/// <reference path="Application.ts"/>
/// <reference path="user/User.ts"/>
/// <reference path="user/UserService.ts"/>

module tutorial.webapp {
    export class MainController {
        static $inject = ['$scope', 'tutorial.webapp.userService'];

        constructor(private $scope:WebAppScope, private userService:UserService) {
            this.refreshUsers();

            $scope.refreshUsers = () => {
                this.refreshUsers();
            }
        }

        private refreshUsers() {
            console.log('refreshing users');
            this.userService.getAllUsers(
                (users:tutorial.webapp.User[]) => {
                    this.$scope.users = users;
                }
            );
        }
    }
}

tutorial.webapp.controllers.controller('tutorial.webapp.mainController', tutorial.webapp.MainController);
