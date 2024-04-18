import React, { useState } from "react";
import "./DetailForm.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
      commPref: [],
      comments: "",
      platform: "",
      enrichment: "",
    };
  }
  const [formData, setFormData] = useState(initial_state);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const YOUR_GOOGLE_APPS_SCRIPT_URL = `${process.env.REACT_APP_BACKENDURL}save/?timezone=${timezone}`;
  const info_source = ["Facebook", "Other", "Referred by Teacher"];

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

  const fetchFormData = async (email) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKENDURL}parent/info?email=${email}`
      );
      const jsonData = await response.json();
      if ("email" in jsonData) {
        setFormData(jsonData);
      }
    } catch (err) {
      console.log("Error");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const countryCodeHandler = (code) => {
    setFormData({
      ...formData,
      phoneNumber: code,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      additionalInfo: "",
    });
  };

  const handlePrefChange = (event) => {
    const prefValue = event.target.value;
    const isAlreadySelected = formData.commPref.includes(prefValue);
    if (isAlreadySelected) {
      setFormData((prevState) => ({
        ...prevState,
        commPref: formData.commPref.filter((pref) => pref !== prefValue),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        commPref: [...prevState.commPref, prefValue],
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (!formData.knowabout || !formData.commPref?.length) {
        alert("Please fill out mandatory fields");
        return;
      }
      if (
        (formData.commPref?.includes("Text") ||
          formData.commPref?.includes("WhatsApp")) &&
        (!formData.phoneNumber || formData.phoneNumber.length < 7)
      ) {
        alert("Please Enter Phone Number");
        return;
      }
      if (
        formData.knowabout !== "Friends and Family" &&
        !formData.additionalInfo
      ) {
        alert("Please fill out mandatory fields");
        return;
      }

      const new_data = {
        ...formData,
        classDetails: props.timedata,
        want_another_slot: props.anotherSlot,
      };

      submitForm(new_data);
      props.onSubmit();
      localStorage.clear();
    } catch (error) {
      localStorage.clear();
    }
  };

  console.log(formData);

  const backHandler = () => {
    console.log("in the back function");
    localStorage.setItem("selectedform", JSON.stringify(formData));
    props.onBack();
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const autofillHandler = (event) => {
    console.log(event.target.value, "email");
    fetchFormData(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="form_meta"> Add Contact Details!</div>
      <form onSubmit={handleSubmit} className="my-form">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            onBlur={autofillHandler}
          />
        </div>
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
          <label htmlFor="commPref">Communication Preferences ? *</label>
          <div className="check">
            <input
              type="checkbox"
              id="commPref-email"
              name="commPref"
              value="Email"
              checked={formData.commPref?.includes("Email")}
              onChange={handlePrefChange}
            />
            <label htmlFor="commPref-email">Email</label>
          </div>
          <div className="check">
            <input
              type="checkbox"
              id="commPref-text"
              name="commPref"
              value="Text"
              checked={formData.commPref?.includes("Text")}
              onChange={handlePrefChange}
            />
            <label htmlFor="commPref-text">Text</label>
          </div>
        </div>

        {(formData.commPref?.includes("Text") ||
          formData.commPref?.includes("WhatsApp")) && (
          <>
            <div style={{ display: "flex" }}>
              <label htmlFor="phoneNumber">Phone * </label>
              <label htmlFor="phoneNumber" style={{ fontSize: "12px" }}>
                will be used to send important alerts
              </label>
            </div>
            <PhoneInput
              className="contact"
              country={"us"}
              required
              value={formData.phoneNumber}
              onChange={countryCodeHandler}
            />
          </>
        )}

        <div className="form-group">
          <label htmlFor="enrichment">
            How much are you willing to spend on enrichment per child ? *
          </label>
          <input
            type="number"
            id="enrichment"
            name="enrichment"
            min="1"
            required
            value={formData.enrichment}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
          />
        </div>

        <div className="form-group">
          <label htmlFor="platform">
            Which platform do you currently use ?
          </label>
          <input
            type="text"
            id="platform"
            name="platform"
            value={formData.platform}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
          />
        </div>

        <div className="form-group">
          <label htmlFor="knowabout">
            How did you get to know about us ? *
          </label>
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

          <div className="check">
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

        {info_source.includes(formData.knowabout) && (
          <div className="form-group">
            {formData.knowabout === "Facebook" && (
              <label htmlFor="additionalInfo">
                Which Facebook group referred you to us ? *
              </label>
            )}
            {formData.knowabout === "Other" && (
              <label htmlFor="additionalInfo">
                Could you please specify source ? *
              </label>
            )}
            {formData.knowabout === "Referred by Teacher" && (
              <label htmlFor="additionalInfo">
                Could you please specify referral code ? *
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
        <div className="form-group">
          <label htmlFor="comments"> Drop us your questions or comments!</label>
          <input
            type="text"
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>

        <div className="buttondisplay">
          <button id="submitId" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="buttondisplay1">
        <button id="backbutton" onClick={backHandler}>
          Back
        </button>
      </div>
    </React.Fragment>
  );
};

export default DetailForm;
