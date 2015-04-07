var hippie = require('hippie');
var app = require('../app.js');

describe('Ping', function () {
  describe('/ping/:server endpoint', function () {
    it('tells us when a server is reachable', function (done) {
      hippie()
        .get('http://localhost:8080/ping/google.com')
        .expectStatus(200)
        .expectBody(/"google.com is reachable/)
        .end(function(err, res, body) {
          if (err) throw err;
          done();
        });
    });
  });
});

describe('Ping', function () {
  describe('/ping/:server endpoint', function () {
    it('tells us when a server is unreachable', function (done) {
      hippie()
        .get('http://localhost:8080/ping/gqtqM7eWGMeiQD2X')
        .expectStatus(200)
        .expectBody('"gqtqM7eWGMeiQD2X is unreachable."')
        .end(function(err, res, body) {
          if (err) throw err;
          done();
        });
    });
  });
});
