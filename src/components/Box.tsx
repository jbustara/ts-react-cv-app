interface props {
  title: string;
  children?: JSX.Element | JSX.Element[];
  id: string;
}

const Box = ({ title, children, id }: props) => {
  return (
    <div className="info-box" id={id}>
      <h2>{title}</h2>
      <div className="info-box__content">{children}</div>
    </div>
  );
};

export default Box;
