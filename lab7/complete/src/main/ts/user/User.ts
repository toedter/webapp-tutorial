/// <reference path="../../../../typings/angularjs/angular-resource.d.ts" />

module tutorial.webapp {
    export interface User {
        getId(): string;
        getEmail(): string;
        getFullName(): string;
    }

    export interface UserResource extends User, ng.resource.IResource<User> {
        $update(): UserResource;
    }

    export interface UsersResource extends ng.resource.IResourceClass<UserResource> {
        update(User): UserResource;
    }
}
