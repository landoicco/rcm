import Residents from "./components/Residents";

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">
            Resident's Booklist
          </a>
        </div>
      </nav>
      <div className="row">
        <Residents />
      </div>
    </div>
  );
}

export default App;
