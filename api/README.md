# Funsionamiento de la api

### correr el comando ``npm install`` para instalar las dependencias necesarias para el back.

## Endpoints disponibles

### GET http://localhost:5001/food/api/products  Este traera todos los productos.
### GET http://localhost:5001/food/api/products/:id Este te traera por id.
### POST http://localhost:5001/food/api/products Crear un producto.
### PUT http://localhost:5001/food/api/products/:id Este actualiza el producto.
### DELETE http://localhost:5001/food/api/products/:id Este elimina el producto.


## Endpoints categories
#### Categias es un array de categorias donde un Item tiene las categorias que necesitas como:
#### Hamburgues,Bebidas,Sandwich,Combos,Guarnición,Bebida.
#### Si quieren agregar una nueva categoria al item existente solo apunta con su ID y pasan la categoria que quieren agregar
#### esta se agregara al array de la categoria ya existente.
### GET http://localhost:5001/food/api/category  Este traera todos las Categories.
### GET http://localhost:5001/food/api/category/:id Este te traera por id.
### POST http://localhost:5001/food/api/category Crear una nueva category.
### PUT http://localhost:5001/food/api/category/:id Este actualiza la categoria en la propiedad deseada.
### DELETE http://localhost:5001/food/api/category/:id Este elimina el producto. //por implementar