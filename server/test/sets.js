import request from 'supertest';
import { assert } from 'chai';
import app from '../src';

describe('Set Tests', () => {
  const testSet = {
    creator: 'Tester',
    name: 'This is a test set',
    description: 'This set was created as a test during testing',
  };

  const edittedSet = {
    id: -1,
    creator: 'Tester2',
    name: 'This is an editted test set',
    description: 'This set has been updated during testing',
  };

  let createdSet = {};

  it('Returns sets', (done) => {
    request(app)
      .get('/api/sets')
      .expect(200)
      .expect((res) => {
        assert.isArray(res.body);
      })
      .end(done);
  });

  it('Fails to create a set', (done) => {
    request(app)
      .post('/api/sets')
      .send({ name: 'Not Enough Params ' })
      .expect(400, done);
  });

  it('Creates a set', (done) => {
    request(app)
      .post('/api/sets')
      .send(testSet)
      .expect(200)
      .expect(({ body }) => {
        assert.equal(body.creator, testSet.creator);
        assert.equal(body.name, testSet.name);
        assert.equal(body.description, testSet.description);
        createdSet = body;
      })
      .end(done);
  });

  it('Gets created set', (done) => {
    request(app)
      .get(`/api/sets/${createdSet.id}`)
      .expect(200)
      .expect(({ body }) => {
        assert.deepEqual(body, createdSet);
      })
      .end(done);
  });

  it('Updates set properly', (done) => {
    request(app)
      .put(`/api/sets/${createdSet.id}`)
      .send(edittedSet)
      .expect(200)
      .expect(({ body }) => {
        assert.equal(body.id, createdSet.id);
        assert.equal(body.creator, edittedSet.creator);
        assert.equal(body.name, edittedSet.name);
        assert.equal(body.description, edittedSet.description);
        createdSet = body;
      })
      .end(done);
  });

  it('Gets updated set', (done) => {
    request(app)
      .get(`/api/sets/${createdSet.id}`)
      .expect(200)
      .expect(({ body }) => {
        assert.deepEqual(body, createdSet);
      })
      .end(done);
  });

  it('Deletes set', (done) => {
    request(app)
      .delete(`/api/sets/${createdSet.id}`)
      .expect(204, done);
  });

  it('Cant get deleted set', (done) => {
    request(app)
      .get(`/api/sets/${createdSet.id}`)
      .expect(404, done);
  });

  it('Cant update deleted set', (done) => {
    request(app)
      .put(`/app/sets/${createdSet.id}`)
      .expect(404, done);
  });
});
