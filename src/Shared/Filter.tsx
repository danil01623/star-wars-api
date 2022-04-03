import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { dataActions } from "../store/data-slice";
import { fetchData } from "../store/actions/data-actions";
import "../styles/Shared.scss";

const DATA = ["people", "films", "species", "starships"];

const Filter = () => {
  const dispatch = useDispatch();
  const selectedValue = useSelector(
    (state: any) => state.data.selectedFilterValue
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(dataActions.changeFilterValue(event.target.value));
    dispatch(fetchData(event.target.value));
  };

  return (
    <div className="filter">
      <Dropdown
        label="Select data"
        options={DATA}
        value={selectedValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
