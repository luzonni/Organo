import "./style.css"

const ColorField = (props) => {

    const onChangeColor = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="color-field">
            <label>{props.label}</label>
            <input 
                type="color" 
                value={props.value}  
                onChange={onChangeColor} 
                required={props.required}  
            />
        </div>
    )
}

export default ColorField