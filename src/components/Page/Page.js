import React from "react";
import PageContent from "../PageContent/PageContent";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../ContactForm/ContactForm";

function Page({ currentPage }) {
  // For each button in the nav, render that component
  const renderPage = () => {
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      {/* Render the current page name as the title */}
      <h2>{currentPage.name}</h2>
      {/* Render the current page's content */}
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
