var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
	_id: { type: String, unique: true, index: true },
	name: String,
	tags: Array,
});

module.exports = mongoose.model('Ingredient', ingredientSchema);