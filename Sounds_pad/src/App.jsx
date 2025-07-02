import padsData from "./pads"
import React from "react"
import Pad from "./Pad"
export default function App() {
    const [pads, setPads] = React.useState(padsData)
    function toggle(id) {
        console.log(id)
        setPads(prevPads =>
            prevPads.map(pad =>
                pad.id === id ? { ...pad, on: !pad.on } : pad

            )
        )
    }
    const buttonElements = pads.map(pad => (
        < Pad
            // handleClick={()=>toggle(pad.id)}
            handleClick={toggle}
            key={pad.id}
            id={pad.id}
            color={pad.color}

            on={pad.on} />
    ))
    return (    
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}