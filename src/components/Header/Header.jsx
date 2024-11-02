import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header section">
      <div className="layout header__container">
        <Link to={`/`}>
          <img
            src="../../../src/assets/logo/BrainFlix-logo.svg"
            alt="brain flix logo"
            className="header__logo"
          />
        </Link>
        <div className="header__search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="header__search"
          />
          <img
            src="../../../src/assets/images/Mohan-muruge.jpg"
            alt="avatar image"
            className="header__avatar"
          />
          <Link to={"/upload"} className="header__button">Upload</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
