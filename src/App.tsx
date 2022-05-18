import { useState } from "react";
import logo from "./logo.svg";
import Header from "./components/header";
import Loader from "./components/loader";
function App() {
  const [load, setLoad] = useState<string>("loader");
  setTimeout(() => {
    setLoad("not-load");
  }, 4000);
  return (
    <>
      <Loader style={load} />
      {load === "not-load" ? <Header /> : ""}
    </>
  );
}

export default App;
