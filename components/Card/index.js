const Card = ({ field }) => {
  return (
    <div className="card">
    <div className="card-header" id={`heading${field.id}`}>
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse"   data-target={`#${field.id}`}>
        {field.name}
        </button>
      </h2>
    </div>

    <div id={field.id} className="collapse show" data-parent="#courseAccordion">
      <div className="card-body">
      <ul>
            {field.seasons.map((season, idx) => {
              return <li key={idx}>{season}</li>;
            })}
          </ul>
      </div>
    </div>
  </div>
  );
};

export default Card;






