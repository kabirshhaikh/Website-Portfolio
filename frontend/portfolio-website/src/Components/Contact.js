import "./Contact.css";
import contact from "../Image/contact.png";
import Form from "./Form";
import { useEffect, useRef } from "react";

const Contact = () => {
  const imageRef = useRef(null);
  const formRef = useRef(null);

  return (
    <div className="contact-container">
      <div className="image-and-form-container">
        <div ref={imageRef} className="image-container">
          <img src={contact} />
        </div>
        <div ref={formRef} className="form-container">
          <div className="form-text">
            <span>
              You can use the form below to get in touch with me Please provide
              your first name, last name, and email address so that I can
              respond promptly. Looking forward to connecting with you!
            </span>
          </div>
          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
