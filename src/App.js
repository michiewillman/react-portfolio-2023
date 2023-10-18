import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Page/Page";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [pages] = useState([
    {
      name: "About",
    },
    { name: "Portfolio" },
    { name: "Contact" },
  ]);

  // Manage the state of the page react is loading
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="pageContainer">
      <Header>
        <Navbar
          // Pass in the pages and state to control with navigation values
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        {/* Display the current page, controlled by the state we give to nav */}
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
