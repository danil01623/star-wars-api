import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import List from "./List";
import Loader from "../Shared/Loader";
import Filter from "../Shared/Filter";
import Search from "../Shared/Search";

import "../styles/Homepage.scss";

const Homepage: React.FC<{}> = () => {
  const isLoading = useSelector((state: any) => state.data.isLoading);

  return (
    <div className="homepage-container">
      <div className="list-options">
        <div className="searching">
          <Search />
        </div>
        <div className="filtering">
          <Filter />
        </div>
      </div>
      <div className="homepage-content">
        {!isLoading && <List />}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default withRouter(Homepage);
