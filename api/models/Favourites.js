const mongoose = require('mongoose');
const Schema = require('Schema');

const FavouritesSchema = new Schema({
	client: {
		type: Schema.ObjectId,
		ref: 'Client',
	},
	product: [
		{
			type: Schema.ObjectId,
			ref: 'Product',
		},
	],
});

module.exports = mongoose.model('Favourites', FavouritesSchema);