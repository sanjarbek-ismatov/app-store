import { useState } from "react";

import Header from "./components/header";
import Loader from "./components/loader";
import { store } from "./state/redux";
import { Provider } from "react-redux";
import Main from "./components/main";
import About from "./components/about";
function App() {
  const [load, setLoad] = useState<string>("loader");
  setTimeout(() => setLoad("not-load"), 2000);

  return (
    <>
      <Loader style={load} />

      {load === "not-load" ? (
        <>
          <Header />
          <Main />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
