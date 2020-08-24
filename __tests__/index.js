const { add } = require("../src/index");

describe('basic Add function', () => {
    test('for empty string', () => {
        expect(add("")).toEqual(0);
    })
    test('for 1', () => {
        expect(add("1")).toEqual(1);
    })
    test('for 1,2', () => {
        expect(add("1,2")).toEqual(3);
    })
})

describe('unknown arguments', () => {
    test('1,2,3,4,5,6,7,8,9', () => {
        expect(add("1,2,3,4,5,6,7,8,9")).toEqual(45);
    })
})

describe('add new line', () => {
    test('1\n2,3', () => {
        expect(add('1\n2,3')).toEqual(6);
    })
    test('1,\n error', () => {
        expect(() => add('1,\n')).toThrow(Error);
    })

})

describe('for support other delimiters', () => {
    test('at beginning string', () => {
        expect(add('//;\n1;2')).toEqual(3)
    })
})

describe('for negative number', () => {
    test('negative not allowed', () => {
        expect(() => add('-6, 4, 5, -5')).toThrow(new TypeError("can not be negative: -6,-5"));
    })
})
