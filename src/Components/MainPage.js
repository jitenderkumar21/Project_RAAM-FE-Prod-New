import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card, FormControl, FormLabel, TextField } from "@mui/material";
import CardWrapper from "./Card/CardWrapper";
import "./MainPage.css";
import ClassDetail from "./ClassDetail";
import DetailForm from "./DetailForm";
import Coral_Academy from "../assets/Coral_Academy.png";
import About_us from "../assets/About_us.png";
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
            <img src={About_us} alt="About_US" />
            <div>
              <h1> About Us!</h1>
              <p>
                Coral Academy is your partner in K-12 EdTech. We carefully
                select top educators to ensure impactful and engaging learning
                experiences. Explore our platform preview
              </p>
            </div>
          </div>
          <p>
            Coral Academy is a new online service that aims to provide fun,
            exciting, supplemental education to children aged six through
            thirteen. We have knowledgeable and passionate teachers who are
            dedicated to teaching interesting, current material in a fun,
            impactful way.
          </p>
          <a href="https://staging.mycoralacademy.com/">
            Click here to know more about us
          </a>
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
        <div>
          <p> Thanks for submitting!</p>
          <button onClick={homePageHandler}>Add More Learner!</button>
        </div>
      )}
    </CardWrapper>
  );
};

export default MainPage;
