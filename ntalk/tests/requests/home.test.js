const app = require('../../app');
const should = require('should');
const request = require('supertest')(app);

describe('In home controller', () => {
  it('Should return status 200 on GET /', (done) => {
    request.get('/')
      .end((error, res) => {
        res.status.should.eql(200);
        done();
      });
  });

  it('Should go to / on when GET /logout', (done) => {
    request.get('/logout')
      .end((error, res) => {
        res.headers.location.should.eql('/');
        done();
      });
  });

  it('Should go to /contacts when make POST /login', (done) => {
    const login = { user : { name : 'user1', mail : 'user1'} };

    request.post('/login')
      .send(login)
      .end((error, res) => {
        res.headers.location.should.eql('/contacts');
        done();
      });
  });

  it('Should go to / when POST /login', (done) => {
    const login = { user: { name: '', email: '' } };
      request.post('/login')
      .send(login)
      .end((error, res) => {
        res.headers.location.should.eql('/');
        done();
      });
    });
});