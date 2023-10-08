import "./Experience.css";
import Carousel from "./Carousel";

const Experience = () => {
  const dummyData = [
    {
      id: 1,
      titleName: "Software Developer Intern",
      companyName: "Tech Sierra",
      duration: "Jan 2022 - July 2022",
      place: "Mumbai",
      responsibilty: [
        "Crafted a dynamic, cross-platform application using React Native, ReactJS, CSS, and Redux, empowering seamless user experiences for a diverse audience spanning across India.",
        " Pioneered a bespoke Batch file feature, harnessing the power of NodeJS, ExpressJS, ReactJS, CSS, and MongoDB to streamline document processing, offering invaluable support to our Machine Learning endeavors",
        "Orchestrated AWS deployment of scalable NodeJS app with Terraform, EC2, S3, RDS, and load balancing, cutting support tickets by 45% via expertly crafted RESTFUL API",
      ],
    },
    {
      id: 1,
      titleName: "Software Developer Intern",
      companyName: "Envirocare Recycling Private Limited",
      duration: "Jan 2022 - July 2022",
      place: "Spain",
      responsibilty: [
        "Crafted a dynamic, cross-platform application using React Native, ReactJS, CSS, and Redux, empowering seamless user experiences for a diverse audience spanning across India.",
        " Pioneered a bespoke Batch file feature, harnessing the power of NodeJS, ExpressJS, ReactJS, CSS, and MongoDB to streamline document processing, offering invaluable support to our Machine Learning endeavors",
        "Orchestrated AWS deployment of scalable NodeJS app with Terraform, EC2, S3, RDS, and load balancing, cutting support tickets by 45% via expertly crafted RESTFUL API",
      ],
    },
    {
      id: 1,
      titleName: "Software Developer Intern",
      companyName: "Emkon Global",
      duration: "Jan 2022 - July 2022",
      place: "Boston",
      responsibilty: [
        "Crafted a dynamic, cross-platform application using React Native, ReactJS, CSS, and Redux, empowering seamless user experiences for a diverse audience spanning across India.",
        " Pioneered a bespoke Batch file feature, harnessing the power of NodeJS, ExpressJS, ReactJS, CSS, and MongoDB to streamline document processing, offering invaluable support to our Machine Learning endeavors",
        "Orchestrated AWS deployment of scalable NodeJS app with Terraform, EC2, S3, RDS, and load balancing, cutting support tickets by 45% via expertly crafted RESTFUL API",
      ],
    },
    {
      id: 1,
      titleName: "Software Developer Intern",
      companyName: "Silicon Sea",
      duration: "Jan 2022 - July 2022",
      place: "Germany",
      responsibilty: [
        "Crafted a dynamic, cross-platform application using React Native, ReactJS, CSS, and Redux, empowering seamless user experiences for a diverse audience spanning across India.",
        " Pioneered a bespoke Batch file feature, harnessing the power of NodeJS, ExpressJS, ReactJS, CSS, and MongoDB to streamline document processing, offering invaluable support to our Machine Learning endeavors",
        "Orchestrated AWS deployment of scalable NodeJS app with Terraform, EC2, S3, RDS, and load balancing, cutting support tickets by 45% via expertly crafted RESTFUL API",
      ],
    },
  ];
  return (
    <div className="project-container">
      <Carousel data={dummyData} />
    </div>
  );
};

export default Experience;
