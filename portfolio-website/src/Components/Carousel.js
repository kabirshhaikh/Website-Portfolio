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
                image={mumbai} // You may want to replace this with item-specific image
                title="city image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.titleName}
                </Typography>
                <Typography variant="subtitle1">
                  {item.duration}, {item.place}
                </Typography>
                <ul>
                  <li>Responsibility 1</li>
                  <li>Responsibility 2</li>
                  <li>Responsibility 3</li>
                </ul>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
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
