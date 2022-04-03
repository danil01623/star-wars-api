import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoriteActions } from "../store/favorite-slice";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import StarImage from "../assets/images/star.jpeg";
import "../styles/List.scss";

const ListItem: React.FC<{ item: any }> = React.memo((props) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(
    (state: any) => state.data.selectedFilterValue
  );
  const favoriteList = useSelector(
    (state: any) => state.favorites.favoriteList
  );
  const [isFavorited, setFavorited] = useState<boolean>(false);

  const { item } = props;
  const image = StarImage;

  const checkExistingItem = useCallback(() => {
    return favoriteList.find((favorite: any) => favorite.name === item.name);
  }, [favoriteList, item.name]);

  useEffect(() => {
    const existingItem = checkExistingItem();
    if (existingItem) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [checkExistingItem]);

  const addToFavoriteHandler = (event: React.MouseEvent<SVGElement>) => {
    event.preventDefault();
    const existingItem = checkExistingItem();
    if (!existingItem) {
      dispatch(favoriteActions.addItemToFavorite(item));
    } else {
      const name = existingItem?.name ? existingItem.name : existingItem.title;
      dispatch(favoriteActions.removeItemFromFavorite(name));
    }
  };

  const getItemsName = () => {
    return filterValue === "films" ? item.title : item.name;
  };

  return (
    <div className="card">
      <Link to={{ pathname: `homepage/${getItemsName()}`, state: item }}>
        <div
          className="icon"
          style={{ ...(isFavorited ? { color: "red" } : { color: "yellow" }) }}
        >
          <FaHeart onClick={addToFavoriteHandler} />
        </div>
        <div className="card-image">
          <img src={image} alt={item.name} />
        </div>
        <div className="card-content">
          <h3>{item.name ? item.name : item.title}</h3>
          <span>Click for more information</span>
        </div>
      </Link>
    </div>
  );
});

export default ListItem;
