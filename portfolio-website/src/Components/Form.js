const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event Default Triggered!");
  };

  return (
    <form onClick={handleSubmit} className="needs-validation" noValidate>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            id="validationTooltip01"
            placeholder="First name"
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            id="validationTooltip02"
            placeholder="Last name"
            required
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
      </div>
      <button
        style={{ marginTop: "10px" }}
        className="btn btn-primary"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
