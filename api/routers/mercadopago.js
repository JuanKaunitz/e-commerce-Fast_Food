 const Order = require('../models/Order');
 const Product = require('../models/Product');
 const server = require('express').Router();

 const mercadopago = require('mercadopago');


 const {ACCESS_TOKEN}=process.env;

 mercadopago.configure({

     access_token: ACCESS_TOKEN

 });


server.get ('/:id',async(req,res,next) =>{
  //console.log("order id", req.params.id)
  const carrito = await Order.findById(req.params.id);
  if (!carrito) {
    res.status(400).json({ msg: "Esa orden no existe" });
    return next();
  }
  console.log("ORDEN BACK" ,carrito)
  //res.json(order);

  const items_ml = carrito.order.map(i =>({
      title:i.name,
      unit_price : parseInt(i.price),
      quantity : i.count
  })) 

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
      console.info('RESPONDIO PREFERENCE', response)
    //Este valor reemplazará el string"<%= global.id %>" en tu HTML
      global.id = response.body.id;
      console.log("RESPUESTA BODY",response.body)
      res.json({ id: global.id });
    })
    .catch(function(error){
      console.log("ERROR ACAAA",error);
    })
})


  //Ruta que recibe la información del pago
  server.get('/',async  (req, res)=>{
   // console.info("EN LA RUTA PAGOS ", req)
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
          status:"completada",
        }
        );
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