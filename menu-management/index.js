const express = require('express');
const categoryRoutes = require('./routes/category');
const subCategoryRoutes = require('./routes/subcategory');
const itemRoutes = require('./routes/item');
const connectToMongo = require("./mongoDB/connection");

connectToMongo()

const app = express();
app.use(express.json());
app.use(express.static('public'))

app.get("/", async (req, res) => {
    res.status(200).send("Guestara Backend")
})

app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subCategoryRoutes);
app.use("/api/items", itemRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
