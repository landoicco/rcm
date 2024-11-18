const SingleResident = ({ item }) => {
  return (
    <div>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {item.firstName} {item.lastName}
          </span>
        </div>
        <div className="card-action">
          <blockquote>{item.address}</blockquote>
          <p>Phone number: {item.phoneNumber}</p>
          <p>Email: {item.email}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleResident;
