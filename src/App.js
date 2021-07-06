import "./style/styles.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import routersUser from "./routers/userRouter";

function App(props) {
  const showRouterUser = (routers) => {
    let result = null;
    if (routers.length > 0) {
      result = routers.map((router) => {
        return (
          <UserLayout
            key={router.path}
            path={router.path}
            component={router.main}
            exact={router.exact}
          />
        );
      });
    }
    return result;
  };

  return (
    <Router>
      <Switch>{showRouterUser(routersUser)}</Switch>
    </Router>
  );
}

export default App;
