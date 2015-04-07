/// <reference path="Application.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />

tutorial.webapp.factories.factory('tutorial.webapp.apiResource', ['$resource',
        ($resource:ng.resource.IResourceService):
            ng.resource.IResourceClass<ng.resource.IResource<any>> => {
            var apiRoot:ng.resource.IResourceClass<ng.resource.IResource<any>> =
                $resource(tutorial.webapp.testServer)

            return apiRoot;
        }]);
