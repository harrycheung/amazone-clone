const express = require('express');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const dotenv = require("dotenv");

const User = require("./models/user");


dotenv.config();


const mongoose = require("mongoose");

const app = express()

mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connented to database");
        }

    });


//Middlewares
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//require apis

const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const ownerRoutes = require("./routes/owner");

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);





app.listen(3000, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Listening in port', 3000)
    }
});