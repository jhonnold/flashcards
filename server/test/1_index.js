import request from 'supertest';
import app from '../src';

describe('Initial Tests', () => {
  it('Returns with JSON', (done) => {
    request(app)
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Returns version', (done) => {
    request(app)
      .get('/api')
      .expect(200, { version: '0.1.0' }, done);
  });

  it('404 on not found', (done) => {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });
});
