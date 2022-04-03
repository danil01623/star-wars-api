import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ListItem from "./ListItem";
import Button from "../Shared/Button";
import "../styles/List.scss";

const FavoriteList = () => {
  const items = useSelector((state: any) => state.favorites.favoriteList);
  const history = useHistory();

  const backHandler = () => {
    history.goBack();
  };

  return (
    <div className="favorite-list">
      <div className="back-button">
        <Button text="Go back" onClick={backHandler} />
      </div>
      {items?.length ? (
        <div className="list-item-container">
          {items.map((item: any) => {
            const name = item.name ? item.name : item.title;
            return <ListItem key={name} item={item} />;
          })}
        </div>
      ) : (
        <>
          <h2>No favorites added</h2>
        </>
      )}
    </div>
  );
};

export default FavoriteList;
