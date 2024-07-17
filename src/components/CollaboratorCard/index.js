import { IoIosCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "./style.css"

const CollaboratorCard = ({collaborator, color, onDelet, onFav}) => {

    const favoriter = () => {
        onFav(collaborator.id)
    }

    const propsIcons = {
        size: 25,
        onClick: favoriter
    }

    return (
        <div className="collaborator">
            <IoIosCloseCircle 
                size={32} 
                className="delet" 
                onClick={() => onDelet(collaborator.id)} 
            />
            <div style={{backgroundColor:color}} className="header-card-colaborator">
                <img src={collaborator.img} alt={collaborator.name}/>
            </div>
            <div className="footer-card-collaborator">
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.office}</h5>
                <div className="favorite">
                    {collaborator.fav
                        ? <MdFavorite {...propsIcons} color="red"/> 
                        : <MdFavoriteBorder {...propsIcons} color="black"/>
                    }
                </div>
            </div>
        </div>
    )
}

export default CollaboratorCard