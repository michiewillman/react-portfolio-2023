import "./About.css";

function About() {
  const profilePic = "flowerselfie.jpg";

  return (
    <section>
      <div id="about-section">
        <div className="project-item">
          <img
            src={require(`../../assets/${profilePic}`)}
            alt="michie willman, web developer portfolio"
            className="project-image"
          />
        </div>
        <div className="about-details">
          {" "}
          <p>
            Climbing my way up to a senior-level design position from a degree
            in communications wasn't easy, but I was determined to make it work.
            I am excited to prove my passion and ambition for web development in
            the same way. Utilizing my advanced skills acquired from the Full
            Stack Web Development bootcamp from the University of Oregon, I'm
            ready to create applications that will serve my community in a
            positive way.
          </p>
          <p>
            I'm technically skilled in the following languages and technologies:
            Node.js, Express.js, React, HTML, CSS, JavaScript, Graph QL, MySQL,
            NoSQL, MongoDB, REST APIs, third-party APIs, Handlebars, Bootstrap,
            Tailwind, and more.
          </p>
          {/* <a href="/portfolio">
            <button className="btn">View Projects</button>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default About;
