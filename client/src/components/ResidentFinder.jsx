const ResidentFinder = () => {
  const doSearch = (e) => {
    e.preventDefault();
    console.log("Submited!");
  };
  return (
    <div className="container center">
      <h3>Find resident</h3>
      <form onSubmit={(e) => doSearch(e)}>
        <input type="text" placeholder="Search by name or address" />
        <p></p>
        <button className="btn" type="submit">
          Search
          <i className="material-icons right">search</i>
        </button>
      </form>
    </div>
  );
};

export default ResidentFinder;
