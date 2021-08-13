export const addCarts = (detail, token) => {

  /*if(token){
    if(localStorage.getItem('order')){
      let object = JSON.parse(localStorage.getItem('order'));
     
      let order = object;
      //console.log("PRODUCT", order)
      order.push({id: detail._id, name: detail.name, 
          image: detail.image, price: detail.price, 
          description: detail.description, status:'creada'});
      localStorage.removeItem('order');
      return order;
    }else {
      let order = [{id: detail._id, name: detail.name, 
        image: detail.image, price: detail.price, 
        description: detail.description, status:'creada'}];
      return order;
      //console.log("PRODUCT2", order)
    }
  }*/
  
  if(localStorage.getItem('order')){
    let object = JSON.parse(localStorage.getItem('order'));
    var prueba = object;
    let filtrado = object.filter(e => e.id === detail._id);
    //console.log("FILTRADO", filtrado)
    
    if(filtrado.length > 0){
      //console.log("ENTRO EN INDEX")
      let order = prueba.map((e) => {
        if(e.id === detail._id){
          let cont = e.count;
         return {id: detail._id, name: detail.name, 
          image: detail.image, price: detail.price, count: cont + 1,
          description: detail.description, status:'carrito'}
        }
        return e;
      });
      //console.log("INDEX", order)
      
      localStorage.setItem('order', JSON.stringify(order));
      //console.log("PRODUCT INDEX", order)
      return order;
    }
    let order = object;
    order.push({id: detail._id, name: detail.name, 
      image: detail.image, price: detail.price, count: 1,
      description: detail.description, status:'carrito'});
    localStorage.setItem('order', JSON.stringify(order));
    //console.log("PRODUCT ", order)
    return order;

  }else {
    let order = [{id: detail._id, name: detail.name, 
      image: detail.image, price: detail.price, count: 1,
      description: detail.description, status:'carrito'}];
    localStorage.setItem('order', JSON.stringify(order));
    //console.log("PRODUCT ARRAY VACIO", order)
    return order;
  }
}

export const deleteCart = (id) => {

  let object = JSON.parse(localStorage.getItem('order'));
  let delet = object.filter(e => e.id !== id);
  localStorage.setItem('order', JSON.stringify(delet));
  return delet;
}

export const sumProduct = (id) => {
  let object = JSON.parse(localStorage.getItem('order'));
  let filtrado = object.filter(e => e.id === id);
  var prueba = filtrado[0];
  console.log("FILTRADO", filtrado)
  
  console.log("ENTRO EN INDEX")
  let order = object.map((e) => {
    if(e.id === id){
      let cont = e.count;
      return {id: prueba.id, name: prueba.name, 
      image: prueba.image, price: prueba.price, count: cont + 1,
      description: prueba.description, status: prueba.status}
    }
    return e;
  });
  localStorage.setItem('order', JSON.stringify(order));
  return order;
}

export const resProduct = (id) => {
  let object = JSON.parse(localStorage.getItem('order'));
  let filtrado = object.filter(e => e.id === id);
  var prueba = filtrado[0];
  console.log("FILTRADO", filtrado)
  
  console.log("ENTRO EN INDEX")
  let order = object.map((e) => {
    if(e.id === id && e.count > 1){
      let cont = e.count;
      return {id: prueba.id, name: prueba.name, 
      image: prueba.image, price: prueba.price, count: cont - 1,
      description: prueba.description, status: prueba.status}
    }
    return e;
  });
  localStorage.setItem('order', JSON.stringify(order));
  return order;
}