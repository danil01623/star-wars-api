import { dataActions } from "../data-slice";

export const fetchData = (type: string) => {
  return async (dispatch: any) => {
    const fetchAllData = async () => {
      dispatch(dataActions.isLoading());
      const url = `https://swapi.dev/api/${type}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = await response.json();
      return data.results;
    };

    try {
      const getData = await fetchAllData();
      dispatch(dataActions.listData(getData));
      dispatch(dataActions.changeFilterValue(type));
      dispatch(dataActions.isLoading());
      localStorage.setItem("listData", JSON.stringify(getData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDataBySearch = (searchText: string, type: string) => {
  return async (dispatch: any) => {
    const getSearchData = async () => {
      dispatch(dataActions.isLoading());
      const url = `https://swapi.dev/api/${type}/?search=${searchText}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = await response.json();
      return data.results;
    };

    try {
      const searchData = await getSearchData();
      dispatch(dataActions.listData(searchData));
      dispatch(dataActions.isLoading());
    } catch (error) {
      console.log(error);
    }
  };
};
