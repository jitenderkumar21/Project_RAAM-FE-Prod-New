import React, { useState } from "react";
import "./DetailForm.css";

const DetailForm = (props) => {
  const storedSelectedForm = localStorage.getItem("selectedform");
  let initial_state = {};
  if (storedSelectedForm) {
    initial_state = JSON.parse(storedSelectedForm);
  } else {
    initial_state = {
      parentName: "",
      childName: "",
      email: "",
      phoneNumber: "",
      childAge: "",
      classDetails: "",
    };
  }
  const [formData, setFormData] = useState(initial_state);

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
    console.log("in the back function")
    localStorage.setItem("selectedform", JSON.stringify(formData));
    props.onBack();
  };

  return (
    <React.Fragment>
      <div className="form_meta"> Add Contact Details!</div>
      <form className="my-form">
        <div className="form-group">
          <label htmlFor="parentName"> Parent Name *</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            required
            value={formData.parentName}
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
            value={formData.email}
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
            value={formData.childName}
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
            value={formData.childAge}
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
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttondisplay">
         
          <button onSubmit={handleSubmit} type="submit">Submit</button>
      </div>
      </form>
      <div className="buttondisplay1">
        <button onClick={backHandler}> Back</button>
      </div>
    </React.Fragment>
  );
};

export default DetailForm;
