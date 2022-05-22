import { CSSProperties, useState } from "react";
import Logo from "../images/app-store.png";
import "../style/loader.css";
import AppStoreIcon from "./icon";
type LoaderProps = {
  style: string;
};
export default function Loader({ style }: LoaderProps) {
  const [loadtext, setLoadText] = useState("Loading...");
  setTimeout(() => {
    setLoadText("App ready!");
  }, 1500);
  return (
    <>
      <div className={style}>
        <AppStoreIcon className="icon-logo" />
        <div className="spinner"></div>
        <p className="loader-text">{loadtext}</p>
      </div>
    </>
  );
}
