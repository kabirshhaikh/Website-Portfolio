import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        alert("Something went wrong");
      } else {
        alert("Email sent sucessfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    console.log(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
    console.log(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            id="validationTooltip01"
            placeholder="First name"
            required
            onChange={handleFirstName}
            value={firstName}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            id="validationTooltip02"
            placeholder="Last name"
            onChange={handleLastName}
            value={lastName}
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
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div class="form-group" style={{ maxWidth: "315px" }}>
          <textarea
            placeholder="Message"
            class="form-control"
            id="exampleFormControlTextarea1"
            onChange={handleMessage}
            value={message}
            rows="3"
          ></textarea>
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
