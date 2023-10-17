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

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="pageContainer">
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
