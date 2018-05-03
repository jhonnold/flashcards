import request from 'supertest';
import { assert } from 'chai';
import app from '../src';

describe('Flashcard Tests', () => {
  let createdSet = {};
  let createdFlashcard = {};
  let flashcardBatch = [];

  const testSet = {
    creator: 'Tester',
    name: 'This is a test set',
    description: 'This set was created as a test during testing',
  };

  const flashcard = {
    frontside: 'This is the front!',
    backside: 'This is the back!',
    order: 1,
  };

  const edittedFlashcard = {
    frontside: 'Front, this is!',
    backside: 'Back, this is!',
    order: 1,
  };

  before((done) => {
    request(app)
      .post('/api/sets')
      .send(testSet)
      .expect(({ body }) => {
        createdSet = body;
        flashcard.setId = createdSet.id;
      })
      .end(done);
  });

  it('Returns flashcards', (done) => {
    request(app)
      .get('/api/flashcards')
      .expect(200)
      .expect(({ body }) => assert.isArray(body))
      .end(done);
  });

  it('Fails to create flashcard', (done) => {
    request(app)
      .post('/api/flashcards')
      .send({ name: 'Not enough params' })
      .expect(400, done);
  });

  it('Fails to create flashcard for invalid set', (done) => {
    request(app)
      .post('/api/flashcards')
      .send({ ...flashcard, setId: -1 })
      .expect(500, done);
  });

  it('Creates a flashcard', (done) => {
    request(app)
      .post('/api/flashcards')
      .send(flashcard)
      .expect(200)
      .expect(({ body }) => {
        assert.equal(body.frontside, flashcard.frontside);
        assert.equal(body.backside, flashcard.backside);
        assert.equal(body.setId, flashcard.setId);
        assert.equal(body.order, flashcard.order);
        createdFlashcard = body;
      })
      .end(done);
  });

  it('Gets created flashcard', (done) => {
    request(app)
      .get(`/api/flashcards/${createdFlashcard.id}`)
      .expect(200)
      .expect(({ body }) => assert.deepEqual(body, createdFlashcard))
      .end(done);
  });

  it('Updates flashcard properly', (done) => {
    request(app)
      .put(`/api/flashcards/${createdFlashcard.id}`)
      .send(edittedFlashcard)
      .expect(200)
      .expect(({ body }) => {
        assert.equal(body.setId, createdFlashcard.setId);
        assert.equal(body.frontside, edittedFlashcard.frontside);
        assert.equal(body.backside, edittedFlashcard.backside);
        assert.equal(body.order, edittedFlashcard.order);
        createdFlashcard = body;
      })
      .end(done);
  });

  it('Gets updated flashcard', (done) => {
    request(app)
      .get(`/api/flashcards/${createdFlashcard.id}`)
      .expect(200)
      .expect(({ body }) => assert.deepEqual(body, createdFlashcard))
      .end(done);
  });

  it('Deletes flashcards with set', (done) => {
    request(app)
      .delete(`/api/sets/${createdSet.id}`)
      .expect(204)
      .expect(() => {
        request(app)
          .get(`/api/flashcards/${createdFlashcard.id}`)
          .expect(404);
      })
      .end(done);
  });

  describe('Batch', () => {
    before((done) => {
      request(app)
        .post('/api/sets')
        .send(testSet)
        .expect(200)
        .expect(({ body }) => {
          createdSet = body;
          for (let i = 1; i <= 5; i += 1) {
            flashcardBatch[i - 1] = {
              fontside: flashcard.frontside,
              backside: flashcard.backside,
            };
          }
        })
        .end(done);
    });

    after((done) => {
      request(app)
        .delete(`/api/sets/${createdSet.id}`)
        .expect(204, done);
    });

    it('Fails to create flashcard batch', (done) => {
      request(app)
        .post('/api/flashcards/batch')
        .send({ flashcards: flashcardBatch })
        .expect(400)
        .expect(() => {
          flashcardBatch = flashcardBatch.map((f, i) => ({
            ...f,
            setId: createdSet.id,
            order: i + 1,
          }));
        })
        .end(done);
    });

    it('Creates flashcard batch', (done) => {
      request(app)
        .post('/api/flashcards/batch')
        .send({ flashcards: flashcardBatch })
        .expect(200, done);
    });
  });
});
