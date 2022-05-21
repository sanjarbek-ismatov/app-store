import { useState } from "react";
import logo from "./logo.svg";
import Header from "./components/header";
import Loader from "./components/loader";
import { store } from "./state/redux";
import { Provider } from "react-redux";
import Main from "./components/main";
function App() {
  const [load, setLoad] = useState<string>("loader");
  setTimeout(() => {
    setLoad("not-load");
  }, 4000);
  return (
    <>
      <Provider store={store}>
        <Loader style={load} />
        {load === "not-load" ? (
          <>
            <Header />
            <Main />
          </>
        ) : (
          ""
        )}
      </Provider>
    </>
  );
}

export default App;
