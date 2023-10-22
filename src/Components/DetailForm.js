import React, { useState } from "react";
import "./DetailForm.css";

const DetailForm = (props) => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phoneNumber: "",
    childAge: "",
    classDetails: "",
  });

  const YOUR_GOOGLE_APPS_SCRIPT_URL = "https://backend-z29v.onrender.com/save/";

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
    const new_data = { ...formData, classDetails: props.timedata };
    console.log(new_data);
    submitForm(new_data);
    props.onSubmit();
    localStorage.clear();
  };

  const backHandler = () => {
    props.onBack();
  };

  return (
    <React.Fragment>
      <div className="form_meta"> Add Contact Details!</div>
      <form onSubmit={handleSubmit} className="my-form">
        <div className="form-group">
          <label htmlFor="parentName"> Parent Name *</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="childName"> Learner's Name *</label>
          <input
            type="text"
            id="childName"
            name="childName"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="childAge"> Learner's Age *</label>
          <input
            type="number"
            id="childAge"
            name="childAge"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Optional"
            onChange={handleInputChange}
          />
        </div>
        <div className="buttondisplay">
          <button onClick={backHandler}> Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default DetailForm;
