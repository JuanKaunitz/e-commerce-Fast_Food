
export const addCarts = (detail) => {
 
  
  if(localStorage.getItem('order')){
    let object = JSON.parse(localStorage.getItem('order'));
   
    let order = object;
    //console.log("PRODUCT", order)
    order.push({id: detail._id, name: detail.name, 
        image: detail.image, price: detail.price, 
        description: detail.description, status:'carrito'});
    localStorage.setItem('order', JSON.stringify(order));
    return order;
  }else {
    let order = [{id: detail._id, name: detail.name, 
      image: detail.image, price: detail.price, 
      description: detail.description, status:'carrito'}];
    localStorage.setItem('order', JSON.stringify(order));
    return order;
    //console.log("PRODUCT2", order)
  }
}