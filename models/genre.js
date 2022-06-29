const { Schema, model } = require("mongoose");

const GenreSchema = new Schema({
	name: {
		type: String,
		minLen: 3,
		maxLen: 100,
		required: true,
	},
});

GenreSchema.virtual("url").get(function () {
	return `/catalog/genre/${this._id}`;
});

module.exports = model("Genre", GenreSchema);
