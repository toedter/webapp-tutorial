///<reference path="User.ts"/>
///<reference path="SimpleUser.ts"/>

module tutorial.webapp {
    export function createTestUsers():User[] {
        var users:User[] = [];
        var testUser1:User = new SimpleUser("user1", "user1@test.com", "User 1");
        users.push(testUser1)
        return users;
    }
}
