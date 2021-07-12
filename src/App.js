import { Router, Switch } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import routersUser from "./routers/userRouter";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import history from "./untils/history";
import "./style/styles.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfileUser } from "./actions/user";
import ButtonToTop from "./components/ButtonToTop";

function App(props) {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("authentication_token"));

  useEffect(() => {
    token && dispatch(getProfileUser(token));
  }, [dispatch, token]);

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
    <Router history={history}>
      <Switch>{showRouterUser(routersUser)}</Switch>
      <ScrollToTop />
      <ToastContainer />
      <ButtonToTop />
    </Router>
  );
}

export default App;
