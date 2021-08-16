const express = require('express');
const Stripe = require('stripe');

const router = express.Router();

const KEY_STRIPE = process.env.KEY_STRIPE;
const stripe = new Stripe(`${KEY_STRIPE}`);


router.post('/', async(req,res,next)=>{
    const payment = req.body;
    await stripe.paymentIntents.create({

    })
    res.json('recivido');
})





module.exports = router;