import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import StarImage from "../assets/images/star.jpeg";
import ItemInfo from "../Shared/ItemInfo";
import ReleatedItems from "../Shared/RelatedItems";
import "../styles/ItemPage.scss";

const ItemPage = () => {
  const filterValue = useSelector(
    (state: any) => state.data.selectedFilterValue
  );
  const location = useLocation();

  const [item, setItem] = useState<any>(location?.state || {});

  const image = StarImage;

  return (
    <div className="page-container">
      <div className="item-container">
        <div className="item-img">
          <img src={image} alt={item.name} />
        </div>
        <div className="item-info">
          <h2>{item.name ? item.name : item.title}</h2>
          <ItemInfo item={item} />
        </div>
      </div>
      <div className="additional-info">
        {filterValue === "people" && (
          <>
            <ReleatedItems title="films" data={item.films} />
            <ReleatedItems title="starships" data={item.starships} />
          </>
        )}
        {filterValue === "species" && (
          <>
            <ReleatedItems title="films" data={item.films} />
            <ReleatedItems title="people" data={item.people} />
          </>
        )}
        {filterValue === "films" && (
          <>
            <ReleatedItems title="characters" data={item.characters} />
            <ReleatedItems title="species" data={item.species} />
          </>
        )}
        {filterValue === "starships" && (
          <>
            <ReleatedItems title="films" data={item.films} />
          </>
        )}
      </div>
    </div>
  );
};

export default ItemPage;
