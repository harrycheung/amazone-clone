const router = require("express").Router();
const Category = require("../models/category");

//POST req

router.post("/categories", async (req, res) => {
    try {
        const category = new Category();
        category.type = req.body.type;

        await category.save();

        res.json({
            success: true,
            message: "Successfully created new category"
        });
    }catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//GET

router.get("/categories", async (req, res) => {
    try{
        let categories = await Category.find();
        res.json({
            success:true,
            message: categories
        });
    }catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        });
    }

});



module.exports = router;