/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../main/ts/user/User.ts" />
/// <reference path="../../main/ts/user/SimpleUser.ts" />

module tutorial.webapp {
    describe('User', () => {
        it('should create user and get attributes', () => {
            var user:User =
                new SimpleUser("user1", "user1@test.com", "User 1");
            expect(user).toBeDefined();
            expect(user.getId()).toBe('user1');
            expect(user.getEmail()).toBe('user1@test.com');
            expect(user.getFullName()).toBe('User 1');
        });
    })
};