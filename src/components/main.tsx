import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export var clicked: number;
function Main() {
  const state: any = useSelector((state) => state);
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
                  className="app-icon"
                  onClick={() => {
                    clicked = id;
                    navigator("/app");
                  }}
                />
                <p>{el.name}</p>
                <a href={el.file.path} target="_blank">
                  Download
                </a>
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
