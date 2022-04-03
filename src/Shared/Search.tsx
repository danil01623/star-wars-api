import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataBySearch } from "../store/actions/data-actions";
import { dataActions } from "../store/data-slice";
import debounce from "lodash.debounce";
import "../styles/Shared.scss";

const Search = () => {
  const dispatch = useDispatch();
  const selectedValue = useSelector(
    (state: any) => state.data.selectedFilterValue
  );

  const debouncedResults = useMemo(() => {
    const searchHandler = (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      if (event.target.value.length > 2) {
        dispatch(getDataBySearch(event.target.value, selectedValue));
      } else {
        const localData: [] = JSON.parse(localStorage.getItem("listData")!);
        dispatch(dataActions.listData(localData));
      }
    };
    return debounce(searchHandler, 300);
  }, [dispatch, selectedValue]);

  return (
    <div className="search">
      <label>Search data</label>
      <input
        data-testid="input"
        type="text"
        placeholder="Search any...."
        onChange={debouncedResults}
      />
    </div>
  );
};

export default Search;
