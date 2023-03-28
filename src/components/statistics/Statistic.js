import React from "react";
import "./Statistics.scss"

export const HomeStatistics = (props) => {
    return (
        <div className="home-statistics">
            <div>{props.data.title}</div>
            <div className="icon">{props.data.icon}</div>
            <div>{props.data.data}</div>
        </div>
    )
}

