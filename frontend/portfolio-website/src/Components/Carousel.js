import React, { useState } from "react";
import "./Carousel.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import mumbai from "../Image/mumbai.jpeg";

const Carousel = (props) => {
  const dataFromProps = props.data;
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

      {dataFromProps.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`card-container ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 200, width: "100%" }}
                image={mumbai} 
                title="city image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.companyName}
                </Typography>
                <Typography variant="subtitle1">
                  <b>{item.titleName}</b>
                </Typography>
                <Typography variant="subtitle1">
                  {item.duration}, {item.place}
                </Typography>
                <ul>
                  {item.responsibilty.map((responsibility, index) => (
                    <li style={{ marginTop: "10px" }} key={index}>
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
