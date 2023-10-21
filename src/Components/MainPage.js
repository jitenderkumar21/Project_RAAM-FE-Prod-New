import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card, FormControl, FormLabel, TextField } from "@mui/material";
import CardWrapper from "./Card/CardWrapper";
import "./MainPage.css";
import ClassDetail from "./ClassDetail";
import DetailForm from "./DetailForm";

const MainPage = () => {
  const [register, setRegister] = useState(false);
  const [timedata, setTimedata] = useState({})
  const registerHandler = () => {
    setRegister(true);
  };
  const submitHandler = () => {
    setRegister(false);
  };

  const sendDataHandler = (data) =>{
    console.log(data)
    // setTimedata(data)
  }
  return (
    <CardWrapper>
      <h1> Coral Academy </h1>
      <h4> Demo Classes</h4>

      {!register && (
        <div className="card1">
          <p>
            Coral Academy is your partner in K-12 EdTech. We carefully select
            top educators to ensure impactful and engaging learning experiences.
            Explore our platform preview
          </p>
          <h4> About Us!</h4>
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
      {register && <DetailForm onSubmit={submitHandler} timedata = {timedata}/>}
    </CardWrapper>
  );
};

export default MainPage;
