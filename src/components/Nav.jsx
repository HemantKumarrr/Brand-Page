const Nav = () => {
  return (
    <>
      <div className="main">
        <div className="navbar">
          <img src="./images/brand_logo.png" alt="brand-logo" className="logo" />
          <ul className="nav-items">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
