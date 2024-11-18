import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <Landing />
      </div>
    </div>
  );
}

export default App;
