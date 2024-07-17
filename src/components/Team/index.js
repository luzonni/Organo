import CollaboratorCard from "../CollaboratorCard"
import "./style.css"

const Team = ({collaborators, team, onDelet, changeColor}) => {

    return (
        (collaborators.length > 0) && <section className="team" style={{backgroundColor: team.secundaryColor}} >
            <input 
                type="color" 
                className="input-color" 
                value={team.primaryColor}
                onChange={event => {
                    changeColor(team.name, event.target.value)
                }}
            />
            <h3 style={{borderColor: team.primaryColor}} >{team.name}</h3>
            <div className="collaborators">
                {collaborators.map( (collaborator, index) => {
                    return (
                        <CollaboratorCard
                            key={index} 
                            name={collaborator.name}
                            office={collaborator.office}
                            img={collaborator.img}
                            color={team.primaryColor}
                            onDelet={onDelet}
                        />
                    )
                } )} 
            </div>  
        </section>
    )
}

export default Team