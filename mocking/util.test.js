jest.mock('./http')

const { loadTitle } = require("./util");


test("it should return an uppercase sentence", () => {
  loadTitle().then(text=> {
    expect(text).toBe("DELECTUS AUT AUTEM")
  })
});
