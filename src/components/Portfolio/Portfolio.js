import React, { useState } from "react";
import Project from "../Project/Project";

function Portfolio() {
  // Portfolio project details
  const [projects] = useState([
    {
      title: "Something Borrowed",
      type: "Web Application",
      description:
        "Fosters community relationships & reduces via borrowing and lending items with neighbors.",
      technologies: ["Node.js", "Express.js", "React"],
      image: "somethingborrowed.jpg",
      details:
        "Something Borrowed is an application created to foster quality community connections while eliminating unnecessary consumer purchases through borrowing and lending everyday products. The app currently runs on community accountability, however the application has the potential to be upgraded to using fee-per-day rentals from locals in your neighborhood.",
      link: "https://something-borrowed-app-2c8932a694d6.herokuapp.com/",
      hasRepo: true,
      repo: "https://github.com/michiewillman/something-borrowed",
    },
    {
      title: "CampAire",
      type: "Web Application",
      description:
        "Fosters community relationships & reduces via borrowing and lending items with neighbors.",
      technologies: ["Node.js", "Express.js", "React"],
      image: "campaire.jpg",
      details:
        "Something Borrowed is an application created to foster quality community connections while eliminating unnecessary consumer purchases through borrowing and lending everyday products. The app currently runs on community accountability, however the application has the potential to be upgraded to using fee-per-day rentals from locals in your neighborhood.",
      link: "https://michiewillman.github.io/campaire-app/",
      hasRepo: true,
      repo: "https://github.com/michiewillman/campaire-app",
    },
    {
      title: "Flying Black Cat",
      type: "E-Commerce Website",
      description:
        "Flying Black Cat - A brand geared towards young aviators and cat-lovers alike. Tells the story of one epic cat.",
      technologies: ["Wordpress", "WooCommerce", "E-Commerce", "Yoast SEO"],
      image: "flyingblackcatmock.jpg",
      details:
        "For more about the legend of the Flying Black Cat visit www.flyingblackcat.com.",
      link: "https://flyingblackcat.com/",
      hasRepo: false,
    },
    {
      title: "Ariav Investments",
      type: "Wordpress Website",
      description: "Ariav Investments",
      technologies: ["Node.js", "Express.js", "React"],
      image: "ariavmock.jpg",
      details: "Ariav Investments",
      link: "http://ariav.com/",
      hasRepo: false,
    },
    {
      title: "Daily Schedule Manager",
      type: "Web Application",
      description:
        "Assists you with managing your daily tasks using local storage.",
      technologies: ["Local Storage"],
      image: "workdayscheduler.jpg",
      details: "Just type it in, and save it!",
      link: "https://michiewillman.github.io/workday-scheduler/",
      hasRepo: true,
      repo: "https://github.com/michiewillman/workday-scheduler",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {/* For each project in the array, render a Project component with a unique key and pass the project details */}
        {projects.map((project, index) => (
          <Project project={project} key={"project" + index} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
