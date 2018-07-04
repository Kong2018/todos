import React from "react"

const Link = ({onClick, active, children}) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{marginLeft: "5px"}}>
        {children}
    </button>
);

export default Link