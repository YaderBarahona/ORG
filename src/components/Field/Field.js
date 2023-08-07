import "./Field.css";
import { useState } from "react";
const Field = (props) => {

  // const [text, setText] = useState("")

  console.log("Datos: ", props);
  // console.log("titulo: ", props.titulo);
  // console.log("placeholder: ", props.placeholder);

  //modificar la prop de placeholder 
  const placeholderModify = `${props.placeholder}...`

  //destructurar 
  //valor por defecto del type del input
  const { type = "text"} = props

  // console.log(type);

  const manageState = (e) => {
    // console.log("cambio - ", e.target.value);
    // setText(e.target.value)
    props.setValue(e.target.value);
  }

  return (
    <div className={`field field-${type}`}>
      <label>{props.titulo}</label>
      <input placeholder={placeholderModify} required={props.required} value={props.value} onChange={manageState} type={type}/> 
    </div>
  );
};

export default Field;
