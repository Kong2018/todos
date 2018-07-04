import React from "react";
import PropTypes from "prop-types"

const Link = ({onClick, active, children}) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{marginLeft: "5px"}}>
        {children}
    </button>
);

Link.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};
export default Link