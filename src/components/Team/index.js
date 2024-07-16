import CollaboratorCard from "../CollaboratorCard"
import "./style.css"

const Team = (props) => {

    const secundary = {backgroundColor: props.secundaryColor}
    const primary = {borderColor: props.primaryColor}

    return (
        (props.collaborators.length > 0) && <section className="team" style={secundary} >
            <h3 style={primary} >{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map( collaborator => {
                    return (
                        <CollaboratorCard
                            key={collaborator.name} 
                            name={collaborator.name}
                            office={collaborator.office}
                            img={collaborator.img}
                            team={collaborator.team}
                            color={props.primaryColor}
                        />
                    )
                } )} 
            </div>  
        </section>
    )
}

export default Team