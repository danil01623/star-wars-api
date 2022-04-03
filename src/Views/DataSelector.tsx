import { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchData } from "../store/actions/data-actions";
import Dropdown from "../Shared/Dropdown";
import Button from "../Shared/Button";
import "../styles/DataSelector.scss";
const DATA = ["people", "films", "species", "starships"];

const DataSelector: React.FC<{ history: any }> = (props) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState<string>("people");
  const { history } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedValue(event.target.value);
  };

  const proceedHandler = () => {
    dispatch(fetchData(selectedValue));
    history.push("/homepage");
  };

  return (
    <div className="data-selector">
      <Dropdown
        label="Select data"
        options={DATA}
        value={selectedValue}
        onChange={handleChange}
      />
      <div className="proceed-button">
        <Button text="Proceed" onClick={proceedHandler} />
      </div>
    </div>
  );
};

export default withRouter(DataSelector);
