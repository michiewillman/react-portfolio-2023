import "./Navbar.css";

function Navbar(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <nav>
      <ul className="navlinks">
        {pages.map((page) => (
          <li
            className={`navitem ${
              currentPage.name === page.name && "navActive"
            }`}
            key={page.name}
          >
            <span onClick={() => setCurrentPage(page)}>{page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
