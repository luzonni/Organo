import { IoIosCloseCircle } from "react-icons/io";
import "./style.css"

const CollaboratorCard = ({name, office, img, color, onDelet}) => {

    return (
        <div className="collaborator">
            <IoIosCloseCircle size={32} className="delet" onClick={onDelet} />
            <div style={{backgroundColor:color}} className="header">
                <img src={img} alt={name}/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    )
}

export default CollaboratorCard