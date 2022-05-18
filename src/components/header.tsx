import Logo from "../images/app-store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h1>App Store</h1>
          </div>
          <div className="input">
            <div className="icon">
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </div>
            <input type="text" />
          </div>
        </div>
      </header>
    </>
  );
}
