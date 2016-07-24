/// <reference path='../../../typings/index.d.ts' />
/// <reference path='../../main/ts/userx.ts' />
/// <reference path='../../main/ts/simple-user.ts' />

describe('User', () => {
    it('should create user and get attributes', () => {
        let user: tutorial.webapp.User =
            new tutorial.webapp.SimpleUser('user1', 'user1@test.com', 'User 1');
        expect(user).toBeDefined();
        expect(user.getId()).toBe('user1');
        expect(user.getEmail()).toBe('user1@test.com');
        expect(user.getFullName()).toBe('User 1');
    });
});