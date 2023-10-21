import React, { useState } from "react";
import "./DetailForm.css";

const DetailForm = (props) => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phoneNumber: "",
    childAge: "",
    classDetails:"",
  });

  const YOUR_GOOGLE_APPS_SCRIPT_URL = "https://backend-z29v.onrender.com/save/";
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
    const new_data = {...formData, "classDetails" : props.timedata}
    console.log(new_data)
    submitForm(new_data);
    props.onSubmit();
  };



  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="my-form">
        <div className="form-group">
          <label htmlFor="parentName"> Parent Name *</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="childName"> Child Name *</label>
          <input
            type="text"
            id="childName"
            name="childName"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="childAge"> Child Age *</label>
          <input
            type="number"
            id="childAge"
            name="childAge"
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default DetailForm;
