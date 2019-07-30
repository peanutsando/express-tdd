const request = require('supertest')
const { expect } = require('chai')

const app = require('../app')

describe('GET /', () => {
    it('response test', function(done) {
        request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
            if (err) {
                return done(err)
            }

            expect(res.text).to.equal('Hello World')
            done()
        })
    })
})

describe('GET /2', () => {
    it('response test', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err)
                }

                expect(res.text).to.equal('Hello')
                done()
            })
    })
})