var API_KEY = require("../public/src/API/api").FLICKR_API_KEY;
var API_ENDPOINT = require("../public/src/API/api").FLICKR_API_ENDPOINT;
var GET_API_PHOTOS = require("../public/src/API/api").getFlickrImages;
var request = require("supertest");
var fetch = require("isomorphic-fetch");

var searchTerm = 'nature';

describe("GET Flickr API Photos", function() {
  var images = GET_API_PHOTOS(searchTerm);
  it("should be successful", function(done){
    request("https://api.flickr.com/")
      .get(API_ENDPOINT)
      .expect(200, done);
  });
  it("should respond with json", function(done) {
    request("https://api.flickr.com/")
      .get(API_ENDPOINT)
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
