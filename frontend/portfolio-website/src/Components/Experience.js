import "./Experience.css";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";

const Experience = () => {
  const [dataFromBackend, setDataFromBackend] = useState([]);

  const data = () => {
    fetch("http://localhost:4000/get-all-experiences")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDataFromBackend(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="project-container">
      <Carousel data={dataFromBackend} />
    </div>
  );
};

export default Experience;
