const request = require('supertest');

describe('GET /schedule', () => {
  it('should return 200 OK', (done) => {
    request('https://testdev5-production.up.railway.app')
      .get('/schedule')
      .expect(200, done);
  });
});
