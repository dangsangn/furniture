import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getProfileUser } from "./actions/user";
import ButtonToTop from "./components/ButtonToTop";
import ScrollToTop from "./components/ScrollToTop";
import { adminProductURL, homeURL } from "./constants/baseURL";
import AdminLayout from "./layouts/Admin/AdminLayout";
import UserLayout from "./layouts/User/UserLayout";
import routersAdmin from "./routers/adminRouter";
import routersUser from "./routers/userRouter";
import "./style/styles.scss";
import history from "./untils/history";

function App(props) {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("authentication_token"));
  const user = useSelector((state) => state.user);
  useEffect(() => {
    token && dispatch(getProfileUser(token));
    user?.role !== "admin"
      ? history.push(homeURL)
      : history.push(adminProductURL);
  }, [dispatch, token, user?.role]);

  const showRouterUser = (routers) => {
    return routers.map((router) => {
      return (
        <UserLayout
          key={router.path}
          path={router.path}
          component={router.main}
          exact={router.exact}
        />
      );
    });
  };

  const showRouterAmin = (routers) => {
    return routers.map((router) => {
      return (
        <AdminLayout
          key={router.path}
          path={router.path}
          component={router.main}
          exact={router.exact}
        />
      );
    });
  };

  return (
    <Router history={history}>
      <Switch>
        {showRouterUser(routersUser)}
        {showRouterAmin(routersAdmin)}
      </Switch>
      <ScrollToTop />
      <ToastContainer />
      <ButtonToTop />
    </Router>
  );
}

export default App;
