const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

router.post("/category", async (req, res) => {
    const data = req.body;

    if (!data || !req) {
        return res.status(411).json({
            msg: "Fill all fields"
        });
    }

    try {
        await Category.create({
            name: data.name,
            image: data.image,
            description: data.description,
            taxApplicability: data.taxApplicability,
            tax: data.tax,
            taxType: data.taxType
        })

        res.json({
            msg: "Details Added Successfully.",
        })

    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            msg: "An error occurred while adding details.",
            error: error.message
        });
    }
});



router.get("/category", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(400).send(error);
    }

})


router.get("/category/:id", async (req, res) => {

    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).send();
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.put("/category/:id", async (req, res) => {

    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) return res.status(404).send();
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;


