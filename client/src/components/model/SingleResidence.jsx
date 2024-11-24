const SingleResidence = ({ item }) => {
  return (
    <div>
      <div className="card teal accent-4">
        <div className="card-content">
          <span className="card-title">
            {item.street} St., {item.extNumber}
          </span>
        </div>
        <div className="card-action">
          <p>Street: {item.street}</p>
          <p>Exterior number: {item.extNumber}</p>
          <div className="row">
            <div>
              <a href="/add" className="col teal darken-3 btn offset-s6 s3">
                Add resident
              </a>
            </div>
            <div>
              <a href="/add" className="col teal darken-3 btn s3">
                Add pet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleResidence;
