const subtract = require('./subtract')

test('properly subtacts two numbers', () => {
    expect(subtract(1,2)).toBe(-1)
})