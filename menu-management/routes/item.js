const express = require('express');
const Item = require('../models/Item');
const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');
const router = express.Router();

// Create an Item
router.post('/item', async (req, res) => {
    const data = req.body;

    if (!data || !req) {
        return res.status(411).json({ msg: "Fill all fields" });
    }

    try {
        let taxApplicability = data.taxApplicability;
        let tax = data.tax;

        if (data.subCategoryId) {
            const subCategory = await SubCategory.findById(data.subCategoryId);
            if (!subCategory) return res.status(404).json({ msg: "Subcategory not found" });

            if (taxApplicability === undefined) taxApplicability = subCategory.taxApplicability;
            if (tax === undefined) tax = subCategory.tax;
        } else if (data.categoryId) {
            const category = await Category.findById(data.categoryId);
            if (!category) return res.status(404).json({ msg: "Category not found" });

            if (taxApplicability === undefined) taxApplicability = category.taxApplicability;
            if (tax === undefined) tax = category.tax;
        }

        const item = await Item.create({
            subCategoryId: data.subCategoryId,
            categoryId: data.categoryId,
            name: data.name,
            image: data.image,
            description: data.description,
            taxApplicability: taxApplicability,
            tax: tax,
            baseAmount: data.baseAmount,
            discount: data.discount,
            totalAmount: data.baseAmount - data.discount
        })


        res.json({ msg: "Item added successfully.", item });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg: "An error occurred while adding the item.",
            error: error.message
        });
    }
});

// Get all Items
router.get('/item', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).send(items);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get Items by Subcategory or Category ID
router.get('/item/subcategory/:subCategoryId', async (req, res) => {
    try {
        const items = await Item.find({ subCategoryId: req.params.subCategoryId });
        res.status(200).send(items);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/item/category/:categoryId', async (req, res) => {
    try {
        const items = await Item.find({ categoryId: req.params.categoryId });
        res.status(200).send(items);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get an Item by ID or Name
router.get('/item/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id) || await Item.findOne({ name: req.params.id });
        if (!item) return res.status(404).send();
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update an Item by ID
router.put('/item/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).send();
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Search Items by Name
router.get('/items/search/:name', async (req, res) => {
    try {
        const items = await Item.find({ name: { $regex: req.params.name, $options: 'i' } });
        res.status(200).send(items);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
