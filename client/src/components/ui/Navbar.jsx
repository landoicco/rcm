const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper cyan darken-3">
        <a href="/" className="brand-logo center">
          RCM
        </a>
        <ul className="left hide-on-med-and-down">
          <li>
            <a href="/residences">Show Residences</a>
          </li>
          <li>
            <a href="/residents">Show Residents</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <a href="/add">
              <i className="material-icons">person_add</i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="material-icons">pets</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
