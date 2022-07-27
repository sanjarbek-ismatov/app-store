import Logo from "../images/app-store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Fetch } from "../state/redux";
import { useEffect, useState } from "react";

export default function Header() {
  const state: any = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const [spinner, setSpinner] = useState<string>("spinner-app");

  return (
    <>
      <header>
        {/* <div className={spinner}>
          <span></span>
        </div> */}
        <div className="header">
          <div className="logo">
            <img className="logo-icon" src={Logo} alt="logo" />
            <h1>App Store</h1>
          </div>
          <div className="input">
            <div className="icon">
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </div>

            <input
              id="input"
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              // placeholder="Enter your need application..."
              onKeyPress={(e) => {
                if (e.key === "Enter" && text) {
                  document
                    .getElementsByClassName("header")[0]
                    .classList.add("search-header");
                  dispatch<any>(Fetch(text));
                }
              }}
            />
            <label
              style={{ position: "absolute", width: "600px" }}
              htmlFor="input"
            >
              Enter your need application...
            </label>
          </div>
        </div>
      </header>
    </>
  );
}
