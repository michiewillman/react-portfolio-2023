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
      image: "/images/somethingborrowed.png",
      details:
        "Something Borrowed is an application created to foster quality community connections while eliminating unnecessary consumer purchases through borrowing and lending everyday products. The app currently runs on community accountability, however the application has the potential to be upgraded to using fee-per-day rentals from locals in your neighborhood.",
      link: "https://github.com",
      hasRepo: true,
      repo: "https://github.com",
    },
    {
      title: "CampAire",
      type: "Web Application",
      description:
        "Fosters community relationships & reduces via borrowing and lending items with neighbors.",
      technologies: ["Node.js", "Express.js", "React"],
      image: "/images/somethingborrowed.png",
      details:
        "Something Borrowed is an application created to foster quality community connections while eliminating unnecessary consumer purchases through borrowing and lending everyday products. The app currently runs on community accountability, however the application has the potential to be upgraded to using fee-per-day rentals from locals in your neighborhood.",
      link: "https://github.com",
      hasRepo: true,
      repo: "https://github.com",
    },
    {
      title: "Flying Black Cat",
      type: "E-Commerce Website",
      description:
        "Flying Black Cat - A brand geared towards young aviators and cat-lovers alike. Tells the story of one epic cat.",
      technologies: ["Wordpress", "WooCommerce", "E-Commerce", "Yoast SEO"],
      image: "/images/somethingborrowed.png",
      details:
        "For more about the legend of the Flying Black Cat visit www.flyingblackcat.com.",
      link: "https://github.com",
      hasRepo: false,
      repo: "https://github.com",
    },
    {
      title: "Ariav Investments",
      type: "Wordpress Website",
      description: "Ariav Investments",
      technologies: ["Node.js", "Express.js", "React"],
      image: "/images/somethingborrowed.png",
      details: "Ariav Investments",
      link: "https://github.com",
      hasRepo: false,
      repo: "https://github.com",
    },
    {
      title: "Daily Schedule Manager",
      type: "Web Application",
      description:
        "Assists you with managing your daily tasks using local storage.",
      technologies: ["Local Storage"],
      image: "/images/somethingborrowed.png",
      details: "Just type it in, and save it!",
      link: "https://github.com",
      hasRepo: true,
      repo: "https://github.com",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, index) => (
          <Project project={project} key={"project" + index} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
