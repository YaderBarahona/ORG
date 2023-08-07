import "./Form.css";
import Field from "../Field/Field";
import OptionList from "../OptionList/OptionList";
import Button from "../Button/Button";
import { useState } from "react";
const Form = (props) => {
  //hooks para manipular cada input
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  //
  const [title, setTitle] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");

  //desestructurar el parametro addCollaborator de props
  const { addCollaborator, addTeam } = props;

  //funcion para cachear el evento del form al darle click al boton mediante el event onSubmit
  const manageInfo = (event) => {
    event.preventDefault();
    // console.log("Manejar envío: ", event)

    //objeto con datos de los hooks para enviarlos hacia el back
    let sendData = {
      name: name,
      position: position,
      photo: photo,
      team: team,
      //sintaxis llave y valor mismo valor
      // name,
      // position,
      // photo
    };

    // console.log(sendData);

    addCollaborator(sendData);
  };

  const manageInfoTeam = (event) => {
    event.preventDefault();
    // console.log("Manejar envío: ", event)

    //objeto con datos de los hooks para enviarlos hacia el back
    let sendData = {
      title: title,
      primaryColor: primaryColor,
    };

    // console.log(sendData);

    addTeam({title, primaryColor});
  };

  return (
    <section className="form">
      <form onSubmit={manageInfo}>
        <h2>Fill in the form to create the collaborator.</h2>
        <Field
          titulo="Name"
          placeholder="Type name"
          required
          value={name}
          setValue={setName}
        />
        <Field
          titulo="Position"
          placeholder="Type position"
          required
          value={position}
          setValue={setPosition}
        />
        <Field
          titulo="Photo"
          placeholder="Type link photo"
          required
          value={photo}
          setValue={setPhoto}
        />
        <OptionList value={team} setValue={setTeam} teams={props.teams} />
        <Button titulo="Add collaborator" />
        {/* <Button>
          Crear
        </Button> */}
      </form>

      <form onSubmit={manageInfoTeam}>
        <h2>Fill in the form to create the team.</h2>
        <Field
          titulo="Title"
          placeholder="Type title"
          required
          value={title}
          setValue={setTitle}
        /> 
        <Field
          titulo="Team color"
          // placeholder="Type color in hexdecimal code"
          required
          value={primaryColor}
          setValue={setPrimaryColor}
          type="color"
        />
        <Button titulo="Add team" />
      </form>
    </section>
  );
};

export default Form;
