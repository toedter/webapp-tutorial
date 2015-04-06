/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="User.ts"/>

module tutorial.webapp {
    export interface WebAppScope extends ng.IScope {
        users : User[];
    }
}