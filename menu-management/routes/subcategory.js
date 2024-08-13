const express = require('express');
const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');
const router = express.Router();

// Create a Subcategory
router.post('/subcategory', async (req, res) => {
    const data = req.body;

    if (!data || !req) {
        return res.status(411).json({ msg: "Fill all fields" });
    }

    try {
        const category = await Category.findById(data.categoryId);
        if (!category) return res.status(404).json({ msg: "Category not found" });

        const subCategory = new SubCategory({
            categoryId: data.categoryId,
            name: data.name,
            image: data.image,
            description: data.description,
            taxApplicability: data.taxApplicability !== undefined ? data.taxApplicability : category.taxApplicability,
            tax: data.tax !== undefined ? data.tax : category.tax
        });

        await subCategory.save();
        res.json({ msg: "Subcategory added successfully.", subCategory });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg: "An error occurred while adding the subcategory.",
            error: error.message
        });
    }
});

// Get all Subcategories
router.get('/subcategory', async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).send(subCategories);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get Subcategories by Category ID
router.get('/subcategory/category/:categoryId', async (req, res) => {
    try {
        // Find subcategories based on the categoryId
        const subCategories = await SubCategory.find({ categoryId: req.params.categoryId });

        // Check if subcategories are found
        if (!subCategories.length) return res.status(404).json({ msg: "No subcategories found for this category" });

        // Respond with the found subcategories
        res.status(200).send(subCategories);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get a Subcategory by ID or Name
router.get('/subcategory/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id) || await SubCategory.findOne({ name: req.params.id });
        if (!subCategory) return res.status(404).send();
        res.status(200).send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update a Subcategory by ID
router.put('/subcategory/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subCategory) return res.status(404).send();
        res.status(200).send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
