import { Fragment, use } from "react";
import { Outlet, useLocation } from "react-router";
import "./App.css";
import Loader from "./components/Loader";
import { AppContext } from "./context/appContext";
import Navigation from "./components/Navigation";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  const { loading } = use(AppContext);
  const location = useLocation();

  return (
    <Fragment>
      <Navigation />
      {!loading && location.pathname !== "/" && <Breadcrumbs />}
      <Outlet />
      {loading && <Loader />}
    </Fragment>
  );
}

export default App;
