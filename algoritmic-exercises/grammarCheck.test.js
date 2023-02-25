const grammarCheck = require("./grammarCheck");

describe("grammarCheck", () => {
    test("grammarCheck return true", () => {
        expect(grammarCheck('This is a good example. This is a good example.')).toBe(true);
    })
});

describe("grammarCheck", () => {
    test("grammarCheck return true", () => {
        expect(grammarCheck('this is still. a good example. Second sentence starts with capital letter.')).toBe(false);
    })
});

