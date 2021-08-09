const { User } = require ("../models/User");

const { expect } = require('chai');

describe ("User model", () => {

    describe("Validators",() =>{

        beforeEach(() => User.sync({force:true }));
        it(" Deberia arrojar un error si el mail es nulo", (done) =>{
            User.create ({name: "pruebafood@gmail.com", email: "Anda"})
            .then (()=> done(new Error ("email is required")))
            .catch (()=> done());
        });

        it(" Deberia arrojar un error si el name es nulo", (done) =>{
            User.create ({name: "Jose", name:"Anda"})
            .then (()=> done(new Error ("name is required")))
            .catch (()=> done());
        });

        it(" Deberia arrojar un error si el password es nulo", (done) =>{
            User.create ({password: "appfood2476", password:"una buena password"})
            .then (()=> done(new Error ("password is required")))
            .catch (()=> done());
        });

    })


    describe('Success', () => {
        beforeEach(() => User.sync({ force: true }));
        it('Deberia funcionar cuando es un usuario valido con todos los campos', () => {
          User.create({ email: 'pruebafood@gmail.com', name: 'Jose', password: 'appfood2476'})
          .then(user => {
            expect(user.email).to.equal('pruebafood@gmail.com'); 
            expect(user.name).to.equal('Jose');
            expect(user.password).to.equal("appfood2476");  
            done();
          })
        });
    })













});