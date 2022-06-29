const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: { type: String, required: true, trim: true },
	author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
	summary: { type: String, required: true, trim: true },
	isbn: { type: String, required: true, trim: true },
	genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
	return "/catalog/book/" + this._id;
});

//Export model
module.exports = mongoose.model("Book", BookSchema);
