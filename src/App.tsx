import { useState } from "react";
import { useGetAppFromKeywordMutation } from "./store/rtk/api/storeapi";
import type { List } from "./types";
import Header from "./components/Header";
import Lazyimage from "./components/LazyImage";
import Modal from "./components/Modal/modal";
function App() {
  const [display, setDisplay] = useState<"block" | "none">("none");
  const [content, setContent] = useState<List>();
  const [getApp, { isLoading, isError, error, isSuccess, data }] =
    useGetAppFromKeywordMutation();
  return (
    <>
      <main>
        <Modal setDisplay={setDisplay} display={display} content={content} />
        <Header getApp={getApp} />
        <div className="container-fluid d-flex flex-wrap justify-content-center">
          {isLoading && (
            <div
              style={{ height: "100px", width: "100px" }}
              className="spinner-border text-primary"
            ></div>
          )}
          {isSuccess &&
            data &&
            data.datalist.list.map((el, id: number) => {
              return (
                <div
                  style={{ width: "250px" }}
                  className="card p-2 mx-2 my-4"
                  key={id}
                >
                  <Lazyimage icon={el.icon} />
                  <div className="card-body">
                    <p className="card-title">{el.name}</p>
                    <div className="d-flex my-2 justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          style={{ height: "15px" }}
                          src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg"
                        />
                        <p className="card-text">{el.stats.prating.avg}</p>
                      </div>
                      <p className="m-0">
                        {Math.floor(el.size / 100000) / 10} MB
                      </p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      onClick={() => {
                        setDisplay("block");
                        setContent(el);
                      }}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}

          {isError && error && "data" in error && (
            <>
              <div>
                <button onClick={() => {}}>Refresh</button>
                <p>Sorry. I can't found this! Have problem:</p>
                <p>
                  {"data" in error &&
                    typeof error.data === "string" &&
                    error.data.toString()}
                </p>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
