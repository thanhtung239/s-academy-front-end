import React from "react";
import './Title.scss'

export const HomeComponentTitle = (props) => {
    return (
        <div>
            <div className="home-component-title">{props.title}</div>
            <div className="title-underline"></div>
        </div>
    )
}
