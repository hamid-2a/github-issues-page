import React from "react";
import "./badge.styles.css";

const Badge = ({ type, bgColor, url, id }) => {
    return (
        <div className="badge" id={id} style={{ backgroundColor: "#" + bgColor }}>
            <a href={url}>{type}</a>
        </div>
    )
};

export default Badge;