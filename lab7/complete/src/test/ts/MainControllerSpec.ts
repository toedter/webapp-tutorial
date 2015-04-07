/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../main/ts/user/User.ts" />
/// <reference path="../../main/ts/user/SimpleUser.ts" />
/// <reference path="../../main/ts/MainController.ts" />

describe('Main Controller', () => {
    var scope: tutorial.webapp.WebAppScope;

    beforeEach(() => {
        inject(function ($rootScope: ng.IRootScopeService) {
            scope = <tutorial.webapp.WebAppScope>$rootScope.$new();
        })
    });

    it('should have scope with initialized users', () => {
        var controller:tutorial.webapp.MainController = new tutorial.webapp.MainController(scope);
        expect(controller).toBeDefined();
        expect(scope).toBeDefined();
        expect(scope.users).toBeDefined();
        expect(scope.users.length).toBe(3);
    });
});