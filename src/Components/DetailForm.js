import React, { useState } from "react";
import "./DetailForm.css";

const DetailForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
  });

  const YOUR_GOOGLE_APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyWojQ5eQFyPboi_mkZywNU7mjf8mHs3SmKmE5i4M0UUC49uTgxWaqBadL2cajFiU7cPA/exec";
  const data = { name: "Sumit", email: "sumitku1256@gmail.com", message: "HI" };

  const submitForm = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(YOUR_GOOGLE_APPS_SCRIPT_URL, options);
      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data to Google Sheet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    submitForm(data);
    props.onSubmit();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="my-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default DetailForm;
