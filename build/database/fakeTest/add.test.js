"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = require("./add");
describe("testing add function", function () {
    it("Should return 14 for add(6, 8)", function () {
        expect(add.add(6, 8)).toBe(14);
    });
});
