///<reference path='user.ts'/>
///<reference path='simple-user.ts'/>

namespace tutorial.webapp {
    export function createTestUsers(): User[] {
        let users: User[] = [];
        let testUser1: User = new SimpleUser('user1', 'user1@test.com', 'User 1');
        users.push(testUser1)
        return users;
    }
}
