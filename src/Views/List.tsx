import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import "../styles/List.scss";

const List = () => {
  const items = useSelector((state: any) => state.data.listData);

  return (
    <div className="list">
      {items?.length ? (
        <div className="list-item-container">
          {items.map((item: any) => (
            <ListItem key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <h2>No data available</h2>
      )}
    </div>
  );
};

export default List;
