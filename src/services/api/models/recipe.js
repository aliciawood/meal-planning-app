var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
	_id: { type: String, unique: true, index: true },
	name: String,
	description: String,
	recipeSteps: Array,
	genre: String,
	mealType: String,
	pictureId: String,
	minTime: Number,
	maxTime: Number,
	servesMin: Number,
	servesMax: Number,
	recipeIngredients: Array
});

module.exports = mongoose.model('Recipe', recipeSchema);