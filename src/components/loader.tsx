import { CSSProperties, useState } from "react";
import Logo from "../images/app-store.png";
import "../style/loader.css";
import { AppStoreIcon } from "./icon";
type LoaderProps = {
  style: string;
};
export default function Loader({ style }: LoaderProps) {
  return (
    <>
      <div className={style}>
        <AppStoreIcon className="icon-logo" />
        <div className="spinner"></div>
        <p className="loader-text">Loading...</p>
      </div>
    </>
  );
}
