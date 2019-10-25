import React from 'react'
import spinner from "../../assets/Spinner-1s-200px.gif"

const Spinner = () => {
    return (
        <div>
            <img src={spinner}
            alt="Loading..."
            style={{ width: "34rem", margin: "auto", display: "block"}}/>
        </div>
    )
}

export default Spinner
