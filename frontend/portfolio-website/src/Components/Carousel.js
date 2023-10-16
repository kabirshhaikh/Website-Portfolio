import React, { useState } from "react";
import "./Carousel.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Carousel = (props) => {
  const dataFromProps = props?.data?.experienceFromDatabase;
  const [currentIndex, setCurrentIndex] = useState(0);
  const backButton = "<";
  const forwardButton = ">";
  const handleBackward = () => {
    if (currentIndex === 0) {
      setCurrentIndex(dataFromProps.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleForward = () => {
    if (currentIndex === dataFromProps.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="carousel-container">
      <div className="back-button-container">
        <Button variant="contained" onClick={handleBackward}>
          {backButton}
        </Button>
      </div>
      {dataFromProps &&
        dataFromProps.map((item, index) => {
          return (
            <div
              style={{ border: "2px solid black" }}
              key={item._id}
              className={`card-container ${
                index === currentIndex ? "active" : ""
              }`}
            >
              {console.log(item.image.data, +"Image data in the carousel")}
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  sx={{ height: 200, width: "100%" }}
                  component="img"
                  src={`data:${item.image.contentType};base64,${item.image.data}`}
                  alt="city image"
                  style={{ borderBottom: "3px solid black" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <span id="jobName">{item.jobName}</span>
                  </Typography>
                  <Typography variant="subtitle1">
                    <b id="jobPosition">{item.jobPosition}</b>
                  </Typography>
                  <Typography variant="subtitle1">
                    <span id="jobDuration">
                      {item.jobDuration}, {item.jobPlace}
                    </span>
                  </Typography>
                  <ul>
                    {item.jobResponsibility.map((responsibility, index) => (
                      <li
                        style={{
                          marginTop: "10px",
                        }}
                        key={index}
                        id="jobResponsibility"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          );
        })}

      <div className="forward-button-container">
        <Button variant="contained" onClick={handleForward}>
          {forwardButton}
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
