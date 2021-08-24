import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//components
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Cart from "./components/cart/Cart.jsx";
import Home from "./components/Home/Home.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import FormLogin from "./components/LogForm/FormLogin";
import CardDetails from "./components/details/CardDetails.jsx";
import Categories from "./components/categories/Categories.jsx";
import Form from "./components/Form/Form.jsx";
import Register from "./components/LogForm/FormRegister";
import AdminPanel from "./components/UserAdmin/AdminPanel.jsx";
import AdminProductDetail from "./components/UserAdmin/AdminProductDetail.jsx"
import GetClients from "./components/UserAdmin/GetClients.jsx";
import ClientEdit from "./components/UserAdmin/ClientEdit.jsx";
import NewProduct from "./components/UserAdmin/NewProduct.jsx";
import AdminCategories from "./components/UserAdmin/AdminCategories.jsx";
import AdminCategoryDetail from "./components/UserAdmin/AdminCategoryDetail.jsx";
import NewCategory from "./components/UserAdmin/NewCategory.jsx";
import OrdersPanel from "./components/UserAdmin/OrdersPanel.jsx";
import OrderEdit from "./components/UserAdmin/OrderEdit.jsx";
import Mercado from "./components/Pasarela/index.jsx";
import Shipping from './components/Pasarela/Shipping';
// import EditProduct from "./components/editProduct/EditProduct.jsx";
import Checkout from "./components/payment/Checkout.js";
// import CheckoutForm from "./components/payment/CheckoutForm.jsx";
//styles
import "./App.css";
const KEY_STRIPE=process.env

const stripePromise = loadStripe(`${KEY_STRIPE}`);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/detail/:id" exact component={CardDetails} />        
        <Route exact path="/form" component={Form} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/login" component={FormLogin} />
        <Route exact path="/adminPanel" component={AdminPanel} />
        <Route exact path="/admProdDetail/:id" component={AdminProductDetail} />  
        <Route exact path="/clients" component={GetClients} />   
        <Route exact path="/clientEdit/:id" component={ClientEdit} />    
        <Route exact path="/newProduct" component={NewProduct} />
        <Route exact path="/adminCategories" component={AdminCategories} />
        <Route exact path="/categoryDetail/:id" component={AdminCategoryDetail} />
        <Route exact path="/newCategory" component={NewCategory} />
        <Route exact path="/ordersPanel" component={OrdersPanel} />
        <Route exact path="/orderEdit/:id" component={OrderEdit} />
        <Route exact path="/mercadopago" component={Mercado} />
        <Route exact path="/shipping" component={Shipping} />
        <Route
          path="/payment"
          render={() => (
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          )}
        />
        <Route exact path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
