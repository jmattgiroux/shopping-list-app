import exp = require("constants");

const User = require("./users-model");
const UserResolvers = require("./users-resolvers");

const date = new Date().toISOString();

const testUser = {
    email: "testUserEmail",
    password: "testUserPassword",
    createdAt: date,
};

describe("Confirming User Model Integration", () => {
    it("Should create a new user using the User schema and match the input given.", async () => {
        const newUser = new User({
            email: testUser.email,
            password: testUser.password,
            createdAt: date,
        });
        expect(newUser.email).toBe(testUser.email);
        expect(newUser.password).toBe(testUser.password);
        expect(newUser.createdAt).toBe(testUser.createdAt);
    });
});
