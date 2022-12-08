const Buttons = (props) => {
    return (
        <button onClick={props.handler}>{props.name}</button>
    );
}
 
export default Buttons;