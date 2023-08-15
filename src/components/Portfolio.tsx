import { useEffect, useState } from "react";
import Isotope from "isotope-layout";

import card1 from "../assets/images/card_1.png";
import card2 from "../assets/images/card_2.png";
import { PortfolioData, TypePortfolio } from "../types";

interface props {
  portfolio: PortfolioData[];
}

const Portfolio = ({ portfolio = [] }: props) => {
  const [isotope, setIsotope] = useState<Isotope | null>();
  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      })
    );
  }, []);

  const handleFilter = (key: string) => {
    if (key === "*") {
      isotope?.arrange({ filter: "*" });
    } else {
      isotope?.arrange({ filter: `.${key}` });
    }
  };

  return (
    <div>
      <ul className="tabs">
        <li onClick={() => handleFilter("*")}>all</li>
        <li onClick={() => handleFilter(TypePortfolio.backend)}>
          {TypePortfolio.backend}
        </li>
        <li onClick={() => handleFilter(TypePortfolio.frontend)}>
          {TypePortfolio.frontend}
        </li>
      </ul>
      <ul className="filter-container">
        {portfolio.map((project) => {
          const { type, description, title, card, source, id } = project;
          return (
            <li className={`filter-item ${type}`} key={id}>
              <img src={card === 1 ? card1 : card2} alt="card" />
              <div className="portfolio-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={source} target="_blank" rel="noreferrer">
                  View resource
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Portfolio;
