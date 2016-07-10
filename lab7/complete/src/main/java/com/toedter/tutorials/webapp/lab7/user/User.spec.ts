
import {User} from "../../../../../../../webapp/app/user/user";
describe('User', () => {
    it('should create user and get attributes', () => {
        var user: User =
            new User("user1", "user1@test.com", "User 1");
        expect(user).toBeDefined();
    });
});