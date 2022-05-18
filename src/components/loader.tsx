import { CSSProperties, useState } from "react";
import Logo from "../images/app-store.png";
import "../style/loader.css";
type LoaderProps = {
  style: string;
};
export default function Loader({ style }: LoaderProps) {
  const [load, setLoad] = useState("Loading...");
  setTimeout(() => {
    setLoad("App ready!");
  }, 2500);
  return (
    <>
      <div className={style}>
        <img src={Logo} alt="logo" />
        <div className="spinner"></div>
        <p className="loader-text">{load}</p>
      </div>
    </>
  );
}
