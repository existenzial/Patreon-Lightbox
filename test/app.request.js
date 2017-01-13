var request = require("supertest");
var app = require("../app");

describe("GET app", function() {
  it("should be successful", function(done){
    request(app)
      .get("/")
      .expect(200, done);
  });
  it("should respond with html", function(done) {
    request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
});
