 const Order = require('../models/Order');
 const Product = require('../models/Product');
 const server = require('express').Router();
 const enviarEmail = require('../helpers/emails');

 const mercadopago = require('mercadopago');


 const {ACCESS_TOKEN}=process.env;

 mercadopago.configure({

     access_token: ACCESS_TOKEN

 });
 var cupon = 0;
var name;
var email;
var data;
server.get('/name/:name', (req,res,next) => {
  //console.log("name:  ", req.params.name)
  name= req.params.name;
  res.send("llego name")
})

server.get('/email/:email', (req,res,next) => {
 // console.log("email:  ", req.params.email)
  email = req.params.email;
  res.send("llego email")
})

server.get('/coupon/:cupon', (req,res,next) => {
  console.log("cupon:  ", req.params)
  cupon= req.params.cupon;
  if(!cupon){
    cupon = 0;
    res.send("no llego cupon")
  }
  res.send("llego cupon")
})
server.get('/data', (req,res, next) => {
  data = req.query
  console.log("DATA...", data)
  res.send("llego data")
})

server.get ('/:id',async(req,res,next) =>{
  
  const carrito = await Order.findById(req.params.id);
  if (!carrito) {
    res.status(400).json({ msg: "Esa orden no existe" });
    return next();
  }
  //console.log("ORDEN BACK" ,carrito)
  //res.json(order);

  // const items_ml = carrito.order.map(i =>({
  //     title:i.name,
  //     unit_price : parseInt(i.price),
  //     quantity : i.count
  // })) 
  const precioTotal = carrito.order.map(e => {
    let precio = parseInt(e.price)
    return precio * e.count
  });

 
  const total =  precioTotal.reduce((a,b) => a + b);
  const items_ml=[{ title:'producto',
  unit_price:total,
  quantity: 1}]

 //Crea un objeto de preferencia 

  let preference = {
  items : items_ml,
  external_reference : `${req.params.id}`, //algo que identifique la orden
  payment_methods:{
      excluded_payment_types:[ //metodo de pago excluido
          {
              id:'atm'
          }
      ],

      installments: 3  //Cantidad máximo de cuotas
  },
  back_urls: {
    success: 'http://localhost:5001/food/api/mercadopago',
    failure: 'http://localhost:5001/food/api/mercadopago',
    pending: 'http://localhost:5001/food/api/mercadopago',
  },


  }
  mercadopago.preferences.create(preference)

    .then(function(response){
      //console.info('RESPONDIO PREFERENCE', response)
    //Este valor reemplazará el string"<%= global.id %>" en tu HTML
      global.id = response.body.id;
      //console.log("RESPUESTA BODY",response.body)
      res.json({ id: global.id });
    })
    .catch(function(error){
      console.log("ERROR ACAAA",error);
    })
})


  //Ruta que recibe la información del pago
  server.get('/',async  (req, res,next)=>{
    const payment_id= req.query.payment_id
   //  console.log("PAYMENT ID", payment_id)
    const payment_status= req.query.status
   //console.log("PAYMENT STATUS", payment_status)
    const external_reference = req.query.external_reference
   //   console.log("EXTERNAL REFERENCE ", external_reference)
    const merchant_order_id= req.query.merchant_order_id;
    //  console.log("MERCHANT ORDER ID ", merchant_order_id)
    try {
      let orderUpdate = await Order.findByIdAndUpdate(
        { _id: external_reference },
        
        {
          status: "completada",
        }
        );
        //console.log("orden back",orderUpdate )
        const precioTotal = orderUpdate.order.map(e => {
          let precio = parseInt(e.price)
          return precio * e.count
        });
        const total = precioTotal.reduce((a,b) => a + b) - cupon;
        //console.log("Total", total)
        //ENVIO DE EMAIL
        //console.log("namename", name)
        //console.log("emailllll", email)
        const date = new Date();
        var contentHTML;
        if(data === undefined){
          contentHTML = `
          <h1>Your purchase was successful !!!</h1>
          <ul>
              <li>Name: ${name}</li>
              <li>Email: ${email}</li>
              <li>OP:${external_reference}</li>
              <li>Date:${date}</li>
              <li>Total:${total}</li>
          </ul>
          <p>Thanks for buying in our store!</p>
          <p>Use this discount coupon in your next shipping</p>
          <p>159648</p>
          <p>We always wait for you in http://localhost:3000/</p>
          <p>ENJOY YOUR MEAL!!!</p>

          `;
        }else{
          contentHTML = `
          <h1>Your purchase was successful !!!</h1>
          <ul>
              <li>Name: ${name}</li>
              <li>Email: ${email}</li>
              <li>OP:${external_reference}</li>
              <li>Date:${date}</li>
              <li>Total:${total}</li>
          </ul>
          <h2>Shipping information</h2>
          <ul>
            <li>Address: ${data.address}</li>
            <li>City: ${data.city}</li>
            <li>Province: ${data.province}</li>
            <li>Zip Code: ${data.zipCode}</li>
          </ul>
          <p>Thanks for buying in our store!</p>
          <p>Use this discount coupon in your next shipping</p>
          <p>159648</p>
          <p>We always wait for you in http://localhost:3000/</p>
          <p>ENJOY YOUR MEAL!!!</p>
          `;
        }


        // await enviarEmail.enviar({
        //     email,
        //     name,
        //     contentHTML
        // })
        // .then(result => res.json('enviado'))
        // .catch(error => console.log(error.message))


        //console.log("ORDER UPDATE", orderUpdate)
        let productsUpdate = orderUpdate.order.map(async(e) => {
          let product = await Product.findOneAndUpdate({_id:e.id},
            {
                stock: e.stock && e.stock > 0? e.stock - e.count : 0
            });
        })

        
        
        //console.log("ORDER ", order);
    return res.redirect("http://localhost:3000/succes");
    } catch (error) {
      console.log(error);
      next();
    }
  });

    
  
module.exports = server;