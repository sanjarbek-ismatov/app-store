import { useSelector, useDispatch } from "react-redux";
function Main() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <main>
        {state &&
          state.loading === false &&
          !state.error.message &&
          state.data.data.datalist.list.map((el: any, id: number) => {
            return (
              <div className="result" key={id}>
                <img src={el.icon} className="app-icon" />
                <p>{el.name}</p>
              </div>
            );
          })}
        {state && state.error.message && (
          <>
            <p>Sorry I can't found this app</p>
            <p>{state.error.message}</p>
          </>
        )}
      </main>
    </>
  );
}

export default Main;
