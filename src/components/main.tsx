import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export var clicked: number;
function Main() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  return (
    <>
      <main>
        {state &&
          state.loading === false &&
          !state.error.message &&
          state.data.data.datalist.list.map((el: any, id: number) => {
            return (
              <div className="result" key={id}>
                <img
                  src={el.icon}
                  className="app-icon-container"
                  onClick={() => {
                    clicked = id;
                    navigator("/app/" + el.package);
                  }}
                />
                <p className="app-name">{el.name}</p>
                <div className="memory-info">
                  <div className="rating">
                    <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
                    <p>{el.stats.prating.avg}</p>
                  </div>
                  <p>{Math.floor(el.size / 100000) / 10} MB</p>
                </div>
              </div>
            );
          })}
        {state && state.error.message && (
          <>
            <div>
              <button onClick={() => {}}>Refresh</button>
              <p>Sorry. I can't found this app! Have problem:</p>
              <p>{state.error.message}</p>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Main;
