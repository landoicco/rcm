import Landing from "./components/Landing";

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center teal lighten-2">
          <a href="/" className="brand-logo">
            Resident's Booklist App
          </a>
        </div>
      </nav>
      <div className="row">
        <Landing />
      </div>
    </div>
  );
}

export default App;
