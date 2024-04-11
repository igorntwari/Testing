const {generateText,checkAndGenerate} = require('./util')
const puppeteer = require('puppeteer')

test('it should output name and age',()=> {
    const text = generateText('igor',12)
    expect(text).toBe('igor (12 years old)')
})

test('it should return the right output',()=> {
    const text = checkAndGenerate('Ntwali',99)
    expect(text).toBe(`Ntwali (${99} years old)`)
})

test('it should return the right answer',()=> {
    const text = checkAndGenerate('igor',77)
    expect(text).toBe('igor (77 years old)')
})

test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({
      headless: true,
    })
    const page = await browser.newPage()
    await page.goto('localhost:3000')
    await page.click('input#name')
    await page.type('input#name', 'Anna')
    await page.click('input#age')
    await page.type('input#age', '28')
    await page.click('#btnAddUser')
    const finalText = await page.$eval('.user-item', el => el.textContent)
    expect(finalText).toBe('Anna (28 years old)')
  }, 10000)