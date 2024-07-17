import CollaboratorCard from "../CollaboratorCard"
import hexToRgba from 'hex-to-rgba';
import "./style.css"

const Team = ({collaborators, team, onDelet, changeColor, onFav}) => {

    return (
        (collaborators.length > 0) && <section className="team" style={{backgroundColor: hexToRgba(team.color, 0.2)}} >
            <input 
                type="color" 
                className="input-color" 
                value={team.color}
                onChange={event => {
                    changeColor(team.id, event.target.value)
                }}
            />
            <h3 style={{borderColor: team.color}} >{team.name}</h3>
            <div className="collaborators">
                {collaborators.map( (collaborator, index) => {
                    return (
                        <CollaboratorCard
                            key={index} 
                            collaborator={collaborator}
                            color={team.color}
                            onDelet={onDelet}
                            onFav={onFav}
                        />
                    )
                } )} 
            </div>  
        </section>
    )
}

export default Team