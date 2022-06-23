const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const stripeRoute = require('./routes/stripe');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');


dotenv.config();

app.use(cors());


mongoose.connect("mongodb+srv://admin:admin@cluster0.rfcg6.mongodb.net/?retryWrites=true&w=majority")
        .then(() =>console.log(' connected to database !!!'))
        .catch(err => console.log(err));
 
app.use(express.json());
//app.use(cors({origin: ["http://localhost:5000/api/checkout/", "https://checkout.stripe.com"]}));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute); 
app.use('/api/movies', movieRoute); 
app.use('/api/checkout', stripeRoute); 
app.use('/api/lists', listRoute); 


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})