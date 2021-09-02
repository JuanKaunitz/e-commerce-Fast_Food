import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Cart from "./components/cart/Cart.jsx";
import Home from "./components/Home/Home.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import FormLogin from "./components/login/FormLogin";
import Register from './components/login/FormRegister';
import Categories from "./components/categories/Categories.jsx";
import Form from "./components/Form/Form.jsx";
import NewPassword from "./components/resetpassword/NewPassword.jsx";
import Password from "./components/resetpassword/Password.jsx";
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
import MyAcount from "./components/Navbar/MyAcount.jsx";
import Shipping from './components/Pasarela/Shipping.jsx';
import Option from "./components/Pasarela/Option.jsx";
import Maps from "./components/Pasarela/Maps.jsx";
import Succes from "./components/succesPayment/Succes.jsx";
import Footer from "./components/Footer/Footer";
import "./App.css";



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/cart" component={Cart} />      
        <Route exact path="/form" component={Form} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/reset-password" component={Password} />
        <Route exact path="/reset-password/:token" component={NewPassword} /> 
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
        <Route exact path="/option" component={Option} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/succes" component={Succes} />
    
        
        <Route exact path="/myAcount" component={MyAcount} />
        <Route exact path="/register" component={Register} />
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
