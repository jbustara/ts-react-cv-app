interface props {
  title?: string;
  text: string;
}

const Info = ({ title, text }: props) => {
  return (
    <div className="info">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Info;
