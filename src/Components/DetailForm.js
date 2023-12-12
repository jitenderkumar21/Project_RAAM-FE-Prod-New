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
      knowabout: "",
      additionalInfo: "",
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

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      additionalInfo: "", // Reset additionalInfo when the dropdown changes
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
    console.log("in the back function");
    localStorage.setItem("selectedform", JSON.stringify(formData));
    props.onBack();
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission
    }
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
            min="1"
            required
            value={formData.childAge}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
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

        <div className="form-group">
          <label htmlFor="knowabout">How did you get to know about us ? *</label>
          <div className="check">
            <input
              type="checkbox"
              id="knowabout-facebook"
              name="knowabout"
              value="Facebook"
              checked={formData.knowabout === "Facebook"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="knowabout-facebook">Facebook</label>
          </div>

          <div className="check" > 
            <input
              type="checkbox"
              id="knowabout-friends-family"
              name="knowabout"
              value="Friends and Family"
              checked={formData.knowabout === "Friends and Family"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="knowabout-friends-family">Friends and Family</label>
          </div>

          <div className="check">
            <input
              type="checkbox"
              id="knowabout-teacher"
              name="knowabout"
              value="Referred by Teacher"
              checked={formData.knowabout === "Referred by Teacher"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="knowabout-teacher">Referred by Teacher</label>
          </div>

          <div className="check">
            <input
              type="checkbox"
              id="knowabout-other"
              name="knowabout"
              value="Other"
              checked={formData.knowabout === "Other"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="knowabout-other">Other</label>
          </div>
          
        </div>

        {(formData.knowabout === "Facebook" ||
          formData.knowabout === "Other") && (
          <div className="form-group">
            {formData.knowabout === "Facebook" && (
              <label htmlFor="additionalInfo">
                Which Facebook group referred you to us ?
              </label>
            )}
            {formData.knowabout === "Other" && (
              <label htmlFor="additionalInfo">
                Could you please specify source ?
              </label>
            )}
            <input
              type="text"
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo || ""}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="buttondisplay">
          <button id="submitId" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="buttondisplay1">
        <button onClick={backHandler}> Back</button>
      </div>
    </React.Fragment>
  );
};

export default DetailForm;
