import Logo from "../../images/app-store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Header({ getApp }: { getApp: any }) {
  const [text, setText] = useState<string>("");
  return (
    <>
      <header>
        <div className="container py-5 text-center">
          <div className="d-flex mb-5">
            <img
              style={{ height: "70px" }}
              className=""
              src={Logo}
              alt="logo"
            />
            <h3 className="mx-3 my-4">App Store</h3>
          </div>

          <div className="form-floating w-100 mx-auto d-flex align-items-center">
            <input
              className="form-control"
              id="input"
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              required
              placeholder="Enter your need application..."
              onKeyPress={(e) => {
                if (e.key === "Enter" && text) {
                  getApp(text);
                }
              }}
            />
            <label htmlFor="input">
              <FontAwesomeIcon className="search-icon" icon={faSearch} /> Enter
              your need application...
            </label>
          </div>
        </div>
      </header>
    </>
  );
}
