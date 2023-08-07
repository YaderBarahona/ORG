import "./App.css";
import Header from "./components/Header/Header";
// console.log(Header);
import Form from "./components/Form/Form";
import MiOrg from "./components/MiOrg/MiOrg";
import { useState } from "react";
import Team from "./components/team/Team";
import Footer from "./components/Footer/Footer";
import { v4 as uuidv4 } from 'uuid';


function App() {
  // let suma = 1-1;

  //hook para cambiar el estado del formulario para mostrarlo u ocutarlo
  const [form, showForm] = useState(false);

  //

  //  
  const [like, setLike] = useState(false);

  const [collaborators, setCollaborators] = useState([
    {
      id: uuidv4(),
      team: "Programming",
      photo: "https://github.com/YaderBarahona.png",
      name: "Yader Barahona",
      position: "Developer",
      fav: true
    },
  ]);

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      title: "Programming",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      id: uuidv4(),
      title: "Front End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },

    {
      id: uuidv4(),
      title: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },

    {
      id: uuidv4(),
      title: "DevOps",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },

    {
      id: uuidv4(),
      title: "Ux and design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },

    {
      id: uuidv4(),
      title: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },

    {
      id: uuidv4(),
      title: "Innovation and management",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ]);

  //funcion que cambia el estado del hook state
  const handleClick = () => {
    showForm(!form);
  };

  const addCollaborator = (collaborator) => {
    console.log("New collaborator: ", collaborator);
    //spread operator -> tomar los datos actuales del array, realiza una copia del mismo y se agrega el nuevo dato al array
    setCollaborators([...collaborators, collaborator]);
  };

  const deleteCollaborator = (id) => {
    console.log("Delete collaborator id: ", id);
    //filter regresa un nuevo arreglo sin modificar el original
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id != id);
    console.log(newCollaborators);
    setCollaborators(newCollaborators);
  };

  const changeColor = (color, id) => {
    console.log("Update color: ", color, " in team id: ", id);
    const updateTeam = teams.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }

      //retornamos el array transformado con el color al equipo
      return team;
    });
    setTeams(updateTeam);
  };

  const addTeam = (team) => {
    console.log("Team: ", team);
    setTeams([...teams, {...team, id: uuidv4()}]);
  }

  const changeLike = (id) => {
    console.log("like: ", id);
    const updateCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
          collaborator.fav = !collaborator.fav;
      }

      return collaborator
    }) 
    setLike(!like);
  };

  return (
    <div>
      {/* suma, {header()} */}
      <Header />
      {/* ternario -> condicion ? seMuestra : noSeMuestra
          cortocircuito -> condicion && seMuestra */}
      {form === true ? (
        <Form
          teams={teams.map((team) => team.title)}
          addCollaborator={addCollaborator} addTeam={addTeam}
        />
      ) : (
        <></>
      )}
      {/* {form && <Form/>}  */}
      {/* <Form /> */}
      <MiOrg handleClick={handleClick} />
      {/* <Team team="Programación" /> */}
      {teams.map(
        (team) => (
          <Team
            team={team}
            key={team.title}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.title
            )}
            deleteCollaborator={deleteCollaborator}
            changeColor={changeColor}
            changeLike={changeLike}
          />
        )
        // console.log("equipo: " + team);
        // return <Team equipo={team} key={index}/>
        // })
      )}
      <Footer />
    </div>
  );
}

export default App;
