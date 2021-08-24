 const Order = require('../models/Order');
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
    success: 'http://localhost:5001/food/api/mercadopago/pagos',
    failure: 'http://localhost:5001/food/api/mercadopago/pagos',
    pending: 'http://localhost:5001/food/api/mercadopago/pagos',
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
server.get("/pagos", async(req, res)=>{
      console.info("EN LA RUTA PAGOS ", req)
     /*  const payment_id= req.query.payment_id
      console.log("PAYMENT ID", payment_id)
      const payment_status= req.query.status
      console.log("PAYMENT STATUS", payment_status)
      const external_reference = req.query.external_reference
      console.log("EXTERNAL REFERENCE ", external_reference)
      const merchant_order_id= req.query.merchant_order_id;
      console.log("MERCHANT ORDER ID ", merchant_order_id)
      
      
      //Aquí edito el status de mi orden
      let statusOrder = await Order.findById(external_reference);
      console.log("ORDER A CAMBIAR", statusOrder)
      statusOrder.status = payment_status;
      
      console.info('STATUS',statusOrder.status )
        //order.save()
       
        console.info('redirect success')
        
        return res.redirect("http://localhost:3000") */
      
        /* .catch((err) =>{
          console.error('error al salvar', err)
          return res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`)
        })
     
      .catch(err =>{
        console.error('error al buscar', err)
        return res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`)
      }) */

      //proceso los datos del pago 
      //redirijo de nuevo a react con mensaje de exito, falla o pendiente
  })
  
  
   //Busco información de una orden de pago
   server.get("/pagos/:id", (req, res)=>{
     const mp = new mercadopago(ACCESS_TOKEN)
     const id = req.params.id
     console.info("Buscando el id", id)
     mp.get(`/v1/payments/search`, {'status': 'pending'}) //{"external_reference":id})
     .then(resultado  => {
       console.info('resultado', resultado)
       res.json({"resultado": resultado})
     })
     .catch(err => {
       console.error('No se consulto:', err)
       res.json({
         error: err
    })
  })
})
  
module.exports = server;