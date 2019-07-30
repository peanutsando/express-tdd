const request = require('supertest')
const { expect } = require('chai')

const app = require('../app')

describe('GET /users no data', () => {
    it('get User test', done => {
        request(app)
            .get('/users')
            .expect(403, done)
    })
})

describe('GET /users no user data', () => {
    it('get User test', done => {
        request(app)
            .get('/users')
            .query({ id: 'abcde' })
            .expect(403, done)
    })
})

describe('GET /users user data', () => {
    it('get User test', done => {
        request(app)
            .get('/users')
            .query({id: 'abcd'})
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                expect(res.body).has.all.keys(['id', 'mail', 'name'])
                expect(res.body.id).to.equal('abcd')
                expect(res.body.mail).to.equal('abcd')
                expect(res.body.name).to.equal('Mesh')
                done()
            })
    })
})

describe('POST /users no data', () => {
    it('set User test', done => {
        request(app)
            .post('/users')
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                expect(res.body.msg).to.equal('Bad Request')
                done()
            })
    })
})

describe('POST /users differ data', () => {
    it('set User test', done => {
        request(app)
            .post('/users')
            .send({
                id: 'abcde', pw: 'abcd'
            })
            .expect(401)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                expect(res.body.msg).to.equal('Unauthorized')
                done()
            })
    })
})

describe('POST /users differ data2', () => {
    it('set User test', done => {
        request(app)
            .post('/users')
            .send({
                id: 'abcd', pw: 'abcde'
            })
            .expect(401)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                expect(res.body.msg).to.equal('Unauthorized')
                done()
            })
    })
})

describe('POST /users user data', () => {
    it('set User test', done => {
        request(app)
            .post('/users')
            .send({
                id: 'abcd', pw: 'abcd'
            })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                expect(res.body).has.all.keys(['id', 'mail', 'name'])
                expect(res.body.id).to.equal('abcd')
                expect(res.body.mail).to.equal('abcd')
                expect(res.body.name).to.equal('Mesh')
                done()
            })
    })
})