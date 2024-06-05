import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    organization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("This section doesn't work yet");
  };
  const styles: React.CSSProperties = {
    color: "#00ff00",
    marginTop: "50px",
  };
  return (
    <div>
      <h2 style={styles}>Contact Me</h2>
      <div className="contact-me">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number(optional):</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Your Message:</label>
            <textarea onChange={handleChange} value={formData.organization} />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
