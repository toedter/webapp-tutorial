/// <reference path="../../../typings/angularjs/angular.d.ts" />

module tutorial.webapp {
    export var app = angular.module('webapp',
        ['tutorial.webapp.controllers','tutorial.webapp.factories','tutorial.webapp.services']);

    export var controllers = angular.module('tutorial.webapp.controllers', []);
    export var factories = angular.module('tutorial.webapp.factories', ['ngResource']);
    export var services = angular.module('tutorial.webapp.services', ['tutorial.webapp.factories']);

    // this is a hack to test directly from the file system or via IDE debugging
    // and connect to the spring boot server running on localhost:8080
    export var testServer:string = '';

    if(!document.location.hostname || document.location.hostname == 'localhost') {
        testServer = 'http://localhost:8080'
    }
}