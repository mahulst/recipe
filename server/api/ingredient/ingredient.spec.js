'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Ingredient = require('./ingredient.model.js')
var goodIngredient,
  faultyIngredient;
describe('#Ingredient', function () {
  describe('Ingredient Model', function () {
    before(function(done) {
      goodIngredient = new Ingredient({
        name: 'Apple',
        info: 'Fake ingredient',
        locationGroup: '15',
        price: '15.25',
        active: true
      });
      faultyIngredient = new Ingredient({
        info: 'Fake ingredient',
        locationGroup: '16',
        price: '1.00',
        active: true
      });

      //remove old ingredients
      Ingredient.remove().exec().then(function() {
        done();
      });
    });

    afterEach(function(done) {
      Ingredient.remove().exec().then(function() {
        done();
      });
    });

    it('should error when ingredient does not have a name', function (done) {
      faultyIngredient.save(function (err) {
        err.name.should.equal("ValidationError");
        err.errors.name.path.should.equal('name');
        done();
      });
    });


    it('should fail when saving a duplicate ingredient', function(done) {
      goodIngredient.save(function() {
        var goodIngredientDup = new Ingredient(goodIngredient);
        goodIngredientDup.save(function(err) {
          should.exist(err);
          done();
        });
      });
    });
  });
  describe('GET /api/ingredients', function() {

    it('should respond with JSON array', function(done) {
      request(app)
        .get('/api/ingredients')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          done();
        });
    });
  });
});