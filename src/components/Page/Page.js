import React from "react";
import PageContent from "../PageContent/PageContent";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../ContactForm/ContactForm";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
