import "./Project.css";

function Project({ project }) {
  // Pull in details from projects declared in Portfolio
  const {
    title,
    type,
    description,
    technologies,
    image,
    details,
    link,
    hasRepo,
    repo,
  } = project;

  return (
    <div className="project-container" key={title}>
      <div className="project-item">
        {/* Dynamically render project's image based on the details in props */}
        <img
          src={require(`../../assets/${image}`)}
          alt={title}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p>{type}</p>
        {/* <h4>Technologies used: {technologies}</h4> */}
        <p>{description}</p>
        <div className="project-buttons">
          <a className="project-btn" href={link}>
            <button className="btn">View {type}</button>
          </a>
          {/* If project hasRepo = true, ender a repo button */}
          {hasRepo && (
            <a href={repo}>
              <button className="btn">View Repository Code</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
