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
  const backButton = "<";
  const forwardButton = ">";
  return (
    <div className="carousel-container">
      <div className="back-button-container">
        <Button variant="contained">{backButton}</Button>
      </div>

      {dataFromProps.map((item) => {
        return (
          <div className="card-container">
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 200, width: '100%' }}
                image={mumbai}
                title="city image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.titleName}
                </Typography>
                <Typography variant="subtitle1">{item.duration}, {item.place}</Typography>
                <ul>
                  <li>Responsibility 1</li>
                  <li>Responsibility 2</li>
                  <li>Responsibility 3</li>
                  {/* Add more responsibilities as needed */}
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
        <Button variant="contained">{forwardButton}</Button>
      </div>
    </div>
  );
};

export default Carousel;
