import "./Experience.css";
import Carousel from "./Carousel";

const Experience = () => {
  const dummyData = [
    {
      id: 1,
      titleName: "Software Developer Intern",
      duration: "Jan 2022 - July 2022",
      place: "Mumbai",
    },
    {
      id: 1,
      titleName: "Software Developer Intern",
      duration: "Jan 2022 - July 2022",
      place: "Spain",
    },
    {
      id: 1,
      titleName: "Software Developer Intern",
      duration: "Jan 2022 - July 2022",
      place: "Boston",
    },
    {
      id: 1,
      titleName: "Software Developer Intern",
      duration: "Jan 2022 - July 2022",
      place: "Germany",
    },
  ];
  return (
    <div className="project-container">
      <Carousel data={dummyData} />
    </div>
  );
};

export default Experience;
