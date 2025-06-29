import React from "react"

export default function Jokes(props) {
    const [isShown, setShown] = React.useState(true)
    console.log(isShown)
    function handleClick() {
        setShown(prevIsShown => !prevIsShown)
        console.log(prevIsShown)
    }
    
    return (
        <article>

            
            {props.setup && <h3>{props.setup}</h3>}
            {isShown === true ? <p>{props.punchline}</p> : null}
            <button onClick={handleClick}>{isShown ? "Hide" : "show"} Punchline</button>

            {/* <p>{props.punchline}</p> */}
        </article>
    )
}