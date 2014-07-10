'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Recipe = require('./recipe.model.js');

var mongoose = require('mongoose'),
  Ingredient = mongoose.models.Ingredient,
  Tag = mongoose.models.Tag,
  tag,
  ingredient,
  ingredient2;

describe('#Recipe', function () {
  before(function (done) {
    //fake tags, ingredients
    tag = new Tag({
      name: 'Fake Tag'
    });
    ingredient = new Ingredient({
      name: 'Apple',
      price: 10
    });
    ingredient2 = new Ingredient({
      name: 'Pear',
      price: 15
    });

    //remove old ingredients & tags
    Tag.remove().exec().then(function() {
      Ingredient.remove().exec().then(createTag);
    });

    function createTag () {
      tag.save(createIngredient1);
    }
    function createIngredient1() {
      ingredient.save(createIngredient2);
    }
    function createIngredient2 () {
      ingredient2.save(createRecipe);
    }
    function createRecipe() {
      new Recipe({
        name: "Fake recipe",
        ingredients : [{
          amount: '10',
          unit: 'gram',
          ingredient: ingredient._id
        },{                
          amount: '10',
          unit: 'gram',
          ingredient: ingredient2._id
        }],
        tags: [tag._id]
      }).save(function (err, recipe) {
          done();
      })
    }
  });

  after(function(done) {
    //remove all things
    Recipe.remove().exec().then(function() {
      Ingredient.remove().exec().then(function() {
        Tag.remove().exec().then(function() {
          done();
        });
      });
    });
  });
  describe('Recipe Model', function () {
    
    it('should have virtual property calculatedPrice', function(done) {
      Recipe.findOne().populate('ingredients.ingredient').exec(function (err, recipe) {
        recipe.calculatedPrice.should.equal(25);
        done();
      })
    });
  });

  describe('GET /api/recipes', function() {
    it('should respond with JSON array', function(done) {
      request(app)
        .get('/api/recipes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          done();
        });
    });
    it('should respond with populate tags and ingredients', function(done) {
      request(app)
        .get('/api/recipes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);

          res.body[0].should.not.be.empty;
          //tags should be populated
          res.body[0].tags[0].name.should.be.ok;
          //ingredients should be populated
          res.body[0].ingredients[0].ingredient.should.have.properties('name', 'price');
          done();
        });
    });
  });

});