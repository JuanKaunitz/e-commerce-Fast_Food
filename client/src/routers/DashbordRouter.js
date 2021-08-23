import React from "react";
import { Switch, Route} from "react-router-dom";
import AdminCategories from "../components/UserAdmin/AdminCategories";
import AdminCategoryDetail from "../components/UserAdmin/AdminCategoryDetail";
import AdminPanel from "../components/UserAdmin/AdminPanel";
import AdminProductDetail from "../components/UserAdmin/AdminProductDetail";
import ClientEdit from "../components/UserAdmin/ClientEdit";
import GetClients from "../components/UserAdmin/GetClients";
import NewCategory from "../components/UserAdmin/NewCategory";
import NewProduct from "../components/UserAdmin/NewProduct";

const DashbordRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/adminPanel" component={AdminPanel} />
        <Route exact path="/admProdDetail/:id" component={AdminProductDetail} />
        <Route exact path="/clients" component={GetClients} />
        <Route exact path="/clientEdit/:id" component={ClientEdit} />
        <Route exact path="/newProduct" component={NewProduct} />
        <Route exact path="/adminCategories" component={AdminCategories} />
        <Route
          exact
          path="/categoryDetail/:id"
          component={AdminCategoryDetail}
        />
        <Route exact path="/newCategory" component={NewCategory} />
      </Switch>
    </>
  );
};

export default DashbordRouter;
