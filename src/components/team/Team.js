import "./Team.css";
import Collaborator from "../Collaborator/Collaborator";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  //destructurar el objeto de props a variables
  const { primaryColor, secondaryColor, title, id } = props.team;

  const { collaborators, deleteCollaborator, changeColor, changeLike } = props;

  const styleSecondaryColor = {
    backgroundColor: hexToRgba(primaryColor, 0.6),
  };

  const titleStyle = {
    borderColor: primaryColor,
  };

  // console.log(collaborators.length > 0);

  return (
    collaborators.length > 0 && (
      <section className="team" style={styleSecondaryColor}>
        <input
          type="color"
          name=""
          id=""
          className="input-color"
          value={primaryColor}
          onChange={(e) => {
            changeColor(e.target.value, id);
          }}
        />
        <h3 style={titleStyle}>{title}</h3>
        <div className="collaborators">
          {/* <Collaborator/> */}

          {collaborators.map((collaborator, index) => (
            <Collaborator
              data={collaborator}
              key={index}
              primaryColor={primaryColor}
              deleteCollaborator={deleteCollaborator}
              changeLike={changeLike}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
