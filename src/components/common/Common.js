import React from "react";
import "./Common.scss"

export const RowInfoCourseCard = (props) => {
    return (
        <div className="row-info-course-card">
            {props.icon}
            <div style={{marginLeft: 10}}>{props.title}: {props.data}</div>
        </div>
    )
}

