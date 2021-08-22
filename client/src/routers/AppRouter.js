import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DashbordRouter from "./DashbordRouter";
import PrivateRouter from "./PrivateRouter";
import ViewScreen from "./ViewScreen";

function AppRouter() {
    const {role} = useSelector(state => state.client);
  return (
    <Router>
      <Navbar />
      <Switch>
        <PublicRouter
          path="/"
          component={ViewScreen}
          isAuthenticated={role='CLIENT'}
        />
     <PrivateRouter
         path="/"
         component={DashbordRouter}
         isAuthenticated={role='ADMIN'} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
