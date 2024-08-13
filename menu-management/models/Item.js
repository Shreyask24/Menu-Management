const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicability: { type: Boolean },
    tax: { type: Number },
    baseAmount: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;

