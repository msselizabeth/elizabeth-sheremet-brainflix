import "./Header.scss";

const Header = () => {
  return (
    <header className="header section">
      <div className="layout header__container">
        <img
          src="../../../src/assets/logo/BrainFlix-logo.svg"
          alt="brain flix logo"
          className="header__logo"
        />
        <div className="header__search--container">
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
          <button className="header__button">Upload</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
