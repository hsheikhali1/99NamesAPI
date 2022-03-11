const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("responds with json", () => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((err, res) => {
        expect(res).toEqual(
          expect.arrayContaining(expect.objectContaining({ someField: true }))
        );
      });
  });
});
