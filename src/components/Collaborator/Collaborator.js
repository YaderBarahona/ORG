import "./Collaborator.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Collaborator = (props) => {
  const { name, position, photo, team, id, fav } = props.data;
  const { primaryColor, deleteCollaborator, changeLike } = props;
  return (
    <div className="collaborator">
      <AiFillCloseCircle
        className="delete"
        onClick={() => deleteCollaborator(id)}
      />
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{position}</h5>
        {fav === true ? <AiFillHeart color="red" onClick={() => changeLike(id)} /> : <AiOutlineHeart onClick={() => changeLike(id)} />}
      </div>
    </div>
  );
};

export default Collaborator;
