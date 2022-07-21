import add = require("./add");
describe("testing add function", () => {
    it("Should return 14 for add(6, 8)", () => {
        expect(add.add(6, 8)).toBe(14);
    });
});
