import { useEffect } from "react";
import "./Navbar.css";

function Navbar(props) {
  // State of the current page from parent
  const { pages = [], setCurrentPage, currentPage } = props;

  // Changes the title of the window to the current page name
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <nav>
      <ul className="navlinks">
        {/* Iterate through pages array and map a nav link item to each */}
        {pages.map((page) => (
          <li
            className={`navitem ${
              currentPage.name === page.name && "navActive"
            }`}
            key={page.name}
          >
            {/* Update page state on click */}
            <span onClick={() => setCurrentPage(page)}>{page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
