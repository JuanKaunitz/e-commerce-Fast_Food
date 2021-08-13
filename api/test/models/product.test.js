const { Product } = require ("../models/Product");

const { expect } = require('chai');

describe ("Product model", () => {



    describe('Success', () => {
        beforeEach(() => Product.sync({ force: true }));
        it('Deberia funcionar cuando es un producto valido con todos los campos', () => {
          Product.create({ name: 'Hamburguesa Argentina', name: 'Jose', password: 'appfood2476'})
          .then(product => {
            expect(product.name).to.equal('pruebafood@gmail.com'); 
            expect(product.type).to.equal('Jose');
            expect(product.identifier).to.equal("appfood2476");  
            expect(product.image).to.equal("appfood2476");  
            expect(product.price).to.equal("appfood2476");  
            expect(product.description).to.equal("appfood2476");  
            expect(product.stock).to.equal("appfood2476");  
            expect(product.categories).to.equal("appfood2476");  

            
            done();
          })
        });
    })













});