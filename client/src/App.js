import Landing from "./components/ui/Landing";
import Navbar from "./components/ui/Navbar";

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
