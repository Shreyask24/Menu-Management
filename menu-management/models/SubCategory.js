const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean, default: null },
    tax: { type: Number, default: null },
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
module.exports = SubCategory;
