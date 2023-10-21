import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card, FormControl, FormLabel, TextField } from "@mui/material";
import CardWrapper from "./Card/CardWrapper";
import "./MainPage.css";
import ClassDetail from "./ClassDetail";
import DetailForm from "./DetailForm";
import Coral_Academy from "../assets/Coral_Academy.png";
import About_us from "../assets/About_us.png";
import Demo from "../assets/Demo.png";
const MainPage = () => {
  const [register, setRegister] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timedata, setTimedata] = useState({});

  const registerHandler = () => {
    setRegister(true);
  };
  const submitHandler = () => {
    setRegister(false);
    setSubmitted(true);
  };

  const sendDataHandler = (data) => {
    console.log(data);
    setTimedata(data);
  };

  const backPageHandler = () => {
    setRegister(false);
  };

  const homePageHandler = () => {
    setSubmitted(false);
  };

  return (
    <CardWrapper>
      {/* <h1> Coral Academy </h1>
      <h4> Demo Classes</h4> */}
      <img className="title" src={Coral_Academy} alt="Title" />

      {!register && !submitted && (
        <div className="card1">
          <div className="about">
            <div className="about_img">
              <img src={About_us} alt="About_US" />
            </div>
            <div className="about_content">
              <h1> About Us!</h1>
              <p className="p1">
                Coral Academy is your partner in K-12 EdTech. We carefully
                select top educators to ensure impactful and engaging learning
                experiences. Explore our platform preview{" "}
                <a href="https://staging.mycoralacademy.com/">here</a>
              </p>
            </div>
          </div>
          <div className="about">
            <div className="demo_content">
              <h1> Demo Classes</h1>
              <p className="p1">
                We're offering free, fun, and engaging demo classes with amazing
                teachers from various backgrounds. They'll be teaching a variety
                of interesting topics for the next two months.
              </p>
            </div>
            <div className="about_img">
              <img src={Demo} alt="Demo Classes" />
            </div>
          </div>
          <div>
            <ClassDetail onSendData={sendDataHandler} />
          </div>
          <p></p>

          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={registerHandler}
          >
            Register Here
          </Button>
        </div>
      )}
      {register && !submitted && (
        <DetailForm
          onSubmit={submitHandler}
          onBack={backPageHandler}
          timedata={timedata}
        />
      )}
      {!register && submitted && (
        <div className="submitpage">
          <p>
            {" "}
            Thanks for <br></br>submitting!
          </p>
          <button onClick={homePageHandler}>Add More Learner!</button>
        </div>
      )}
    </CardWrapper>
  );
};

export default MainPage;
