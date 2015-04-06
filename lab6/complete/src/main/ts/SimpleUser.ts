///<reference path="User.ts"/>

module tutorial.webapp {
    export class SimpleUser implements User {

        constructor(private id:string, private email:string, private fullName:string) {
        }

        getId(): string {
            return this.id;
        }

        getEmail(): string {
            return this.email;
        }

        getFullName(): string {
            return this.fullName;
        }
    }
}
