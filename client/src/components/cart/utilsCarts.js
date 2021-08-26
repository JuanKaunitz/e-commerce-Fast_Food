//AGREGA UN PRODUCTO AL CARRITO
export const addCarts = (detail) => {
  if (localStorage.getItem("order")) {
    let object = JSON.parse(localStorage.getItem("order"));
    var prueba = object;
    let filtrado = object.filter((e) => e.id === detail._id);
    //console.log("FILTRADO", filtrado)

    if (filtrado.length > 0) {
      //console.log("ENTRO EN INDEX")
      let order = prueba.map((e) => {
        if (e.id === detail._id) {
          let cont = e.count;
          return {
            id: detail._id,
            name: detail.name,
            image: detail.image,
            price: detail.price,
            count: cont + 1,
            description: detail.description,
            stock: detail.stock,
          };
        }
        return e;
      });
      //console.log("INDEX", order)

      localStorage.setItem("order", JSON.stringify(order));
      //console.log("PRODUCT INDEX", order)
      return order;
    }
    let order = object;
    order.push({
      id: detail._id,
      name: detail.name,
      image: detail.image,
      price: detail.price,
      count: 1,
      description: detail.description,
      stock: detail.stock,
    });
    localStorage.setItem("order", JSON.stringify(order));
    //console.log("PRODUCT ", order)
    return order;
  } else {
    let order = [
      {
        id: detail._id,
        name: detail.name,
        image: detail.image,
        price: detail.price,
        count: 1,
        description: detail.description,
        stock: detail.stock,
      },
    ];
    localStorage.setItem("order", JSON.stringify(order));
    //console.log("PRODUCT ARRAY VACIO", order)
    return order;
  }
};

//BORRA O ELIMINA UN PRODUCTO DEL CARRITO
export const deleteCart = (id) => {
  let object = JSON.parse(localStorage.getItem("order"));
  let delet = object.filter((e) => e.id !== id);
  localStorage.setItem("order", JSON.stringify(delet));
  return delet;
};

//SUMA UNA UNIDAD MAS A UN PRODUCTO DEL CARRITO
export const sumProduct = (id) => {
  let object = JSON.parse(localStorage.getItem("order"));
  console.log("LOCALSTORAGE", object);
  let filtrado = object.filter((e) => e.id === id);
  var prueba = filtrado[0];

  let order = object.map((e) => {
    if (e.id === id) {
      let cont = e.count;
      return {
        id: prueba.id,
        name: prueba.name,
        image: prueba.image,
        price: prueba.price,
        count: cont + 1,
        description: prueba.description,
        stock: prueba.stock,
      };
    }
    return e;
  });
  localStorage.setItem("order", JSON.stringify(order));
  return order;
};

//RESTA UNA UNIDAD A UN PRODUCTO DEL CARRITO
export const resProduct = (id) => {
  let object = JSON.parse(localStorage.getItem("order"));
  let filtrado = object.filter((e) => e.id === id);
  var prueba = filtrado[0];

  let order = object.map((e) => {
    if (e.id === id && e.count > 1) {
      let cont = e.count;
      return {
        id: prueba.id,
        name: prueba.name,
        image: prueba.image,
        price: prueba.price,
        count: cont - 1,
        description: prueba.description,
        stock: prueba.stock,
      };
    }
    return e;
  });
  localStorage.setItem("order", JSON.stringify(order));
  return order;
};

//USUARIO LOGUEADO: JUNTA SU CARRITO GUARDADO CON EL NUEVO EN EL LOCALSTORAGE
export const mergeCart = (cart, orderBack) => {

  if (cart !== undefined && cart.length > 0 && orderBack.length > 0) {
    var carritoback = orderBack[0].order;
    var band = false;
    while (cart.length > 0) {
      let element = cart.pop();
      band = false;
      var order = carritoback.map((e) => {
        if (e.id === element.id) {
          let cont = e.count;
          return {
            id: e.id,
            name: e.name,
            image: e.image,
            price: e.price,
            count: cont + 1,
            description: e.description,
            stock: e.stock,
          };
        }
        band = true;
        return e;
      });
      if (band) {
        order.push(element);
      }
    }
    return order;
  }
  if (orderBack.length > 0) {
    return orderBack[0].order;
  }
  if (cart !== undefined && cart.length > 0) {
    return cart;
  }
  return [];
};

//SUMA EL PRECIO DE TODOS LOS PRODUCTOS Y DEVUELVE EL TOTAL
export const sumaPrecioTotal = (cart) => {
  if (cart === null || cart === undefined) return 0;
  if (cart.length > 0) {
    const precios = cart.map((e) => e.price * e.count);
    var precioTotal = 0;
    for (let i = 0; i < precios.length; i++) {
      precioTotal = precioTotal + parseInt(precios[i]);
    }
  }
  return precioTotal;
};

//SUMA LA CANTIDAD DE TODOS LOS PRODUCTOS Y DEVUELVE EL TOTAL
export const sumaCantidadTotal = (cart) => {
  if (cart === null || cart === undefined) return 0;
  const precios = cart.map((e) => e.count);
  var suma = 0;
  for (let i = 0; i < precios.length; i++) {
    suma = suma + parseInt(precios[i]);
  }
  return suma;
};
