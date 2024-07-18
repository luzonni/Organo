import "./style.css"

const Buttom = (props) => { 
    return (
        <button className="buttom" onClick={props.onClick}>{props.children}</button>
    )
}

export default Buttom