import { useState } from 'react';
import './MiOrg.css'
const MiOrg = (props) => {

  //estado - hook
  //useState
  //const [name, updateName] = useState("Yader")

  // const [show, updateShow] = useState(true)

  // const handleClick = () => {
  //   console.log("Mostrar/Ocultar elemento: ", !show);
  //   updateShow(!show)
  // }

  console.log(props);

  return (
    <section className="org-section">
      <h3 className='title'>My organization</h3>
      <img src="/img/add.png" alt="add" onClick={props.handleClick}/>
    </section>
  );
};

export default MiOrg
