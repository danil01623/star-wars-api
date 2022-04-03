import { useSelector } from "react-redux";

const ItemInfo: React.FC<{ item: any }> = (props) => {
  const type = useSelector((state: any) => state.data.selectedFilterValue);
  const { item } = props;

  const GetInfoByType = () => {
    if (type === "people") {
      return (
        <ul>
          <li>Birth year: {item.birth_year}</li>
          <li>Eye color: {item.eye_color}</li>
          <li>Hair color: {item.hair_color}</li>
          <li>Skin color: {item.skin_color}</li>
          <li>height: {item.height}</li>
        </ul>
      );
    } else if (type === "films") {
      return (
        <ul>
          <li>Director: {item.director}</li>
          <li>Producer: {item.producer}</li>
          <li>Release date: {item.release_date}</li>
          <li>Opening Crawl: {item.opening_crawl}</li>
        </ul>
      );
    } else if (type === "species") {
      return (
        <ul>
          <li>Classification: {item.classification}</li>
          <li>Average lifespan: {item.average_lifespan}</li>
          <li>Designation: {item.designation}</li>
        </ul>
      );
    } else if (type === "starships") {
      return (
        <ul>
          <li>Starship class: {item.starship_class}</li>
          <li>Model: {item.model}</li>
          <li>Manufacturer: {item.manufacturer}</li>
          <li>Speed: {item.max_atmosphering_speed}</li>
          <li>Crew: {item.crew}</li>
        </ul>
      );
    }
    return <h2>No data available</h2>;
  };

  return (
    <div className="information">
      <GetInfoByType />
    </div>
  );
};

export default ItemInfo;
