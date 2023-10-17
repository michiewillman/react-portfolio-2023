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
      <div className="">
        <img
          src={require(`../../assets/projects/${title}.jpg`).default}
          alt={title}
          className="project-bg"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p>{type}</p>
        {/* <h4>Technologies used: {technologies}</h4> */}
        <p>{description}</p>
        <div className="project-buttons">
          <a href={repo}>
            <button>View {type}</button>
          </a>
          <a href={repo}>
            <button>View Repository Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
