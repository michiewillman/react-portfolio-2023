import React, { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [throwErr, setThrowErr] = useState("");

  // Destructure form input values
  const { name, email, message } = formState;

  // Function to change value of inputs
  const handleInputChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setThrowErr("Invalid email address");
      } else {
        setThrowErr("");
      }
    } else {
      if (!event.target.value.length) {
        setThrowErr(`${event.target.name} is required`);
      } else {
        setThrowErr("");
      }
    }
    if (!throwErr) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  return (
    <section>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            // Handle state for value change
            onBlur={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            // Handle state for value change
            onBlur={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleInputChange}
          />
        </div>
        {throwErr && (
          <div>
            <p className="error-text">{throwErr}</p>
          </div>
        )}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
