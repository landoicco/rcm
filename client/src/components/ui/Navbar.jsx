const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper cyan darken-3">
        <a href="/" className="brand-logo center">
          RCM
        </a>
        <ul className="left hide-on-med-and-down">
          <li>
            <a href="/add">Add Resident</a>
          </li>
          <li>
            <a href="/residents">Show Residents</a>
          </li>
          <li>
            <a href="/">Find Resident</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
