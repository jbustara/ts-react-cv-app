interface props {
  title: string;
  description: string;
  source: string;
}
const PortfolioInfo = ({ title, description, source }: props) => {
  return (
    <div className="portfolio-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={source} target="_blank" rel="noreferrer">
        View resource
      </a>
    </div>
  );
};

export default PortfolioInfo;
