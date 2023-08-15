interface props {
  name: string;
  avatar: string;
}

const PhotoBox = ({ name, avatar }: props) => {
  return (
    <figure className="photo-box">
      <img src={avatar} alt="user" />
      <strong>{name}</strong>
    </figure>
  );
};

export default PhotoBox;
