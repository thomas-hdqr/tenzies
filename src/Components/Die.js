export default function die(props) {
    return (
        <div className="die-face" 
             style={props.isHeld === true ? {backgroundColor: '#59E391'} : {backgroundColor: 'white'}}
             onClick={props.holdDice}
            
            >
            <h2  className="die-num">{props.value}</h2>
        </div>
    )
}