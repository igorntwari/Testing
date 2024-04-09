const {generateText,checkAndGenerate} = require('./util')

test('it should output name and age',()=> {
    const text = generateText('igor',12)
    expect(text).toBe('igor (12 years old)')
})

test('it shoul return the right output',()=> {
    const text = checkAndGenerate('ntwali',99)
    expect(text).toBe(`ntwali (${99} years old)`)
})