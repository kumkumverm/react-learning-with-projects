import React from "react"

export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, ___!{props.userName}</h1>
        </section>
    )
}