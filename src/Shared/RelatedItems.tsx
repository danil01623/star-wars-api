import { useEffect, useState } from "react";
import Loader from "./Loader";
import "../styles/Shared.scss";

const ReleatedItems: React.FC<{ title: string; data: any }> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [items, setItems] = useState<any[]>([]);
  const { title, data } = props;
  const errorMessage = "Could not fetch all data, please try again!";

  useEffect(() => {
    let shouldUpdate = true;
    const fetchAdditionalData = async () => {
      if (data?.length) {
        let promises: any[] = [];

        //data items are urls
        // so adding all url to an array and execute Promise.all
        data.forEach((item: string) => {
          const fetchReq = fetch(item).then((res) => res.json());
          promises.push(fetchReq);
        });

        await Promise.all(promises)
          .then((res) => {
            if (shouldUpdate) {
              setItems(res);
              setIsLoading(false);
            }
          })
          .catch((error) => setErrorMsg(true));
      } else {
        setIsLoading(false);
      }
    };
    fetchAdditionalData();

    //Cleanup to avoid memory leaks
    return () => {
      shouldUpdate = false;
    };
  }, [data]);

  return (
    <div className="box-container">
      <div className="box-header">
        <h4>Related {title}</h4>
      </div>
      <div className="box-content">
        {isLoading && !errorMsg ? (
          <>
            <Loader />
            <p>is Loading ...</p>
          </>
        ) : (
          <ul>
            {items.map((item: any) => {
              const name = item.name ? item.name : item.title;
              return <li key={name}>{name}</li>;
            })}
          </ul>
        )}
        {errorMsg && <p style={{ color: "red" }}>{errorMessage}</p>}
        {!data?.length && <p>No data available for this category</p>}
      </div>
    </div>
  );
};

export default ReleatedItems;
