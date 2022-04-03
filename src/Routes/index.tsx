import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import DataSelector from "../Views/DataSelector";
import Homepage from "../Views/Homepage";
import FavoriteList from "../Views/FavoriteList";
import ItemPage from "../Views/ItemPage";
// Lazy loading the products path and use Suspense to create a fallback UI
// const Products = React.lazy(() => import('../Components/Products/Products'))

// const override = css`
//   display: block;
//   margin: 30% auto;
//   border-color: red;
// `;

const Root = () => {
  return (
    <div id="main-wrapper">
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
    </div>
    //   <Suspense
    //     fallback={
    //       <div className="sweet-loading">
    //         <DotLoader css={override} size={80} color="#1d2127" />
    //       </div>
    //     }
    //   >
    // <Switch>
    //   <Route exact path="/" render={({ history }) => <Login history={history} />} />
    //   <Redirect to="/" />
    // </Switch>
    //   </Suspense>
    // </div>
  );
};

export default withRouter(Root);
