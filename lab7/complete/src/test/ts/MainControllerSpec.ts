/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../main/ts/MainController.ts" />
/// <reference path="../../main/ts/user/User.ts" />
/// <reference path="../../main/ts/user/SimpleUser.ts" />
/// <reference path="../../main/ts/user/UserService.ts" />

module tutorial.webapp {
    describe('Main Controller', () => {
        var scope:WebAppScope;

        beforeEach(() => {
            inject(function ($rootScope:ng.IRootScopeService) {
                scope = <WebAppScope>$rootScope.$new();
            })
        });

        it('should have scope with initialized users', () => {

            var userServiceMock:UserService = {
                getAllUsers(callback:(users:User[]) => void) {
                    var users:User[] = [];
                    callback(users);
                }
            }

            var controller:MainController = new MainController(scope, userServiceMock);
            expect(controller).toBeDefined();
            expect(scope).toBeDefined();
            expect(scope.users).toBeDefined();
            expect(scope.users.length).toBe(0);
        });
    })
};