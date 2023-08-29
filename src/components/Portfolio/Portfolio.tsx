import { useEffect, useRef } from "react";
import Isotope from "isotope-layout";

import card1 from "../../assets/images/card_1.png";
import card2 from "../../assets/images/card_2.png";
import { PortfolioData, TypePortfolio } from "../../types";
import PortfolioInfo from "./PortfolioInfo";

interface props {
  portfolio: PortfolioData[];
}

const Portfolio = ({ portfolio }: props) => {
  const isotope = useRef<Isotope | null>();
  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current?.destroy();
  }, []);

  const handleFilter = (key: string) => {
    if (key === "*") {
      isotope.current?.arrange({ filter: "*" });
    } else {
      isotope.current?.arrange({ filter: `.${key}` });
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
              <PortfolioInfo
                description={description}
                title={title}
                source={source}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Portfolio;
