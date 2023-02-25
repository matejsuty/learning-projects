const superReducedString = require("./reducedString")

describe("reducedString test", () => {
    it("should return abd", () => {
        expect(superReducedString("aaabccddd")).toBe("abd");
    })
})