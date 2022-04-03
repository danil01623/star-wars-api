import React, { Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import DataSelector from "../Views/DataSelector";
// import Homepage from "../Views/Homepage";
import Loader from "../Shared/Loader";
import FavoriteList from "../Views/FavoriteList";
import ItemPage from "../Views/ItemPage";

// Lazy loading the homepage path and use Suspense to create a fallback UI
const Homepage = React.lazy(() => import("../Views/Homepage"));

const Root = () => {
  return (
    <div id="main-wrapper">
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => <DataSelector {...history} />}
          />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/favorites" component={FavoriteList} />
          <Route path="/homepage/:dataName" component={ItemPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(Root);
