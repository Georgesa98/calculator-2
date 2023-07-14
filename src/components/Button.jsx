function Button(props) {
    return (
        <label htmlFor="btn" onClick={props.onClick} id={props.id}>
            <button value={props.value}  id="btn" className={props.className}>{props.number}</button>
        </label>
    )
}
export default Button;