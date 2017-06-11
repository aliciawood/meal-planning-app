var express = require('express');
var Recipe = require('../models/recipe');

var recipeRouter = express.Router();

recipeRouter
  .route('/recipes')
  .post(function (request, response) {

    console.log('POST /recipes');

    var recipe = new Recipe(request.body);

    recipe.save();

    response.status(201).send(recipe);
  })
  .get(function (request, response) {

    console.log('GET /recipe');

    Recipe.find(function (error, recipes) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(recipes);

      response.json(recipes);
    });
  });

recipeRouter
  .route('/recipes/:recipeId')
  .get(function (request, response) {

    console.log('GET /recipes/:recipeId');

    var recipeId = request.params.recipeId;

    Recipe.findOne({ id: recipeId }, function (error, recipe) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(recipe);

      response.json(recipe);

    });
  })
  .put(function (request, response) {

    console.log('PUT /recipes/:recipeId');

    var recipeId = request.params.recipeId;

    Recipe.findOne({ id: recipeId }, function (error, recipe) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      if (recipe) {
        recipe.name = request.body.name;
        recipe.email = request.body.email;
        
        recipe.save();

        response.json(recipe);
        return;
      }

      response.status(404).json({
        message: 'Recipe with id ' + recipeId + ' was not found.'
      });
    });
  })
  .patch(function (request, response) {

    console.log('PATCH /recipes/:recipeId');

    var recipeId = request.params.recipeId;

    Recipe.findOne({ id: recipeId }, function (error, recipe) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (recipe) {

        for (var property in request.body) {
          if (request.body.hasOwnProperty(property)) {
            if (typeof recipe[property] !== 'undefined') {
              recipe[property] = request.body[property];
            }
          }
        }

        // if (request.body.name) {
        //   recipe.name = request.body.name;
        // }

        // if (request.body.description) {
        //   recipe.description = request.body.description;
        // }

        // if (request.body.quantity) {
        //   recipe.quantity = request.body.quantity;
        // }

        recipe.save();

        response.json(recipe);
        return;
      }

      response.status(404).json({
        message: 'Recipe with id ' + recipeId + ' was not found.'
      });
    });
  })
  .delete(function (request, response) {

    console.log('DELETE /recipes/:recipeId');

    var recipeId = request.params.recipeId;

    Recipe.findOne({ id: recipeId }, function (error, recipe) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (recipe) {
        recipe.remove(function (error) {

          if (error) {
            response.status(500).send(error);
            return;
          }

          response.status(200).json({
            'message': 'Recipe with id ' + recipeId + ' was removed.'
          });
        });
      } else {
        response.status(404).json({
          message: 'Recipe with id ' + recipeId + ' was not found.'
        });
      }
    });
  });

module.exports = recipeRouter;