import './OptionList.css'
const OptionList = (props) => {

    //metodo map para recorrer el arraye en jsx
    // const teams = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "DevOps",
    //     "Ux y Diseño",
    //     "Móvil",
    //     "Innovación y gestión"
    // ];

    const manageChange = (e) => {
        console.log("cambio: ", e.target.value);
        props.setValue(e.target.value);
    }

    return <div className="option-list">
        <label>Team</label>
        <select value={props.value} onChange={manageChange}>
            <option value ="" disabled defaultValue="" hidden>Select team</option>
            {/* <option>Programación</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>DevOps</option>
            <option>Ux y Diseño</option>
            <option>Móvil</option>
            <option>Innovación y gestión</option> */}
            {props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)}

        </select>
    </div>
}
export default OptionList