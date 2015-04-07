/// <reference path="../Application.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="User.ts" />

module tutorial.webapp {
    export class UserService {
        static $inject = ['tutorial.webapp.apiResource', '$resource'];
        private usersContract = 'users';

        constructor(private apiResource:ng.resource.IResourceClass<ng.resource.IResource<any>>,
                    private $resource:ng.resource.IResourceService) {
            console.log('ChatMessage service started')
        }

        getAllUsers(callback:(users:tutorial.webapp.UserResource[]) => void) {
            this.apiResource.get((api:any) => {
                var usersResource:tutorial.webapp.UsersResource = this.getUsersResource(api);
                if (usersResource) {
                    usersResource.get((result:any) => {
                        var users:tutorial.webapp.UserResource[] = [];
                        if (result.hasOwnProperty("_embedded") && result._embedded.hasOwnProperty(this.usersContract)) {
                            users = result._embedded['users'];
                        }
                        callback(users);
                    });
                }
            });
        }

        private getUsersResource(apiResource:any):tutorial.webapp.UsersResource {
            if (apiResource.hasOwnProperty("_links") && apiResource._links.hasOwnProperty(this.usersContract)) {
                var href:string = apiResource._links[this.usersContract].href;
                // remove template parameters
                href = href.replace(/{.*}/g, '');

                var usersResource:tutorial.webapp.UsersResource =
                    <tutorial.webapp.UsersResource> this.$resource(href + '/:id', {id: '@id'}, {
                    });
                return usersResource;
            }
        }
    }
}

tutorial.webapp.services.service('tutorial.webapp.userService', tutorial.webapp.UserService);