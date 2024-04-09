const {generateText} = require('./util')

test('it should output name and age',()=> {
    const text = generateText('igor',12)
    expect(text).toBe('igor (12 years old)')
})