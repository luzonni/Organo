import "./style.css"

const SuspendedList = (props) => {
    
    return (
        <div className="suspended-list">
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.value}>
                <option value="">Times</option>
                {props.items.map(item => {
                    return (<option key={item}>{item}</option>)
                })}
            </select>
        </div>
    )
}

export default SuspendedList